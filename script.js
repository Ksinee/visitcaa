const words = [
  "погода",
  "бухгалтерия",
  "проезд", 
  "динозавр",
  "мелодия",
  "чувство",
  "автомобиль",
  "лотерея",
  "правило",
  "закон",
  "объятие",
  "событие",
  "случайность",
  "везение",
  "дождь",
  "туман",
  "окно",
  "птица",
  "мартышка",
  "зависимость",
  "алкоголь",
  "сценарий",
  "клавиатура",
  "мышь",
  "монитор",
  "провод",
  "повод",
  "возгорание",
  "ветер",
  "сияние",
  "отдых",
  "каникулы",
  "работа",
  "напряжение",
  "кинофильм",
  "просмотр",
  "компьютер",
  "криптография",
  "краски",
  "слово",
  "победа",
  "проигрыш"];

let world = document.querySelector(".currentworld")
let worlds = document.querySelector(".keyboard") 
function pickworld() {
  return Math.floor(Math.random() * (words.length - 0 + 1)) + 0;
}

const word = words[pickworld()];

let mistakes = 0
let currentWord = "привет"

function checkLetter(button, clickedLetter) {
	if (currentWord.includes(clickedLetter)) {
		// Replace all occurrences of the letter in the word
		let wordText = word.textContent
		let newWordText = ""
		for (let i = 0; i < currentWord.length; i++) {
			if (currentWord[i] === clickedLetter) {
				newWordText += clickedLetter
			} else {
				newWordText += wordText[i]
			}
			console.log(newWordText)
		}
		word.textContent = newWordText
		if (newWordText === currentWord) {
			alert("You win!")
		}
	} else {
		mistakes++
		console.log("Mistakes: " + mistakes)
		if (mistakes == 5) {
			alert("you LOSE!!!")
		}
	}
	button.disabled = true
}


platBut.addEventlisener("click", function () {
  for (let i = 1072; i <= 1103; i++) {
    let buttion = document.createElement('buttion')
    buttion.innerHTML = String.fromCharCode(i)
    KeyboardEvent.append(buttion)
    buttion.addEventlisener('click', (e) =>
      initGame(e.target, String.fromCharCode(i))
    )
}
  for (let i = 0; i < currentWord.length; i ++) {
    word.innerHTML += "_"
  }
  playBut.style.display = "none"
  game.style.display = "flex"
})