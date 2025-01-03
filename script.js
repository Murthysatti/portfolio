let home = document.getElementById("home");
let education = document.getElementById("education");
let contact = document.getElementById("contact");
let homepage = document.getElementById("homepage");
let educationpage = document.getElementById("educationpage");
let contactpage = document.getElementById("contactpage");

//nav bar events

home.addEventListener("click",(e)=>{
    e.preventDefault();
    homepage.scrollIntoView({behavior :"smooth"})
});
education.addEventListener("click",(e)=>{
    e.preventDefault();
    educationpage.scrollIntoView({behavior :"smooth"})
});
contact.addEventListener("click",(e)=>{
    e.preventDefault();
    contactpage.scrollIntoView({behavior :"smooth"})
});

//refresh 
window.onload=function(){
    document.getElementById("homepage").scrollIntoView({behavior:"smooth"});
}
//media query
let navlist = document.getElementById("navlist");
let sidebar= document.getElementById("sidebar");

sidebar.addEventListener("click",()=>{
    if (navlist.style.display==="none"){
        navlist.style.display="block";
    }
    else{
        navlist.style.display="none"
    }
})