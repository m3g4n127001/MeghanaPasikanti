
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
    console.log(num);
    let ele = document.getElementsByClassName("swiper-slide-active");
    let elep=document.getElementsByClassName("swiper-slide-prev");
    if(expanded)
    {
        console.log(ele[0].classList);
        console.log(elep[0].classList);
        expanded = false;
        console.log('if')
        elep[0].classList.remove('outani')
        elep[0].classList.add('inani')
        ele[0].classList.remove('outani')
        ele[0].classList.remove('upani')
        ele[0].classList.add('downani')
        
    }
    else {
        console.log(ele[0].classList);
        console.log(elep[0].classList);
        expanded = true;
        console.log('else')
        elep[0].classList.remove('inani')
        ele[0].classList.remove('inani')
        elep[0].classList.add('outani')
        ele[0].classList.remove('downani')
        ele[0].classList.add("upani");
        console.log(swiper.params)
        swiper.params.grabCursor=false;
        swiper.unsetGrabCursor();
        
    }

}

