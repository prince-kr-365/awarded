//1.) Create a html page with a button, when the button is clicked, change the text of a paragraph element

// var btn = document.querySelector("button");
// var p = document.querySelector("p");

// btn.addEventListener("click", function(){
// p.textContent = "hey whats'up";
// });

// //2.)Create a page with two images and a button. When the button is clicked, swap the source attribute of the images.
// var img1 = document.querySelector("#one");
// var img2 = document.querySelector("#two");

// var bttn = document.querySelector("button");
// bttn.addEventListener("click", function(){
//     var src1 = img1.src;
//     var src2 = img2.src;

//     img1.src = src2;
//     img2.src = src1;

//     });

//3.))) Create a form input fields and a submit button. Use js to validate the form and dispaly an error message if input is invalid.
//jab bhi form ki submit karte hai toh page ko reload kar deta hai and sara details filled barbad means restart means agar reload hua toh js nahu chalega kyunki js chal paye usse pehle page reload ho jata hai
//METHOD--1

// var form = document.querySelector("form");
// var inp1 = document.querySelector("#inp1");
// var inp2 = document.querySelector("#inp2");
// var h4 = document.querySelector("h4");

// form.addEventListener("submit", function(ev){
//     ev.preventDefault();  //jab bhi form ki submit karte hai toh page ko reload hone se rokta hai
//     if(inp1.value.trim() === '' || inp2.value.trim() === ''){
//         h4.textContent = "error, some fields are blank";
//         h4.style.color = "red";
//     }
//    else{
//          h4.textContent = "";
//         h4.style.color = "black";
//     }
// });


//METHOD--2
// var form = document.querySelector("form");
// var inps = document.querySelectorAll('input[type = "text"]');
// var h4 = document.querySelector("h4");

// form.addEventListener("submit", function(ev){
//     ev.preventDefault();
//     for(var i = 0; i<inps.length; i++){
//         if(inps[i].value.trim() === ''){
//             h4.textContent = "error, plz fill all the blank";
//             h4.style.color = "blue"
//             break;
//         }
//     }
// });




//4.))) Create an unorderlist. Allow user to add and remove list dynamically using buttons.
// var add = document.querySelector("#add");
// var remove = document.querySelector("#remove");
// var inp = document.querySelector("input");
// var ul = document.querySelector("ul");

// var li;
// add.addEventListener("click", function(){
//     if(inp.value.trim() === ''){}
//     else{
//         li = document.createElement("li");
//         li.textContent = inp.value;
//         ul.appendChild(li);
//         inp.value = "";
//     }
// })

// remove.addEventListener("click", function(){
//    ul.removeChild(li);
// })



//5.))) Build a  countdown timer that starts when a button is clicked and same for stop and updates the display in real time.
// var start = document.querySelector("#start");
// var stop = document.querySelector("#stop");
// var h3 = document.querySelector("h3");
// var h4 = document.querySelector("h4");

// var timer, count;
// start.addEventListener("click", function(){
//      count = 0;
//   timer =  setInterval(function(){
//         h3.textContent = count;
//         count++;
//     }, 1000)
// });
// stop.addEventListener("click", function(){
//    clearInterval(timer);
//    h4.textContent =  count-1;
// });



//6.))) Create a tabbed interface where clicking on tabs displays different content sections without page reload.

//METHOD-1
// var home = document.querySelector("#home");
// var about = document.querySelector("#about");
// var contact = document.querySelector("#contact");

// var hometext = document.querySelector("#hometext");
// var abouttext = document.querySelector("#abouttext");
// var contacttext = document.querySelector("#contacttext");

// // hometext.style.display = "block";

// home.addEventListener("click", function(){
//     saretexthatao()
//     hometext.style.display = "block";
//     home.textContent = "loading...";
//     home.style.color = "red";
// });
// about.addEventListener("click", function(){
//     saretexthatao()
//     abouttext.style.display = "block";
// });
// contact.addEventListener("click", function(){
//     saretexthatao()
//     contacttext.style.display = "block";
// });

// function saretexthatao(){
//     document.querySelectorAll("h3").forEach(function(h3){
//      h3.style.display = "none";
//    })
  
// }

//METHOD-2
// var tab = document.querySelectorAll('.tab');
// var texts = document.querySelectorAll("h3");

// texts[0].style.display = "block";

// tab.forEach(function(div, index){
//     div.addEventListener("click", function(){
//          hideAllText();
//         texts[index].style.display = "block";
//     });
// });

// function hideAllText(){
//     texts.forEach(function(text){
//         text.style.display = "none";
//     });
// }



//7.)))Display a proggress bar that updates in real time,showing the progress of task, download, or form submission.
// var prg = document.querySelector("#progress");
// var h3 = document.querySelector("h3");
// var h2 = document.querySelector("h2");

// var count = 0;
// var interval = setInterval(function(){
//     if(count === 100){
//         h2.style.display = "none";
//         h3.style.opacity = 1;
//         clearInterval(interval);   //width will overflow of downloadcapsule,so we stop after 100%
//     }

//     count++;
//     prg.style.width = count+ '%';
// },50);



//8.))) Create a search bar that displays live serach results as user type updating the results withhout requiring a full  page load.

// var input = document.querySelector("input");
// var data = [
//     {name: "elon", src: "https://th.bing.com/th/id/OIP.tmmxsctQdTCbVCX4LGDIuQHaFj?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"},
//     {name: "dhurv", src: "https://wallpaperaccess.com/full/14733341.jpg"},
//     {name: "modi", src: "https://yt3.ggpht.com/-zL2hGAaDwmU/AAAAAAAAAAI/AAAAAAAAAAA/q635-BPG5Zg/s900-c-k-no/photo.jpg"},
//     {name: "hemant", src: "https://english.cdn.zeenews.com/sites/default/files/2019/12/29/837429-836617-hemant-soren-1.jpg"}
// ]
// var pers = "";
// data.forEach(function(elem){
//     pers += ` <div class="person">
//                 <div class="image">
//                     <img src="${elem.src}" alt="">
//                 </div>
//                 <h4>${elem.name}</h4>
//             </div>`;
// })
// document.querySelector(".people").innerHTML = pers;

// input.addEventListener("input",function(){
//     var matching = data.filter(function(e){   //this function filter work in forEach loop over the given data and like array and simply filters out
//         return e.name.toLowerCase().startsWith(input.value.toLowerCase())
//     })
    
    
//     var newusers = "";
//     matching.forEach(function(elem){
//     newusers += ` <div class="person">
//                 <div class="image">
//                     <img src="${elem.src}" alt="">
//                 </div>
//                 <h4>${elem.name}</h4>
//             </div>`;
// })
// document.querySelector(".people").innerHTML = newusers;
// })




//9.))) Build a charcter text area or input field,which updates in real and counts the number words in text area.

var txtarea = document.querySelector("textarea");
var counter = document.querySelector("#counter");

txtarea.addEventListener("input", function(){
    counter.textContent = txtarea.value.length;
})



//10.))) Show a progress bar which shows how much page has been scrolled.