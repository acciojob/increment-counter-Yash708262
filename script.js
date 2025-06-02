const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', ()=> {
	const currentValue = parseInt(counterElement.textContent)
	alert(currentValue);
	counterElement.textContent = currentValue + 1;
})
