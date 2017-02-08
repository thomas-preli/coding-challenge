import Ember from "ember";

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  messageBus: Ember.inject.service('message-bus'),

  init() {
    this._super(...arguments);

    this.get('messageBus').subscribe('symbol-changed', this, this.updateChart);
  },

  updateChart(symbol) {
    const url = `http://localhost:8080/symbol/${symbol}`;
    const chart = this.get('chart');
    this.get('ajax').request(url).then(function(json) {
      chart.setTitle({text: symbol});

      chart.series[0].update({name: symbol, type: 'candlestick'});
      chart.series[0].setData(json);
    });
  }
});
