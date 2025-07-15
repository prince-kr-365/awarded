console.log("hhihdkuah");
console.warn("hhihdkuah");
console.error("hhihdkuah");
// alert("jjg")
prompt("bolo chakka")

function abcd(val){      //her val is parameter
    console.log(12 + val);
}
abcd(12); //here 12 is argument


//js is of two types es5 aand es6
//es5--> Function statement , function expression ,anonymus function 
//es6--.Fat arrow function ... and it hv 3 types a) basic fat arrow b) fat arrow with one parameter c) fat arrow with impicit return

//es5
function abcd(){
    //function statement
}
var abcd = function(){
    //function expression
}
function(){
    //anonymus function
}


//es6
//Fat arrow function or you can say type a) i.e basic fat arrow
var a = ()=>{
    //fat() , arrow=> , Function{}
}

var g = (ab) => {
    // b) fat arrow with one parameter
}
g(12)  //so 12 goes to one parameter ab i.e ab = 12

var pqrs = () => "prince"
var ans = pqrs();   //c) fat arrow with implicit return  i.e ans will be prince means pqrs will return prince


//return meaning in func
function op(){
    return 12;
}
 console.log(op());   // it will return or print whatever written after return i.e 12

 //a) undefined --> is a  value undefined tab aata hai jab variable ko koi value assign nahi hua ho and you are asking that variable value then it throw undefined ,ye ek garbage value ki tarah treat hoti  hai or you can say default value let say var a;  and you ask to print a then undefined bec variable ki value assign nahi hui
 //b) not defined --> is an error not defined tab aata hai jab tum print karwate ho koi particular variable value  without its declaration also bec in above we declare a  variable but value assign nahi kiye and isme toh variable hi nahi banaya and direct uss variable ki value print karwa rahe toh not defined or erroe
 //c) null--> is a value null is received when something is not found

 var users = [12,[], "3", function(){}, "idoai", "dy8idi","dyduidu"]
 console.log(users[2]); //it will print "dy8idi" and if said to pirnt users[9] then it will throw undefined bec. variable made but value not assigned for 9

 //how to loop an array and print array
 var arr = [23,5,22,76,34,76];
 arr.forEach(function(chacha){
    console.log(chacha + 1);    //it will traverse in arr one by one and as we have said to print each element so each ele will be printed 
 })


 //making objects ..object is details of a particular arr
 var obj = {
    naam: "bipin",
    umar: 39,
    email: "bipin123@gmail.com",
    contact: 123456789,
    isWorking: true

 }
 
 //synchronus code mein code hamesha line by line chalta hai in main stack
 //asynchronus code line by line nahi chalta , async code ek saath shuru kar diya jaata hai aur jo pehle complete hojaye uska pehle answer de diyya jata hai time refrence 



 //this keyword in detail,used in many places ,we will study one by one

 //a) in global- window is output
 console.log(this);   //output will be window 

 //b) in function - window is out
 function lkjh(){
    console.log(this);
 }
 lkjh();      //same output as above

 //c) in method - object is out
 var obj1 = {
    name: function(){  //upto here it is method  bec method is functi inside object
        console.log(this);
    },
    age:45,
    email: "yuk",
 }
 obj1.name();  //it will print obj1 all elements and it is method(imp name) bec method is functi inside object

 //d) func inside method(es5) - window
 var obj2 = {
    sayName: function(){ //upto here it is method as above
        console.log(this);  // , here if we use this.age we can get age as 25 bec through this we acn acess obj2 elemnts by using this.anything
        function childfnc(){  //and it function inside method  but here function is es5 wala i.e function wala function
            console.log(this);   //, but not from here we can acess obj2 elements be cit print window
        }
        childfnc();
    },
    age:25,
 }
 obj2.sayName();  //it will print window bec function inside method


 //e)  func inside method(es6) - object
var obj3 = {
    sayName: function(){  //upto here it is method as above
        const child = ()=>{  //and it function inside method but here function is es6 wala i.e fat arrow func
            console.log(this);  // from here we can acess obj3 elements bec we use es6 wala func and it will print obj3 elements
        }
        child();
    }
}
obj3.sayName();


//f) constuctor fnc mein this ki value - new blank object hota hai
function add(){
    console.log(this);
}
const ans = new add();  //it will print blank add  bec new added 

//g) event listner mein this ki value - that elemnt jispar event list. laga ho
document.querySelector("button")
.addEventListener("click", function(){
    console.log(this);
})


//call, apply, bind --> ye teen tareeka hai func ko call karne ke kisi object ko this maan kar

//a) call
const obj = {
    name: "prime"
}
function ggg(){
    console.log(this);
}
ggg.call(obj)   //if we pass obj in call then it will call obj and print obj elements and if we pass nothing then it will print window as we hv studied above

//b)apply
const obj = {
    name: "prime"
}
function ggg(a,b,c){
    console.log(this,a,b,c);
}
ggg.apply(obj,[1,2,3]) // if we pass obj in call with parameter then it is apply and it will print obj elements with 1,2,3

//c) bind
const obj = {
    name: "prime"
}
function ggg(){
    console.log(this);
}
const baadmeinchalanekeliyefunc =  ggg.bind(obj);
baadmeinchalanekeliyefunc();  // now it wiil print obj elementsand can be used further using const value

//prototypal inheritance
//aisa koi func jismein hum this ka use karte hai aur uss func ko call karte waqt humlog new ka use karte hai toh new ka matlab waha yani this ke jagah par blank object hojata hai and then we write this.name means ().name means blank-space.name and as we have it value as princess so nameis princess and continues and aisa finc jo this ko use akr raha ho and new ke through naye naye obj banakr deta ho aise func ko constructor func kahte hai and it is compulsory to use this if we use new while calling func 

function makeHuman(name,age){
    this.name = name;
    this.age = age;
}
makeHuman.prototype.chacha = 12;   //these are made so that both human1  and human2 can acess without taking double space for human1 and human2 i.e made sepeately
makeHuman.prototype.printMyNmae = function(){  // same as above
    console.log(this.name);           
}
let human1 = new makeHuman("princess",10);
let human2 = new makeHuman("prince",106);


//closures--> ek func jo return kare doosra func , aur return func use karta hai parent func ka variable

function pro(){  //ek func 
    var a = 12;
    return function(){  //jo return kare doosra func, aur return func use karta hai parent func ka variable
        console.log(a*a);
    }
}
var ans = pro();  //it return func 
ans();  //it retrun value which is  144


//event delegation--> jab aap event listner se kai sare different elements ke events ko handlekar sake.....event listner ko parent par lagao and unko id ,class ya fir tag ke basis par differntiate karke different task karo
var parent = document.querySelector("#parent");
parent.add("click", function(details){
    if(details.target.id === "play"){
        console.log("play song");
    }
    else if (details.target.id === "pause"){
        console.log("pause song");
    }
})


//higher order func-->aisa koi func joki ek fnc ko parameter mein accept karle and/or ek func ko return karde
function hhh(param){ // fnc ko parameter mein accept karle

}
hhh(function(){});


//error handling-->try catch
function divide(a,b){
    try {
        if(b === 0){
            throw Error("kar diya tune galat");
        }
        console.log(a/b);
    }
     catch(err) {
        console.error(err);
    }
}
divide(12/0);


//Custom events

const yourevent = new Event("gharJao");

document.querySelector("button")
.addEventListener("gharJao", function(){
    alert("jaa raha hu ghar");
})
document.querySelector("button").dispatchEvent(yourevent);