export default class MovieListner {
  static init() {
    this.backBtn = document.querySelector('.button__back');
    this.mainPage = document.body.querySelector('.movies__container');
  }

  static listen() {
    MovieListner.init();
    this.backBtn.addEventListener('click', () => {
      document.body.querySelector('.movieCard-wrapper')?.remove();
      this.mainPage.classList.remove('hide');
    });
  }
}
