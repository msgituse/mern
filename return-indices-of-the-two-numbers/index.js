/**
 * program for get indices of the two numbers
 * 
 */
const getIndicesOfTwonumbers = (numsArray, targetSum) => {
    // check for numsArray is empty or has less than 2 elements
    if (!Array.isArray(numsArray) || numsArray.length < 2) {
        throw new Error("Input array must have at least two elements.")
    }
    // check array has integer elments only
    if (!numsArray.every(num => Number.isInteger(num))) {
        throw new Error('All elements of the array must be integers.')
    }
    const numsMap = new Map()
    for (let i = 0; i < numsArray.length; i++) {
        const remainSum = targetSum - numsArray[i]
        if (numsMap.has(remainSum)) {
            return [numsMap.get(remainSum), i]
        }
        numsMap.set(numsArray[i], i)
    }
    throw new Error("No two sum solution exists.")
}

try {
    const numsArray = [2, 7, 11, 15]
    const targetSum = 9
    console.log(getIndicesOfTwonumbers(numsArray, targetSum))
} catch (error) {
    console.error(error.message)
}