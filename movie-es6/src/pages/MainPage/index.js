import CardContainer from '../../view/CardContainer';

const MainPageRender = (data) => {
  document.body.querySelector('.movieCard-wrapper')?.classList.add('hide');
  new CardContainer(data).render();
};

export default MainPageRender;
