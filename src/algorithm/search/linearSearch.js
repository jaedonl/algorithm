export function linearSearch(arr, searchNum) {
    let left = 0
    let length = arr.length
    let right = length -1
    let position = -1

    // Run loop from 0 to right
    for (left=0; left<=right;) {

        
        if (arr[left] == searchNum) {
            position = left;
            break;
        }
        if (arr[right] == searchNum) {
            position = right
            break;
        }
        left++
        right--
    }

    //if not found
    if (position == -1) {
        return console.log('number not found')
    }
}


