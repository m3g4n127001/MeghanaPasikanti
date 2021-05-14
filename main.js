
let speed=150;
let i=0;
let text="I am a computer science undergrad at NITW making this website . ";


function typeWriter() 
{
    if(i<text.length)
    {
        document.getElementById('intro_text').innerHTML+=text.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}

let expanded = false;
function myFunction(num)
{
    // console.log(num);
    let ele = document.getElementsByClassName("swiper-slide-active");
    let elep=document.getElementsByClassName("swiper-slide-prev");
    if(expanded)
    {
        // console.log(ele[0].classList);
        // console.log(elep[0].classList);
        expanded = false;
        // console.log('if')
        elep[0].classList.remove('outani')
        elep[0].classList.add('inani')
        ele[0].classList.remove('outani')
        ele[0].classList.remove('upani')
        ele[0].classList.add('downani')
        let r = document.querySelector(':root');
        // r.style.setProperty('--scroll', 'hidden')
        r.style.setProperty('--height', '40vh')
    }
    else {
        // document.getElementsByClassName('swiper-wrapper')[0].classList.add('disabled')
        // console.log(ele[0].classList);
        // console.log(elep[0].classList);
        expanded = true;
        // console.log('else')
        elep[0].classList.remove('inani')
        ele[0].classList.remove('inani')
        elep[0].classList.add('outani')
        ele[0].classList.remove('downani')
        ele[0].classList.add("upani");
        swiper.params.grabCursor=false;
        swiper.unsetGrabCursor();
        let r = document.querySelector(':root');
        // r.style.setProperty('--scroll', 'scroll')
        r.style.setProperty('--height','100vh')
    }

}

let galleryExpanded = false;
function showGrid () 
{
    let grid = document.getElementById('gallery');
    if(!galleryExpanded)
    {
        galleryExpanded = true;
        // console.log('shown')
        grid.classList.remove('hidegrid')
        grid.classList.add('showgrid');
        let r = document.querySelector(':root')
        r.style.setProperty('--top','-'+ grid.offsetTop + 'px')
        r.style.setProperty('--scroll', 'scroll')

    }
    else 
    {
        galleryExpanded = false;
        // console.log('hided');
        grid.classList.remove('showgrid')
        grid.classList.add('hidegrid')
        let r = document.querySelector(':root')
        r.style.setProperty('--scroll', 'hidden')
    }
}