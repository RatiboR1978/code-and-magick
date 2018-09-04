var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var arrName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
	arrCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
	arrEyesColor = ['black', 'red', 'blue', 'yellow', 'green'],
	arrSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
	arrWizards = [];

function randomCategory(arr) {
	return Math.floor(Math.random() * (arr.length - 0) + 0);
}

var fragment = document.createDocumentFragment(),
	listWizards = document.querySelector('.setup-similar-list'),
	templateWizard = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < 4; i++) {
	arrWizards.push( {
		'name' : arrName[randomCategory(arrName)] + ' ' + arrSurname[randomCategory(arrSurname)],
		'coatColor' : arrCoatColor[randomCategory(arrCoatColor)],
		'eyesColor' : arrEyesColor[randomCategory(arrEyesColor)]
	});
}

function renderWizard(arr) {
	var elementWizard = templateWizard.cloneNode(true);
	elementWizard.querySelector('.setup-similar-label').textContent = arr.name;
	elementWizard.querySelector('.wizard-coat').style.fill = arr.coatColor;
	elementWizard.querySelector('.wizard-eyes').style.fill = arr.eyesColor;
	return elementWizard;
}

for (var j = 0; j < arrWizards.length; j++) {
	fragment.appendChild(renderWizard(arrWizards[j]));
}

listWizards.appendChild(fragment);







