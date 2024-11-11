function sum(val1, val2) {
    return val1 + val2   
}

function orderNumber(v){
    return v + 1;
}

function sumList(list, key){
    let v = 0;
    list.forEach(e => {
        if (e != null) {
            v += e[key]
        }
    })
    return v || "";
}

function isNumber(value) {
    return typeof value === 'number';
}

Handlebars.registerHelper('add', function(a, b) {
    return parseInt(a) + parseInt(b);
});