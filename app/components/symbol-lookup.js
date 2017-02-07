import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  symbols: [],

  actions: {
    checkLength(text, select) {
      if (select.searchText.length >= 3 && text.length < 3) {
        this.set('symbols', []);
        return false;
      } else {
        return text.length >= 3;
      }
    },

    searchRepo(searchTerm) {
      const url = `http://localhost:8080/symbols?searchTerm=${searchTerm}`;
      return this.get('ajax').request(url).then((json) => json.symbols);
    }
  }
});
