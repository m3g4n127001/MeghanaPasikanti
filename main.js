
let speed=150;
let i=0;
let text="I am a computer science undergrad at NIT Warangal and blah blah blah."; 


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
    let ele = document.getElementsByClassName("swiper-slide-active");
    let elep=document.getElementsByClassName("swiper-slide-prev");
    if(expanded)
    {
        expanded = false;
        r.style.setProperty('--height', '40vh')
        elep[0].classList.remove('outani')
        ele[0].classList.remove('outani')
        ele[0].classList.remove('upani')
        ele[0].classList.add('downani')
        elep[0].classList.add('inani')
        document.getElementsByClassName('arttag')[0].classList.remove('arttagani');
        swiper.params.grabCursor=true;
        swiper.setGrabCursor();
        if(num==2)
        {
            let s= document.getElementsByClassName("circle");
            let c=document.getElementsByClassName('counter');
            for(let i=0;i<s.length;i++)
            {
                s[i].classList.remove('circleani');
                c[i].innerText=0;
            }
        }
    }
    else {
        expanded = true;
        
        r.style.setProperty('--height','100vh')
        elep[0].classList.remove('inani')
        ele[0].classList.remove('inani')
        ele[0].classList.remove('downani')
        ele[0].classList.add("upani");
        elep[0].classList.add('outani')
        
        setTimeout(() => {
            document.getElementsByClassName('arttag')[0].classList.add('arttagani')
            // if(document.getElementsByClassName('aboutWrapper')[0].clientHeight )

        }, 1000);
        swiper.params.grabCursor=false;
        swiper.unsetGrabCursor();
        if(num==2)
        {
            let s= document.getElementsByClassName("circle");
            let c=document.getElementsByClassName('counter');
            for(let i=0;i<s.length;i++)
            {
                s[i].classList.add('circleani');
                c[i].innerText=0;
            }
            flexFont();
            setTimeout(() => {
                docounting();
                
            }, 2000);
        }
    }
    
}

let galleryExpanded = false;
function showGrid () 
{
    let grid = document.getElementById('gallery');
    if(!galleryExpanded)
    {
        galleryExpanded = true;
        grid.classList.remove('hidegrid')
        r.style.setProperty('--top','-'+ grid.offsetTop + 'px')
        r.style.setProperty('--scroll', 'scroll')
        grid.classList.add('showgrid');

    }
    else 
    {
        galleryExpanded = false;
        grid.classList.remove('showgrid')
        grid.classList.add('hidegrid')
        r.style.setProperty('--scroll', 'hidden')
    }
}

// skills js

flexFont = function () {
    var divs = document.getElementsByClassName('skill-name');
    console.log(divs.length);
    for(var i = 0; i < divs.length; i++) {
        var len=divs[i].innerText.length;
        if(len<=2)
            len++;
        else if(len==5)
            len--;
        else if(len>=6&&len<=7)
            len-=3;
        else if(len>7)
            len-=5;
        console.log("length is "+len);
        var fs=100/len;
        divs[i].style.fontSize = fs+'px';
    }
};



function docounting() 
{
    const counters=document.querySelectorAll('.counter');
    const speed=400;
    counters.forEach(counter => {
        const updateCount = () => {
            const target=+counter.getAttribute('data-target');
            const count= +counter.innerText;
            
            if(count<target)
            {
                counter.innerText++;
                setTimeout(updateCount,15);
            }
            else
            {
                counter.innerText=target;
            }
        };
        updateCount();
    });
}
