//DOM--> aisa js ka koi bhi code jo webpage mein kuchh bhi change karega wo ja ka dom ka code kehlYEGGA
//DOM Manipulation-->html mein body mein kuchh bhi change karna ya manipulate karna 


//usse(selection)   ye kardo(change)   ye hone par(event)

//1)--> Acessing Elmemts: document.querySelector()
//selection

var idppp = document.querySelector('#ppp'); // id selection
var classqqq =  document.querySelector('.qqq');  //class selection
var tag =  document.querySelector("h3"); // tag(button is also tag) selection
//agar humare pass bahut sare h3 hoga and jab hum select karte hai through query selctor then first wala sirf selsct hota hai and if you want tio select all h3 write document.querySelectorAll("h3")


//2.)-->Modifying Elements: innerHTML, textContent.......kisi ko bhi modify ya change karne se pehle usse select karna hota hai
// var btn =  document.querySelector("button");
// btn.textContent = "Starting in 3 Seconds";

var h4 =  document.querySelector("h4");
h4.textContent += "-->bhaag yagha se tmkc";  //add this text in h4

var h5 =  document.querySelector("h5");
h5.innerHTML = '<i>bhaagasdfghjk</i>';  // ineer html is only for tags with no text inside it


//3.)--> Manipulating Styles and Classes: Style , classList..
var h6 = document.querySelector("h6");
h6.style.color = 'red'  //.styling without using css directly from js after clicking or selecting bec css gives change directly
h6.style.fontSize = '25px'

var p = document.querySelector("p");
p.classList.add('makeitBlue');  //now styling  using css by linking using .classList 

//4.) Creating and Deleting Elements: 
var paro = document.createElement('h6');  //creating elements
paro.textContent = "heyyyyyyyyyyyyy";  //addinng whatever you want as previously we do
paro.classList.add("makeitBlue");

document.querySelector("body").appendChild(paro)  //now whatever we made is in js file , to make it show on the html screen append it as shown and here we append in body whatever we made , you csn append in any div made in html
//document.querySelector("body").removeChild(paro)  //this is for deleting elements


//5.) Event handling: addEventListner()--> jab bhi aap kisi ele par kisi bhi parakar ka action karte ho toh waha par event by default raise hota hai in js , ab agar apne koi event listner nahi banaya hai toh woh event ignore kakr diya jayega par agar apne listner banaya hai us event(click, dblclick, mouseover,) toh woh event ignore nahi kiya jayega aur uska listner chalega..chalo humlog dblclick event ka listner banate hai
var bttn = document.querySelector("button");
// bttn.addEventListener("click", function(){   //here we write two things one is action(click) and due to action required function we need
//     bttn.textContent = "Starting.....";
//     bttn.classList.add("makeitBlue");
// })
// bttn.addEventListener("dblclick", function(){
//     bttn.textContent = "Starting in 10s.....";
//     bttn.classList.add("makeitBlue");
// })
bttn.addEventListener("mouseover", function(){
    bttn.textContent = "Tu toh gaya beta";
    bttn.classList.add("makeitBlue");
})
bttn.addEventListener("mouseleave", function(){
    bttn.textContent = "Bach gaya bc";
    
})