export const copyMultidimensionalArray = arr => { // a sense of darkness embracing my soul
    return JSON.parse(JSON.stringify(arr));
}
export const arraySum = array =>
    array.reduce(
        (sum, num) => sum + (Array.isArray(num) ? arraySum(num) : num * 1),
        0
    );