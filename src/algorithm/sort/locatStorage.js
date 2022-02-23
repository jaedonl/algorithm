export function localStorage(action, name, value) {
    if(action === 'set') {
        window.localStorage.setItem(name, value)      
        console.log(name, value);      
        return (name, value)
    }        
    else if (action === 'get') {
        var items = window.localStorage.getItem(name)
        if (items === null || items === 'undefined' || items.length === 0) {
            console.log('key does not exist.');
            return false
        } else {            
            console.log(items);   
            return items
        }            
    }
    else if (action === 'remove') {
        window.localStorage.removeItem(name)
        console.log('item removed');
        return 'item removed'
    }
}


