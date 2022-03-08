function insertionSort(array) {
    let temp
    for (let i = 1; i < array.length; i++) {
        temp = array[i];
        for(var j = i - 1; array[j] > temp; j--) { // use var because we are going to use it outside of forloop
            array[j+1] = array[j]
        }
        array[j+1] = temp
    }
}