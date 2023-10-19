export const addToUrl = (param: string, array: any[]) => {
    let urlPart = ''
    if (array.length > 0) {
        urlPart += `&${param}=`
        array.forEach((item, index) => {
            urlPart += item;
            if (index < array.length - 1) {
                urlPart += ','
            }
        })
    }
    return urlPart
}