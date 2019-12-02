/*
2. Сделайте функцию, каждый вызов который будет генерировать одно случайное число 
от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все 
числа из этого промежутка. Решите задачу через замыкания - в замыкании должен 
хранится массив чисел, которые уже были сгенерированы функцией.

*/


function makeCounter() {
    let count_rand = [];
    return function() {
        let check=true;
        let rand
        while (check){
            let c=0
            //let rand = 0 - 0.5 + Math.random() * (100 - 0 + 1); 

            let rand =Math.floor(Math.random() * 100) + 1
            
            let len=count_rand.length
            for (let i=0; i<len; i++ ){
                if (count_rand[i] == rand) c=c+1
            
            }
            if (c==0){
                count_rand.push(rand)
                return rand;
                
            }
            else continue
        }
      return rand;
    }
  }
  
  let counter1 = makeCounter();
  //let counter2 = makeCounter();
  
  for (let y=1; y<=100;y++){ 
    console.log("rand " + y +":" + counter1() )
  }



