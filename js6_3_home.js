"use strict";

function Fellow(name, age){
    this.name=name
    this.age=age
    this.show=function(){
        document.write("<u>Имя</u>:"+this.name+"<br>")
        document.write("<u>Возраст</u>:"+this.age+"<br>")
    }
}

var objA= new Fellow("Иван Петров",38)
var objB = new Fellow("Петров Иванов",40)

objA.show()
objB.show()