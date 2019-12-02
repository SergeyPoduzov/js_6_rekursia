"use strict";

function Fellow(name, age, interest, education ){
    this.name=name
    this.age=age
    this.interest=interest
    this.education=education
    this.show=function(){
        let msg= "<u>Имя</u>: "+this.name+ ". "
        msg+= "<u>Возраст</u>: "+this.age+ "лет. "
        msg+=" <u>Интересы</u>: "
        let interest_len=this.interest.length
        for(let i=0; i<interest_len; i++){
            msg+= this.interest[i]+", "
            if (i=2) msg+= this.interest[i]+". "
        }
        msg+="<u>Ичится в</u> : "+this.education+ ". "

        document.write(msg)
        
    }
}


var objA= new Fellow("Иван Петров", 38, ["Программирвание","Музыка", "Анимэ"], "ИТМО");


objA.show()