import React, { useRef, useState, useCallback, useEffect } from "react"
import Webcam from "react-webcam"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import styles from './WebcamRecorder.module.css'
import { Question } from '@/utils/types/question'
import { Session } from "@/utils/types/session"
import useSessions from "@/hooks/session/useSessions"

interface WebcamRecorderProps {
    isLastQuestion: boolean;
    currentQuestion: Question;
    handleNextQuestion: any;
    currentSession: Session | null;
    token: string;
    questionSetId: number;
}

const WebcamRecorder = ({ 
    currentQuestion,
    isLastQuestion, 
    handleNextQuestion, 
    currentSession, 
    token,
    questionSetId
}: WebcamRecorderProps) => {

    const webcamRef = useRef<any>(null)
    const mediaRecorderRef = useRef<any>(null)
    const [capturing, setCapturing] = useState(false)
    const [recordedChunks, setRecordedChunks] = useState([])
    const [remainingTime, setRemainingTime] = useState(parseInt(currentQuestion.timeLimit))
    const [started, setStarted] = useState<boolean>(false)
    const [key, setKey] = useState(0)
    const [secondsLeft, setSecondsLeft] = useState(100)
    const { submitQuestion } = useSessions()

    useEffect(() => {
        setRemainingTime(parseInt(currentQuestion.timeLimit))
        setSecondsLeft(parseInt(currentQuestion.timeLimit))
        setKey((prevKey) => prevKey + 1)
        setStarted(false)
    }, [currentQuestion])

    const renderTime = ({ remainingTime }: any) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60

        if (remainingTime == 0) {
            setSecondsLeft(0)
            setTimeout(function () {
                handleStopCaptureClick()
            }, 6000)
        }

        return (
            <div className={styles.timer}>
                <div className={styles.timerTitle}>
                    Remaining Time
                </div>
                <div className={styles.timerText}>
                    {remainingTime === 0 ? (
                        <div className={styles.timerUp}>Time&apos;s up!</div>
                    ) : (
                        <div className={styles.timerText}>
                            {minutes > 0 ? (
                                <div>{minutes} {minutes === 1 ? 'minute' : 'minutes'}</div>
                            ) : null}
                            {seconds > 0 ? (
                                <div>{seconds} {seconds === 1 ? 'second' : 'seconds'}</div>
                            ) : null}
                        </div>
                    )}
                </div>
            </div>
        )
    }

    const handleStartCaptureClick = React.useCallback(() => {
        setCapturing(true)
        setStarted(true)
        setRecordedChunks([])
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
            mimeType: "video/webm"
        })
        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        )
        mediaRecorderRef.current.start()
    }, [webcamRef, setCapturing, mediaRecorderRef])

    const handleDataAvailable = useCallback(
        ({ data }: any) => {
            if (data.size > 0) {
                setRecordedChunks((prev) => prev.concat(data))
            }
        },
        [setRecordedChunks]
    )

    const handleStopCaptureClick = useCallback(() => {
        mediaRecorderRef.current.stop()
        setCapturing(false)
    }, [mediaRecorderRef, webcamRef, setCapturing])

    const handleS3 = useCallback(() => {
        mediaRecorderRef.current.stop()
        setCapturing(false)
        if (recordedChunks.length) {
            // change this to send to s3
            const blob = new Blob(recordedChunks, {
                type: "video/webm"
            })
            const video = new File([blob], "recordedVideo.webm", { type: "video/webm" })
            if (currentSession) {
                submitQuestion(token, questionSetId, currentSession.id, currentQuestion.id, video)
            }
            setRecordedChunks([])
            handleNextQuestion()
        }
    }, [recordedChunks])

    return (
        <div className={styles.liner}>
            <div className={styles.recordSection}>
                <Webcam audio={true} muted={true} ref={webcamRef} width={600} />
                <div className={styles.circleLiner}>
                    <CountdownCircleTimer
                        key={key}
                        isPlaying={capturing}
                        duration={remainingTime}
                        colors={"#004777"}
                        onComplete={() => ({ shouldRepeat: false })}
                        size={440}
                        initialRemainingTime={remainingTime}
                    >
                        {renderTime}
                    </CountdownCircleTimer>
                </div>
            </div>
            <div className={styles.primaryButtonSection}>
                {capturing ? (
                    <button onClick={handleStopCaptureClick} className={styles.stopButton}>
                        Done Answering
                    </button>
                ) : (
                    secondsLeft > 0 ? (
                        started ? (
                            <button onClick={handleStartCaptureClick} className={styles.startButton}>
                                Restart
                            </button>
                        ) : (
                            <button onClick={handleStartCaptureClick} className={styles.startButton}>
                                Start
                            </button>
                        )
                    ) : null
                )}
                {recordedChunks.length > 0 && (
                    <button onClick={handleS3} className={styles.nextButton} disabled={capturing}>
                        {isLastQuestion ? 'Finish' : 'Next Question'}
                    </button>
                )}
            </div>
        </div>
    )
}

export default WebcamRecorder