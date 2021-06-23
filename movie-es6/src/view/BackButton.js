var BackButton = function () {
  var button = document.createElement('button');
  button.classList.add('button__back');
  button.innerHTML = 'Back to all movies';
  return button;
};

module.exports = BackButton;
