import React, { useRef, useState, useCallback } from "react"
import Webcam from "react-webcam"
import styles from './WebcamRecorder.module.css'

interface WebcamRecorderProps {
    questionSize: number;
    currentQuestion: number;
    handleNextQuestion: any;
}

const WebcamRecorder = ({ questionSize, currentQuestion, handleNextQuestion }: WebcamRecorderProps) => {
    const isLastQuestion = currentQuestion === questionSize

    const webcamRef = useRef<any>(null)
    const mediaRecorderRef = useRef<any>(null)
    const [capturing, setCapturing] = useState(false)
    const [recordedChunks, setRecordedChunks] = useState([])

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
        <>
            <Webcam ref={webcamRef} width={600} />
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
                    <button onClick={handleS3} className={styles.nextButton}>
                        {isLastQuestion ? 'Finish' : 'Next Question'}
                    </button>
                )}
            </div>
        </>
    )
}

export default WebcamRecorder