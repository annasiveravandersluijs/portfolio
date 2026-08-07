let flashElement
const gifDuration = 60;

function show(iconElement){
	let elementId = iconElement.id;
	let tabElement = document.getElementById(elementId + "tab")
	if(tabElement != null){
		tabElement.style.display ="block";
	}
}

function hide(element){
	element.style.display ="none";
}

function link(){
	window.open('https://www.linkedin.com/in/anna-sivera-van-der-sluijs/');
}

function playAnimation(){
	flashElement.src = "flash.gif?t=" + new Date().getTime();
	flashElement.style.display = "block";
}

setTimeout(() => {
        flashElement.style.display = "none";
    }, gifDuration);

const randomDelay = (Math.random() * 5000) + 2000;
setTimeout(playAnimation, randomDelay);

window.onload=function(){

	for (let icon of document.querySelectorAll("nav > *")) {
		icon.onclick = function(){
			show(icon);
		}
	}

	for (let tab of document.querySelectorAll("section")) {
		tab.onclick = function(){
			hide(tab);
		}
	}

	document.getElementById("link").onclick=function(){
		link(this);
	}

	flashElement = document.getElementById("effect");
	flashElement.style.display = "none";
	playAnimation();
}