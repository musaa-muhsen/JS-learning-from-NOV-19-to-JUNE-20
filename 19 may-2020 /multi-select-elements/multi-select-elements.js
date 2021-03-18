// document.getElementsByClassName

// selected from the global scope 
const items = document.getElementsByClassName('collection-item');
console.log(items) // HTMLCollection 
console.log(items[0])// we can treat it like an array when selecting one // first class tag 
items[0].style.color = 'red';

//console.log(items[2].textContent)

const list_Items_From_Only_UL = document.querySelector('ul').getElementsByClassName('collection-item')
console.log(list_Items_From_Only_UL)
// document.getElementsByTagName // kind of works the same as classes

// let because we're redefining the value 
let lis = document.getElementsByTagName('li');
console.log(lis)
lis[0].style.color = 'blue'
list_Items_From_Only_UL[0].style.color = 'green'// because this is last on the script this color change get used 

lis = Array.from(lis).reverse(); // made an array then reversed the array // Careful: reverse is destructive -- it changes the original array.

lis.forEach(function (li, index) {
    console.log(li.className) // 5 collection-item
    li.textContent = `[${index}] Hello` // no need to return because we are just changing the dom itself 
})

// querySelectorAll pretty much does what the above does 
// querySelectorAll returns a node list, node list actually counts not just elements but things like text nodes. it also allows us to do things forEach and other array methods without having to convert it.
// querySelectorAll pretty much behaves like jQuery 


// for loop can even work with a HTML collection without converting it into an array because you can still use length on HTML collection and you can still access it with the index of [i] 

const items2 = document.querySelectorAll('ul.collection li.collection-item')
console.log(items2)
const itemsOdd = document.querySelectorAll('ul.collection li.collection-item:nth-child(odd)');
const itemsEven = document.querySelectorAll('ul.collection li.collection-item:nth-child(even)');
// no need to change to an array 
itemsOdd.forEach(item => item.style.background = 'rgb(112,112,112)')

for (let i = 0; i < itemsEven.length; i++) {
    itemsEven[i].style.background = 'rgb(211,211,211)'
}



