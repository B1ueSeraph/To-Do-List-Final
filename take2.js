function closebutton(target) {
    target.parentNode.removeChild(target);
};








function createNewElement(){
var li = document.createElement('li');
var newItem = document.getElementById("newItem").value;
var textNode = document.createTextNode(newItem);
li.appendChild(textNode);

if (newItem === ''){
    alert("No item added")
} else {
    document.getElementById("list").appendChild(li);
}
document.getElementById("newItem").value

var waffles = document.createElement("SPAN");
var txt = document.createTextNode(" X");
waffles.className = "close";
waffles.appendChild(txt);
li.appendChild(waffles);


}

var ulList = document.querySelector("ul");
ulList.addEventListener("click", function(event){
if (event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
} else if (event.target.className === 'close'){
    closebutton(event.target.parentElement);
}

});