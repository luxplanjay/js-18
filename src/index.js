import newsService from './js/news-service';
import updateArticlesMarkup from './js/update-articles-markup';
import LoadMoreBtn from './js/components/load-more-button';
import refs from './js/refs';
import './sass/styles.scss';

const loadMoreBtn = new LoadMoreBtn({
  selector: 'button[data-action="load-more"]',
  hidden: true,
});

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function searchFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  newsService.query = form.elements.query.value;

  clearArticlesContainer();
  newsService.resetPage();
  fetchArticles();
  form.reset();
}

function fetchArticles() {
  loadMoreBtn.disable();

  newsService.fetchArticles().then(articles => {
    updateArticlesMarkup(articles);
    loadMoreBtn.show();
    loadMoreBtn.enable();
  });
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
