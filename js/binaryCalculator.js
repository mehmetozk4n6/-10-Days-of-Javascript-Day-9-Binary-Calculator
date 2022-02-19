let element = document.getElementById("res")

function addZero(){
    element.innerHTML += "0"
}
function addOne(){
    element.innerHTML += "1"
}
function clearRes(){
    element.innerHTML = ""
}
function equal(){
    let operator = element.innerHTML.match(/[+\-*/]/)[0]
    let values = element.innerHTML.split(operator)
    let value1 = parseInt(values[0].match(/\d+/),2)
    let value2 = parseInt(values[1].match(/\d+/),2)
    if(operator === "+"){
        element.innerHTML = (value1+value2).toString(2)
    }else if(operator === "-"){
        element.innerHTML = (value1-value2).toString(2)
    }else if(operator === "*"){
        element.innerHTML = (value1*value2).toString(2)
    }else if(operator === "/"){
        element.innerHTML = parseInt(value1/value2).toString(2)
    }

}
function sum(){
    element.innerHTML += "+"
}
function sub(){
    element.innerHTML += "-"
}
function multi(){
    element.innerHTML += "*"
}
function div(){
    element.innerHTML += "/"
}