var fpBtn=document.querySelector(".pbtn1");
var count=0;
fpBtn.addEventListener('click',()=>{
        let n=document.querySelector(".answer");
        count++;
        if(count%2==0)
        {
            n.style.display="none";
            n.style.transition="7s";
            fpBtn.className="las la-plus pbtn1"
        }
        else
        {
            n.style.display="block";
            n.style.transition="7s";
            fpBtn.className="las la-times pbtn1"
        }
    });
var fpBtn2=document.querySelector(".pbtn2");
var count=0;
fpBtn2.addEventListener('click',()=>{
    let n=document.querySelector(".answer2");
    count++;
    if(count%2==0)
    {
        n.style.display="none";
        fpBtn2.className="las la-plus pbtn2"
    }
    else
    {
        n.style.display="block";
        fpBtn2.className="las la-times pbtn2"
    }
});
fpBtn3=document.querySelector(".pbtn3")
fpBtn3.addEventListener('click',()=>{
    let n=document.querySelector(".answer3");
    count++;
    if(count%2==0)
    {
        n.style.display="none";
        fpBtn3.className="las la-plus pbtn3"
    }
    else
    {
        n.style.display="block";
        fpBtn3.className="las la-times pbtn3"
    }
});
