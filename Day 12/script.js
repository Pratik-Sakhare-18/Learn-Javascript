// Objects in javascript 

// Object is collection of key value pair enclosed in {} brakets


let userName = {
    name: "pratik",
    surname: "sakhare",
    age: "19",


}

console.log(userName);
console.log(userName.name);
console.log(userName.surname);
console.log(userName.age);

let instaUser = {
    name: "pratik",
    surname: "sakhare",
    following: [{
        name: "pratik",
        surname: "sakhare",
        age: "19",
    },
    {
        name: "pratik",
        surname: "sakhare",
        age: "19",
    },
    {
        name: "pratik",
        surname: "sakhare",
        age: "19",
    }],

    follwers: [{
        name: "pratik",
        surname: "sakhare",
        age: "19",
    },
    {
        name: "pratik",
        surname: "sakhare",
        age: "19",

    },
    {
        name: "pratik",
        surname: "sakhare",
        age: "19",
    }]


}


console.log(instaUser);
console.log(instaUser.name);
console.log(instaUser.surname);
console.log(instaUser.following);
console.log(instaUser.follwers);

for(let i = 0 ; i< instaUser.following.length ; i++)
{
    console.log(instaUser.following[i].name);
    console.log(instaUser.following[i].surname);
    console.log(instaUser.following[i].age);

}
