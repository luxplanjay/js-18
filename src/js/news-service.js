const apiKey = '4330ebfabc654a6992c2aa792f3173a3';

export default {
  searchQuery: '',
  page: 1,
  fetchArticles() {
    const url = `http://newsapi.org/v2/everything?q=${this.query}&language=en&pageSize=5&page=${this.page}`;
    const options = {
      headers: { Authorization: apiKey },
    };

    return fetch(url, options)
      .then(res => res.json())
      .then(({ articles }) => {
        this.incrementPage();

        return articles;
      });
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
