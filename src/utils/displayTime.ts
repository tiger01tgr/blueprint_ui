export const displayTime = (time: number): string => {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60

    let minutesString = minutes === 1 ? `${minutes} minute` : `${minutes} minutes`
    let secondsString = seconds === 1 ? `${seconds} second` : `${seconds} seconds`

    if (minutes === 0) {
        minutesString = ""
    }

    if (seconds === 0) {
        secondsString = ""
    }

    return `${minutesString} ${secondsString}`.trim()
}
