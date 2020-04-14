const apiKey = '4330ebfabc654a6992c2aa792f3173a3';

function fetchArticles(searchQuery) {
  const url = `http://newsapi.org/v2/everything?q=${searchQuery}&language=en`;
  const options = {
    headers: {
      Authorization: apiKey,
    },
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(({ articles }) => articles);
}

export default fetchArticles;
