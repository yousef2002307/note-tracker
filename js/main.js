function getvalue(input){
    let x = input.value;
    return x;
}
let textarea = document.querySelector("textarea");
let notes = document.querySelector(".notes");
thechecker();
function thechecker(){
    console.log("hello from checker");
    let arr = Array.from(notes.children);
    return arr.length + 1;
}
document.querySelector("form").onsubmit = function(e){
    e.preventDefault();
   let note = document.createElement("div");
   let noteattr = document.createAttribute('class');
   noteattr.value = 'note';
   note.setAttributeNode(noteattr);
   let container = document.createElement("div");
   let containerattr = document.createAttribute('class');
   containerattr.value = 'container';
   container.setAttributeNode(containerattr);
    note.appendChild(container);
    let h4 = document.createElement("h4");
    h4.textContent = "Note" + thechecker();
    container.appendChild(h4);
    let p = document.createElement("p");
    p.textContent = getvalue(textarea);
    container.appendChild(p);
    let button = document.createElement("button");
    button.textContent = 'viwe details';
    let buttonattr = document.createAttribute('class');
    buttonattr.value = 'btn btn-primary';
  button.setAttributeNode(buttonattr);
     container.appendChild(button);
    console.log(note);
    notes.appendChild(note);
 
////show popup
button.onclick = function(){
    document.querySelector(".jopopup").style.display = 'block';
    document.querySelector(".content-text").textContent = p.textContent;
}


}






