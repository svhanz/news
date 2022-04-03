
const API_KEY = '3b6fc1a03e4a4b969d8fa8ce1a49547e';

const choicesElem = document.querySelector('.js-choice');
console.log(choicesElem);
const choices = new Choices(choicesElem, {
  searchEnabled: false,
  itemSelectText: '',
});

const loadNews = () => {
  const data = getdata();
  renderCard(data);

}
