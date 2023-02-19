let menubars=document.querySelector("#menu-bars");
let mynavbar=document.querySelector(".navbar");


// for login
let userlogin = document.querySelector("#menu-user");
let loginform = document.querySelector(".user-login");

menubars.onclick= () =>{
    menubars.classList.toggle('fa-times')
    mynavbar.classList.toggle('active')

}

userlogin.onclick = () =>{
    loginform.classList.toggle('active')
}
