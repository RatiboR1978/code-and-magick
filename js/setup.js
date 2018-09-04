var arrName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
	arrCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
	arrEyesColor = ['black', 'red', 'blue', 'yellow', 'green'],
	arrSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
	arrWizards = [];

function randomCategory(arr) {
	return Math.floor(Math.random() * (arr.length - 0) + 0);
}

var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
	arrWizards.push( {
		'name' : arrName[randomCategory(arrName)] + ' ' + arrSurname[randomCategory(arrSurname)],
		'coatColor' : arrCoatColor[randomCategory(arrCoatColor)],
		'eyesColor' : arrEyesColor[randomCategory(arrEyesColor)]
	});
}

for (var j = 0; j < arrWizards.length; j++) {
	var temp = document.createElement('template');

	temp.innerHTML =
		'<div class="setup-similar-item">\n' +
		'    <div class="setup-similar-content">\n' +
		'      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 86" class="setup-similar-wizard">\n' +
		'        <g class="wizard">\n' +
		'          <use xlink:href="#wizard-coat" class="wizard-coat" fill="' + arrWizards[j].coatColor + '"></use>\n' +
		'          <use xlink:href="#wizard-head" class="wizard-head"></use>\n' +
		'          <use xlink:href="#wizard-eyes" class="wizard-eyes" fill="' + arrWizards[j].eyesColor + '"></use>\n' +
		'          <use xlink:href="#wizard-hands" class="wizard-hands"></use>\n' +
		'        </g>\n' +
		'      </svg>\n' +
		'    </div>\n' +
		'    <p class="setup-similar-label">' + arrWizards[j]['name'] + '</p>\n' +
		'  </div>';

	fragment.appendChild(temp.content);
}

var listWizards = document.querySelector('.setup-similar-list');
listWizards.appendChild(fragment);




