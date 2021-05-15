
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

let r = document.querySelector(':root');
let expanded = false;
function myFunction(num)
{
    // console.log(num);
    let ele = document.getElementsByClassName("swiper-slide-active");
    let elep=document.getElementsByClassName("swiper-slide-prev");
    if(expanded)
    {
        expanded = false;
        // console.log('if')
        // r.style.setProperty('--scroll', 'hidden')
        r.style.setProperty('--height', '40vh')
        elep[0].classList.remove('outani')
        ele[0].classList.remove('outani')
        ele[0].classList.remove('upani')
        ele[0].classList.add('downani')
        elep[0].classList.add('inani')
        // document.getElementsByClassName('arttag')[0].classList.remove('arttagani')

    }
    else {
        expanded = true;
        // console.log('else')
        
        // r.style.setProperty('--scroll', 'scroll')
        r.style.setProperty('--height','100vh')
        elep[0].classList.remove('inani')
        ele[0].classList.remove('inani')
        ele[0].classList.remove('downani')
        ele[0].classList.add("upani");
        elep[0].classList.add('outani')
        setTimeout(() => {
            document.getElementsByClassName('arttag')[0].classList.add('arttagani')
            // console.log(document.getElementsByClassName('arttag')[0].classList)
            // console.log('added')
        }, 1000);
        swiper.params.grabCursor=false;
        swiper.unsetGrabCursor();
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
        r.style.setProperty('--top','-'+ grid.offsetTop + 'px')
        r.style.setProperty('--scroll', 'scroll')
        grid.classList.add('showgrid');

    }
    else 
    {
        galleryExpanded = false;
        // console.log('hided');
        grid.classList.remove('showgrid')
        grid.classList.add('hidegrid')
        r.style.setProperty('--scroll', 'hidden')
    }
}