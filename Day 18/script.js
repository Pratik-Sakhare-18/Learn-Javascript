
// Event listner
// 1 . click
// 2 . dblclick

let btn = document.getElementById("btn");

let isdarktheme = true;
let theme;
btn.addEventListener("click", () => {

    if (isdarktheme) {
       document.body.style.backgroundColor = "white";
       isdarktheme = false;
     
    }
    else {
        document.body.style.backgroundColor = "black";
        isdarktheme = true;
   
    }

})




