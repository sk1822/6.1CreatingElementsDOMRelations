// 1. Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high quality organic fruits online".
const heading3=document.createElement('h3');
const headingContent=document.createTextNode("Buy high quality organic fruits online");

heading3.appendChild(headingContent)
console.log(heading3)
//insertBefore
const divs=document.getElementsByTagName('div')//returns html collections
const firstDiv=divs[0];
const subheading=firstDiv.appendChild(heading3)
// 2. Make the sub-heading text italic.
subheading.style.fontStyle='italic'
// 3.Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".
const secondDiv=divs[1];
const para=document.createElement('p');
const paraText=document.createTextNode('Total fruits: 4')
para.appendChild(paraText);
secondDiv.appendChild(para);
const fruits=document.querySelector('.fruits')
secondDiv.insertBefore(para,fruits);
// 4. On this paragraph tag set an id of "fruits-total".
para.id="fruits-total"

