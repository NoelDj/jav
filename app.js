
const x = document.getElementsByClassName("name");
for(i=0; i < x.length; i++){
    x[i].textContent += " book";
}

const y = document.getElementsByClassName("title");
for(i=0; i < y.length; i++){
    console.log("This is a " + y[i].nodeName + " node.");
    y[i].textContent += " popular";
}

const book = document.getElementById("book-list");
book.previousElementSibling.querySelector("#s").innerHTML += "<p>The book database</p>"

console.log(book.children);

console.log(book.nextElementSibling, book.previousElementSibling.nodeName)

//events

const btn = document.querySelector("#book-list ul");
btn.addEventListener("click", function(e){
    if(e.target.className == "delete"){
        e.target.parentElement.remove();
    }
})

/* eventlistener associated with .del class and not ul

for(i=0; i < btn.length; i++){
    btn[i].addEventListener("click", function(e){
        e.target.parentElement.remove();
    })
}*/

document.querySelector("#this").addEventListener("click", function(e){
    e.preventDefault();
    alert("Access denied to " + e.target.textContent);
})

/*forms*/
const sub = document.forms["add-book"];
sub.addEventListener("submit", function(e){
    e.preventDefault();
    const value = sub.querySelector('input[type="text"]').value;
    console.log(value);



    //Create element
    const listItem = document.createElement("li");
    const spanItem = document.createElement("span");
    const delItem = document.createElement("span");

    //classes
    spanItem.textContent = (value) + " (new)";
    delItem.textContent = ("delete");

    spanItem.classList.add("name")
    delItem.classList.add("delete");

    spanItem.style.color = "red";

    listItem.appendChild(spanItem);
    listItem.appendChild(delItem);
    btn.appendChild(listItem);
});

/*hide books*/
const box = document.querySelector("#hide");
box.addEventListener("change", function(e){
    if(box.checked){
        console.log("his");
        btn.style.display="none";
    }
    else {
        console.log("ds");
        btn.style.display="block";
    }
})
