export const findIndex = (array: any[], id: any) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            return i
        }
    }
    return -1
}