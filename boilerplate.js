// Transform a date in param into a standard string
function date_to_string(date) {
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth()+1)).slice(-2);    
    return `${date.getFullYear()}-${month}-${day} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
