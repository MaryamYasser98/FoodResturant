
//navbar
let nav = document.querySelector('.navigation-wrap');
window.onscroll = function(){

    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll-on');
    }
    else{
        nav.classList.remove('scroll-on')
    }
    
} //end of on scroll



//To hidden Navbar when click on link
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse')

navbar.forEach(function(a){

    a.addEventListener('click' , function(){
        navCollapse.classList.remove('show')
    })
}) //end of foreach






// counter
document.addEventListener("DOMContentLoaded",()=>{

    function counter(id, start, end,duration){

        let obj = document.getElementById(id);
        let current = start;
        let range = end - start;
        let increment = end >start ? 1 : -1;
        let step = Math.abs(Math.floor(duration / range));

        let timer = setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if(current == end){clearInterval(timer)}
        }, step)//end of setInterval

    }//end of function counter

    counter("count1" , 0, 1287 , 3000)
    counter("count2" , 100, 5786 , 2500)
    counter("count3" , 0, 1440 , 3000)
    counter("count4" , 0, 7110 , 3000)
})//end of DOMContentLoaded