const yourevent = new Event("gharJao");

document.querySelector("button")
.addEventListener("gharJao", function(){
    alert("jaa raha hu ghar");
})
document.querySelector("button").dispatchEvent(yourevent);