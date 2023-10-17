export const stringsToNumbers = (arrayOfStrings: any[]): number[] => {
    let array: number[] = []
    arrayOfStrings.forEach((string) => {
        array.push(parseInt(string))
    })
    return array
}