const title = document.querySelectorAll('.title-start')

title.forEach((title, index) => {
	setTimeout(() => {
		title.style.animation = 'titleMove'
		title.style.animationDuration = 2500 + 'ms'
		title.style.animationFillMode = 'forwards'
	}, (index + 1) * 2000)
})

setTimeout(() => {
	document.querySelector('.cookies').style.display = 'flex'
}, 10000)

const checkbox = document.getElementById('cookies')

checkbox.addEventListener('change', () => {
	if (checkbox.checked) {
		console.log('Согласие получено')
		document.querySelector('.cookies').style.display = 'none'
	}
})
