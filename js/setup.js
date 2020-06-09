'use strict';

var WIZARDS_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizards = [];

document.querySelector('.setup').classList.remove('hidden');

for (var i = 0; i < WIZARDS_COUNT; i++) {
  wizards.push({
    name: getArrayRandElement(WIZARDS_NAME) + ' ' + getArrayRandElement(WIZARDS_SURNAMES),
    coatColor: getArrayRandElement(WIZARDS_COLORS),
    eyesColor: getArrayRandElement(WIZARDS_EYES)
  });
}

function getRandomInLimit(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getArrayRandElement(arr) {
  var rand = getRandomInLimit(0, arr.length);
  return arr[rand];
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
