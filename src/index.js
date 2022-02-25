const arr = [1,2,3,4,5,6,7]
const arr1 = [1]

const binarySearchRecursive = (arr, start, arrLength, x) => {

    if (arrLength >= 1) {
        let mid = start + Math.floor((arrLength - start) / 2)

        // console.log(start, arrLength)
        console.log(mid)

        // If the element is present at the middle itself        
        if (arr[mid] == x) {
            return mid;
        }
        
        // If element is smaller than mid, then it can only be present in left subarray        
        if (arr[mid] > x) {
            return binarySearchRecursive(arr, start, mid-1, x)
        }

        // Else the element can only be present in right subarray
        return binarySearchRecursive(arr, mid + 1, arrLength, x);
    }

    // We reach here when element is not present in array
    return -1;
}

const searchIdx = binarySearchRecursive(arr, 1, 7, 1)

