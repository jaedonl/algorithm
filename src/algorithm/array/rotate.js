const rotate = (str, shift) => {
    let result = ""
    let charcode = 0;

    str = str.toUpperCase()

    for (let i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + shift    
        result += String.fromCharCode(charcode)
    }
    return result
}