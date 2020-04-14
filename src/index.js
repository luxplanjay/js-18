import './sass/styles.scss';
import fetchArticles from './js/fetch-articles';
import updateArticlesMarkup from './js/update-articles-markup';
import refs from './js/refs';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;

  refs.articlesContainer.innerHTML = '';
  form.reset();

  fetchArticles(inputValue).then(updateArticlesMarkup);
});
