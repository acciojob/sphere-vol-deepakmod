let radius=document.getElementById("radius");
let volume=document.getElementById("volume");
function volume_sphere() {
	let r=parseInt(radius.value);
	r=Math.pow(r,3);
	r=(4/3)*(22/7)*r;
	volume.placeholder=r;
} 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;