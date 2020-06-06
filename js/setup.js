'use strict';

document.querySelector('.setup').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardsColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardsEyes = ['black', 'red', 'blue', 'yellow', 'green'];

function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

var wizards = [
  {
    name: arrayRandElement(wizardsNames) + ' ' + arrayRandElement(wizardsSurnames),
    coatColor: arrayRandElement(wizardsColors),
    eyesColor: arrayRandElement(wizardsEyes)
  },
  {
    name: arrayRandElement(wizardsNames) + ' ' + arrayRandElement(wizardsSurnames),
    coatColor: arrayRandElement(wizardsColors),
    eyesColor: arrayRandElement(wizardsEyes)
  },
  {
    name: arrayRandElement(wizardsNames) + ' ' + arrayRandElement(wizardsSurnames),
    coatColor: arrayRandElement(wizardsColors),
    eyesColor: arrayRandElement(wizardsEyes)
  },
  {
    name: arrayRandElement(wizardsNames) + ' ' + arrayRandElement(wizardsSurnames),
    coatColor: arrayRandElement(wizardsColors),
    eyesColor: arrayRandElement(wizardsEyes)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
