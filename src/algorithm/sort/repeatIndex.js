export function repeatIndex(event, arr, idx, setIdx) {

    if (event.currentTarget.getAttribute('name') === 'prev') {
        if (idx === 1) setIdx(arr.length-1)    
        else setIdx(idx -1)  
        console.log(idx)

    } else if (event.currentTarget.getAttribute('name') === 'next') {
        if (idx === arr.length-1) setIdx(0)   
        else setIdx(idx +1) 
        console.log(idx)
    }
    
    return idx
}
