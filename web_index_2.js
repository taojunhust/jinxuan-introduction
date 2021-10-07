//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'jinxuan.jpg') {
      myImage.setAttribute('src', 'feifei.jpg');
    } else {
      myImage.setAttribute('src', 'jinxuan.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	let myName=prompt('请输入你的名字。');
	if(!myName||myName===null){
		setUserName();
	}else{
	localStorage.setItem('name',myName);
	myHeading.innerHTML='金萱是个多才多艺的人，'+myName;
	//这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它;
    }
}
/*
if(!localStorage.getItem('name')){
	setUserName();
} else{
	let storedName=localStorage.getItem('name');
	myHeading.textContext='金萱是个多才多艺的人，'+storedName;
}
*/
myButton.onclick=function(){
	setUserName();
}