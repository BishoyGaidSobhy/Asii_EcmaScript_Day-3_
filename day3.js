

/////1//////////////
// var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// ////a//////
// function check(arr) {
//     for(var i=0; i<arr.length; i++){
//       if(typeof arr[i] != "string") {
//          return false;
//        }
//     }
   
//     return true;
//    }
//    console.log(check(fruits));


// ///b///
//     let item=fruits.find(function(item,index)
//    {
//        return item=="a"
//    })


// //////c/////
// let Filter= fruits.filter(function(item,index)
// {
    
//         return item.startsWith("b")||item.startsWith("s")
    
// })
// console.log(Filter);


//d/////

// let Filter2= fruits.map(function ww(index,item)
// {
    
//     for(let i=0;i<index.length;i++){
//         return `ilove ${index}`;
// }
    
// })
// console.log(Filter2);


// /e///

// fruits.forEach(function ww (index,item)
// {
//     return index;
// })





///2

// ////a///
// function OO7(){
//     let input = document.getElementById("OO8").value;
//     const fetchPromise = fetch('https://jsonplaceholder.typicode.com/posts?userId=userId');


// fetchPromise
//   .then( response => {
//     return response.json();
//   })
//   .then( json => {
//     document.writeln(json[input].name);
//   });
// }



// ////b///
// const fetchPromise = fetch('https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products');

// fetchPromise
//   .then( response => {
//     return response.json();
//   })
//   .then( json => {
//       for(let i=0;i<json.length;i++){
//     document.writeln(json[i].image);
//     document.writeln(json[i].name);
//     document.writeln(json[i].price);
// }
//   });



