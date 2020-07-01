'use strict';

var WIZARDS_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var fragment = document.createDocumentFragment();
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var setupPlayer = document.querySelector('.setup-player');
var setupWizard = document.querySelector('.setup-wizard');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');
var escKey = 'Escape';
var enterKey = 'Enter';

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizards = [];


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

var onPopupEscPress = function (evt) {
  if (evt.key === escKey && document.activeElement !== setupUserName) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');

setupOpen.addEventListener('click', openPopup);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === enterKey) {
    openPopup();
  }
});

setupClose.addEventListener('click', closePopup);

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === enterKey) {
    closePopup();
  }
});

setupWizardCoat.addEventListener('click', function () {
  setupWizardCoat.style.fill = getArrayRandElement(WIZARDS_COLORS);
  setupPlayer.querySelector('input[name="coat-color"]').value = setupWizardCoat.style.fill;
});

setupWizardEyes.addEventListener('click', function () {
  setupWizardEyes.style.fill = getArrayRandElement(WIZARDS_EYES);
  setupPlayer.querySelector('input[name="eyes-color"]').value = setupWizardEyes.style.fill;
});

setupFireball.addEventListener('click', function () {
  var fireballColor = getArrayRandElement(FIREBALL_COLOR);
  setupFireball.style.background = fireballColor;
  document.querySelector('input[name="fireball-color"]').value = fireballColor;
});
