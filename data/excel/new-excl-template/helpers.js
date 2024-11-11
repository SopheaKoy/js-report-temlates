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