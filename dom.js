// // // GETELEMENTBYTAGNAME //

// // var li = document.getElementsByTagName('li');
// // console.log(li);
// // console.log(li[1]);
// // li[1].textContent = 'hello 2';
// // li[1].style.fontWeight = 'bold';
// // li[1].style.backgroundColor = 'yellow';
// // li[1].style.background = 'yellow';

// // // li.style.backgroundColor = '#f4f4f4';    // it will not work because it is an html-collection(array)

// // for (let i=0;i<li.length;i++){
// //     li[i].style.backgroundColor = '#f4f4f4';
// // }



// // // li[2].style.backgroundColor = 'green';
// // // for (let i=0;i<li.length;i++){
// // //     li[i].style.fontWeight = 'bold';
// // // }












// // // QUERYSELECTOR (we can put anything here class,id,tag etc.) //

// // var header = document.querySelector('#main-header');
// // header.style.borderBottom = 'solid 8px #ccc';


// // var input = document.querySelector('input');      // it will grab first one
// // input.value = 'Hello World'

// // var submit = document.querySelector('input[type="submit"]')
// // submit.value = 'SEND'

// // var item = document.querySelector('.list-group-item');    // it will grab first one
// // item.style.color = 'red';

// // var lastItem = document.querySelector('.list-group-item:last-child');
// // lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.color = 'coral';

// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';











// // // QUERYSELECTORALL  (we can put anything here class,id,tag etc.) //     

// // var titles = document.querySelectorAll('.title');
// // console.log(titles)
// // titles[0].textContent = 'Hello';


// var odd = document.querySelectorAll('li:nth-child(odd)');
// // var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
//     // odd[i].style.backgroundColor = '#f4f4f4';
//     // even[i].style.backgroundColor = '#ccc';
// }

// item = document.querySelectorAll('li');
// item[1].style.color = 'green';










// TRAVERSING THE DOM //

var itemList = document.querySelector('#items')
// // parentNode property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

// // parentElement property
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);





// // childNodes property
// // console.log(itemList.childNodes);        // it includes text and line breaks also

// console.log(itemList.children);            //  it gives only elements and it gives a html collection
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';


// // firstChild
// console.log(itemList.firstChild);         // just like childNodes it includes text and line breaks also


// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello bro'


// // lastChild
// console.log(itemList.lastChild);         // just like childNodes it includes text and line breaks also


// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello bhai'






// // nextSibling
// console.log(itemList.nextSibling);    

// // nextElementSibling
// console.log(itemList.nextElementSibling);   

// // previousSibling
// console.log(itemList.previousSibling);    

// // previousElementSibling
// console.log(itemList.previousElementSibling);   
// itemList.previousElementSibling.style.color = 'green';






// // createElement

// //  Create a div
// let newDiv = document.createElement('div');

// // Add class
// newDiv.className = 'hello'; 

// // Add id
// newDiv.id = 'hello1';

// // Add attribute
// newDiv.setAttribute('title', 'Hello Div');

// // create text node
// var newDivText = document.createTextNode('Hello world!');

// // Add text to div
// newDiv.appendChild(newDivText);


// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);







let newDiv = document.createElement('div');
var newDivText = document.createTextNode('HEllo');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);



let li = document.createElement('li');
li.className = 'list-group-item';
var liText = document.createTextNode('HEllo');
li.appendChild(liText);

var list = document.querySelector(' .list-group');
item1 = list.children[1]
list.insertBefore(li, item1)




