

// Document in javascript

console.log(document)

let title = document.title   // document.title show title of file html

console.log(title)

let titles = document.title = " we learn javascript"    // we can change file title 

console.log(titles)

let name = document.writeln('hello world') // document.write is used to write anything on output in html file


document.writeln("<h1>" + "hello world" + "</h1>") // document.write is used to write anything on output in html file


let names = 'ajinath'

document.writeln(names + ' welcome')


for(let i = 1 ; i<=10 ; i++)
{
    let number = 2;
     number = number * i;
    document.writeln(number + "<br>")
}