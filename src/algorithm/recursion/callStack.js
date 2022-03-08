function three() {
    console.log('three')
}

function two() {
    three()
    console.log('two')
}

function one() {
    two()
    console.log('one')
}