 document.querySelector("h1").className = "test";
 var input = document.getElementById("exampleInputEmail1");
 var button = document.getElementById("enter");
 var ul = document.querySelector("ul");
 console.log(ul);
 button.addEventListener("click", function c() {
     var li = document.createElement("li");
     li.appendChild(document.createTextNode(input.value));
     ul.appendChild(li);
 });