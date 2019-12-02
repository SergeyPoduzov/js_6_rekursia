/*5. Отсортировать массив по полю 'price' используя метод sort и передаваемую ей функцию, 
определяющую порядок сортировки. Массив для тестирования: 
let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];

*/

let arr = [ { 'price' : 10, 'count' : 2 }, 
    { 'price' : 5, 'count' : 5}, 
    { 'price' : 8, 'count' : 5 }, 
    { 'price' : 12, 'count' : 4 }, 
    { 'price' : 8, 'count' : 4},
];

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }
  
  arr.sort(byField('price'));
  arr.forEach(item => console.log("price: " + item["price"] + "," + "count: "  + item["count"  ])); // 
  
  /*
  arr.sort(byField('count'));
  arr.forEach(item => console.log(item["price"])); // 

  */
