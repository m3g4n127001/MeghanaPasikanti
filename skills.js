flexFont = function () {
    var divs = document.getElementsByClassName('skill-text');
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
            len-=4;
        console.log("length is "+len);
        var fs=100/len;
        divs[i].style.fontSize = fs+'px';
    }
};

window.onload = function(event) {
    flexFont();
};
window.onresize = function(event) {
    flexFont();
};
const counters=document.querySelectorAll('.counter');
const speed=200;

setTimeout(() => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target=+counter.getAttribute('data-target');
            const count= +counter.innerText;
            
            if(count<target)
            {
                counter.innerText++;
                setTimeout(updateCount,45);
            }
            else
            {
                counter.innerText=target;
            }
        };
        updateCount();
    });
}, 2000);