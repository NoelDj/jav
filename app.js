const doc = document.getElementById("wrapper");
const header = document.querySelector("header");
const classes = document.getElementsByClassName("title");
const list = document.getElementsByTagName("li");
const fruits = Array.from(list);

    fruits.forEach(function(item){
                         console.log(item)
                         })

for(i=0; i < classes.length; i++){
    console.log(classes[i])
}

console.log(doc, header, doc, classes);
console.log(classes[1], classes[0]);
console.log(list);
