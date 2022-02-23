// when array is sorted lower to bigger
export function binarySearchRecursive(arr, x) {
    let start = 0
    let end = arr.length -1
    let mid

    //untill end become 1
    while (end >= 1) {    
        mid = start + Math.floor((end - start) / 2)

        // if x is present in mid itself
        if (arr[mid] == x) {
            return mid
        } 

        // If element is smaller than mid, then it can only be present in left subarray
        if (arr[mid] > x) {
            end = mid - start
        } 
        else start = mid + 1
        
    }
    // element not present in array
    return -1
}
