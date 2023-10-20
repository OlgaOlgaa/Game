let text = 'Помоги пианисту сыграть произведение! 🎜';
let i = 0;
let speed = 40;

function type() {
	if (i < text.length) {
		document.querySelector('#par').textContent += text.charAt(i);
		i++;
		setTimeout(type, speed);
	}
}
type();


const input = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random() * 20 + 1);
input.addEventListener('keypress', function (e) {
	if (e.keyCode === 13) {
		play();
	}
})

button.addEventListener('click', play);

function play() {
	const userNumber = document.querySelector('#guess').value;
	if (userNumber < 1 || userNumber > 20) {
		Swal.fire({
			title: 'Ой!',
			text: 'Введи число от 1 до 20!',
			imageUrl: 'notes.jpg',
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: 'Custom image',
		})
	} else if (isNaN(userNumber)) {
		Swal.fire({
			title: 'Ой!',
			text: 'Введи число!',
			imageUrl: 'notes.jpg',
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: 'Custom image',
		})
	} else {
		if (userNumber < answer) {
			Swal.fire({

				text: 'Попробуй число повыше!',
				imageUrl: 'oldpiano.avif',
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: 'Custom image',
			})
		} else if (userNumber > answer) {
			Swal.fire({

				text: 'Попробуй число пониже!',
				imageUrl: 'oldpiano.avif',
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: 'Custom image',
			})
		} else {
			Swal.fire({

				text: 'Победа!',
				imageUrl: 'pianoplaying.avif',
				imageWidth: 500,
				imageHeight: 400,
				imageAlt: 'Custom image',
			})
			myAudio.play();
		}
	}
}
