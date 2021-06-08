function fun()
{
    let email=document.querySelector(".email").value;
    let re=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let result=re.test(email);
    let mobile=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let result2=mobile.test(email);
    if(result||result2)
    {
        var btn = document.getElementById("submit");
        btn.disabled=false;
        console.log("email valid");
    }
    else
    {
        let n=document.querySelector(".email-check");
        n.style.display="block";
    }
}
function fun2()
{
    let email=document.querySelector("#email2").value;
    let re=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let result=re.test(email);
    let mobile=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let result2=mobile.test(email);
    if(result||result2)
    {
        var btn = document.getElementById("btn");
        btn.disabled=false;
        console.log("email valid");
    }
    else
    {
        let n=document.querySelector(".email-check");
        n.style.display="block";
    }
}
var obj=[
    {
        username:'nejarulislam45@gmail.com',
        password:'123456'
    },
    {
        username:'nejarulislam45@outlook.com',
        password:'726488'
    }
];
function btn(){
    var userValue=document.querySelector(".email").value;
    var userPassword=document.querySelector(".password").value;

var count=0;
for(var i=0;i<obj.length;i++)
{
   
    if(userValue==obj[i].username&&userPassword==obj[i].password)
    {

        count++
    }
}
if(count>0)
{
   alert("Credential valid this is our fake website");
   document.querySelector(".email").value="";
   document.querySelector(".password").value="";
   location.href="//www.youtube.com";
}
else{
    alert("sign up first");
    document.querySelector(".email").value="";
    document.querySelector(".password").value="";
    swap();
}
}
function swap(){
    let sign=document.querySelector("#signin-box");
    let sign2=document.querySelector("#signup-box");
  

        sign.style.display="none";
        sign2.style.display="block";
}
function swapin(){
    let sign=document.querySelector("#signin-box");
    let sign2=document.querySelector("#signup-box");
    sign.style.display="block";
     sign2.style.display="none";
}
function store()
{
    var signUpvalue =document.querySelector("#email2").value;
    var signUppassword =document.querySelector("#password2").value;
    if(signUpvalue=="")
    {
        document.querySelector("#email2").value="";
        alert("email or mobile number empty");
    }
    if(signUppassword=="")
    {
        document.querySelector("#password2").value="";
        alert("password empty");
    }

    var myobj={
        username:`${signUpvalue}`,
        password:`${signUppassword}`
    }
    let c=0
    for(let i in obj)
    {
        if(signUpvalue==obj[i].username)
        {
            alert("you are already exist");
            c=1;
        }
    }
    if(c==0&&signUpvalue!=""&&signUppassword!="")
    {

        obj.push(myobj);
        alert("register suceesful");
    }
    else{
        swapin();
    }
}