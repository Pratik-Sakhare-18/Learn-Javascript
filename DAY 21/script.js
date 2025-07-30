// Date module in js

// let date = new Date();

// console.log(date);

// console.log(date.getFullYear());

// console.log(date.getMonth());

// console.log(date.getDate());

// console.log(date.getDay());

// console.log(date.getHours());

// console.log(date.getMinutes());

// console.log(date.getSeconds());

// console.log(date.getMilliseconds());

// console.log(date.getTime());



// 

let date = new Date()

let crdate = '${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}'

console.log(crdate);









// let timeContainer = document.getElementById("time-container");
// let dateContainer = document.getElementById("date-container");

// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// let genarateTime = () =>{

//     let date = new Date();
//     let  hour = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();
//     let milisec = date.getMilliseconds();

//     timeContainer.innerHTML = '${hour}::${min}::${sec} <span id="mili-sec">${milisec}</span>'
//     dateContainer.innerHTML = '${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}'
// }

// setInterval(()=>{
//     genarateTime()
// },1000)

