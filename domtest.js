// document.querySelectorAll('.column');
// document.querySelectorAll('.list-item:nth-child(2)');

//list item Node selected


 //review index [i] "passing the index"
 // "use strict";
 // for loops 
 // for (i = 0, i > variable, i++);
 // OOP
 // .length
 // .innerText

 // programming language --> what you are changing --> what you want the outcome per googling


 function main() {

    let newAdd = document.getElementById('grow-me');
    newAdd.classList.add('big');
    
    let newRemove = document.getElementById('shrink-me');
    newRemove.classList.remove('big');


    let text = document.getElementById('list').innerText;
    console.log(text);

    
    // let exampleLink = document.querySelectorAll('.link');
    // exampleLink.setAttribute('href', 'https://www.example.com');
    // exampleLink.innerText = 'somewhere';



   document.getElementById('hide-me').style.display = 'none';
   document.getElementById('show-me').style.display = 'block';




//     let nameH1 = document.querySelectorAll('h1');
//    let nameH1[0].innerText = `Welcome ${nameH1}`




 }    
