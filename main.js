
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

function myFunction(num)
{
  let precls = "";
  let currcls = "";
  let nextcls = "";
  if (num == 1) {
    precls = "zero";
    currcls = "one";
    nextcls = "two";
  }
  else if(num == 2) {
    precls = "one";
    currcls = "two";
    nextcls = "three";
  }
  else if(num == 3) {
    precls = "two";
    currcls = "three";
    nextcls = "four";
  }
  else if(num == 4){
    precls = "three";
    currcls = "four";
    nextcls = "five";
  }
  else {
    precls = "four";
    currcls  = "five";
    nextcls = "six";
  }
  console.log(precls + currcls + nextcls);
  let x = document.getElementsByClassName(currcls);
  //expanding the slide
  if (x[0].classList.contains('addClass'))
  {
    // document.getElementById('up' + currcls).style.transform = "scaleY(1)"
    //inverting the arrow button
    if (document.getElementById('up' + currcls).classList.contains('downAni'))
    {
      console.log("contains downAni ->" + currcls )
      document.getElementById('up' + currcls).classList.remove('downAni')
    }
    document.getElementById('up' + currcls).classList.add('upAni')
    x[0].classList.add('removeClass');
    console.log("removed class")

    let wrapper = document.getElementsByClassName('swiper-wrapper')[0];
    for(let i=0;i<5;i++)
    {
      let others = wrapper.children[i].classList[1];
      if(others != currcls)
      {
        if(document.getElementById(others).style.display != "none")
        {
          console.log("not none")
          document.getElementById(others).style.display = "none";
        }
        else 
        {
          console.log("none")
          document.getElementById(others).style.display = "inline-block";
         }
      }
    }
    x[0].classList.remove('addClass');
  }
  else {
    // document.getElementById('up').style.transform = "scaleY(-1)"
    //inverting the arrow button
    if (document.getElementById('up' + currcls).classList.contains('upAni'))
    {
      console.log("contains upAni ->" + currcls )
      document.getElementById('up' + currcls).classList.remove('upAni')
    }
    document.getElementById('up' + currcls).classList.add('downAni')
    x[0].classList.add('addClass');
    console.log("added class")
    x[0].classList.remove('removeClass')
    let wrapper = document.getElementsByClassName('swiper-wrapper')[0];
    setTimeout(() => {
      for(let i=0;i<5;i++)
      {
        let others = wrapper.children[i].classList[1];
        if(others != currcls)
        {
          if(document.getElementById(others).style.display != "none")
          {
            console.log("not none")
            document.getElementById(others).style.display = "none";
          }
          else 
          {
            console.log("none")
            document.getElementById(others).style.display = "inline-block";
          }
        }
      }
    }, 1000);  
  }
  
}

//left and right arrow functioning
function move (num)
{
  console.log(window.innerWidth + "-> inneer width")
  let slide = document.getElementsByClassName('swiper-wrapper')[0];
  slide.scrollBy(num,0)
  // console.log(slide.parentElement.className)
  console.log(slide.scrollWidth + "-> tot width")
  console.log(slide.scrollLeft + "-> left")
  
}



function myfn() 
{
  console.log("khushi")
}
function nav(num)
{
  let y = document.getElementsByClassName('swiper-wrapper')[0];
  let tot = y.scrollWidth
  y.scrollLeft = tot * (num - 1) /5;
  if(num == 5)
    y.scrollLeft = tot
}
