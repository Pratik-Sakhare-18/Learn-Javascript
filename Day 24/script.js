// API : is use to connectthe client or server weare use the api  to connect the frontebd and backend 

async function loaddata() {
    let responce = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await responce.json();
    console.log(data);
}


loaddata();

async function loaddata1() {
    try {
        
        let responce = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await responce.json();
        console.log(data);

    } catch (error) {
        console.log(error);

    }

}