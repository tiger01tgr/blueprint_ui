import React, { useRef, useState, useCallback, useEffect } from "react"
import Webcam from "react-webcam"
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from './WebcamRecorder.module.css'

interface WebcamRecorderProps {
    isLastQuestion: boolean;
    currentQuestion: Question;
    handleNextQuestion: any;
}

const WebcamRecorder = ({ currentQuestion, isLastQuestion, handleNextQuestion }: WebcamRecorderProps) => {
    const webcamRef = useRef<any>(null)
    const mediaRecorderRef = useRef<any>(null)
    const [capturing, setCapturing] = useState(false)
    const [recordedChunks, setRecordedChunks] = useState([])
    const [remainingTime, setRemainingTime] = useState(parseInt(currentQuestion.timeLimit))
    const [key, setKey] = useState(0)

    useEffect(() => {
        setRemainingTime(parseInt(currentQuestion.timeLimit))
        setKey((prevKey) => prevKey + 1)
    }, [currentQuestion])

    const renderTime = ({ remainingTime }: any) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60

        if (remainingTime == 0) {
            setTimeout(function () {
                handleStopCaptureClick()
                handleS3()
            }, 5000)
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
        if (recordedChunks.length) {
            // change this to send to s3
            const blob = new Blob(recordedChunks, {
                type: "video/webm"
            })
            const url = URL.createObjectURL(blob)
            console.log(url)
            // upload to s3

            // const a = document.createElement("a")
            // document.body.appendChild(a)
            // a.href = url
            // console.log(a)
            // a.download = "react-webcam-stream-capture.webm"
            // a.click()
            // window.URL.revokeObjectURL(url)
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
                    <button onClick={handleStartCaptureClick} className={styles.startButton}>
                        Start
                    </button>
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