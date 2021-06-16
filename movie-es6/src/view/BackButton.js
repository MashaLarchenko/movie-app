const BackButton = () => {
  const button = document.createElement('button');
  button.classList.add('button__back');
  button.innerHTML = 'Back to all movies';
  return button;
};

export default BackButton;
