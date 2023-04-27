
function volume_sphere() {
	let radius=document.getElementById("radius");
	let volume=document.getElementById("volume");
  let r = parseFloat(radius.value);
  let vol = (4/3) * Math.PI * Math.pow(r, 3);
  volume.value = vol.toFixed(2);
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;