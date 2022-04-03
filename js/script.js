
const API_KEY = '3b6fc1a03e4a4b969d8fa8ce1a49547e';
const choicesElem = document.querySelector('.js-choice');


const choices = new Choices(choicesElem, {
  searchEnabled: false,
  itemSelectText: '',
});
const getdata = async (url) => {
  const response = await fetch(url, {
    headers: {
      'X-Api-Key': API_KEY,
    }
  });
  const data = await response.json();

  return data
};

const renderCard = (data) => {
  console.log();
}

const loadNews = async () => {
  const data = await getdata('https://newsapi.org/v2/top-headlines?country=ru');
  renderCard(data);

}

loadNews();