const navSlide = () =>
{
const burger =document.querySelector('.burger');
const nav=document.querySelector('.mob-active');
const had = document.querySelector('.header');
var check = document.querySelectorAll('.link');

/*

const header = document.querySelector("header");
const sectionone = document.querySelector('.section-1');
const navlinks = document.querySelector('.nav_links');
const sectiononeoptions={
    rootMargin:"10px 0px 0px 0px"
}



const sectiononebserver = new IntersectionObserver(function(entries,sectiononebserver){
    entries.forEach(entry => {
        if (!entry.isIntersecting)
        {
            header.classList.add("nav-scrolled");
           
        }
        else 
        {
            header.classList.remove("nav-scrolled");
            navlinks.classList.add("nav_links-scrolled");
        }
    })
}, sectiononeoptions);

sectiononebserver.observe(sectionone,navlinks);
*/
burger.addEventListener('click',() =>
{
  nav.classList.toggle('mob-notactive'); 
});

check.forEach(item=> {
    item.addEventListener('click',() =>
    {
        nav.classList.toggle('mob-notactive');
    })
}); 
}


