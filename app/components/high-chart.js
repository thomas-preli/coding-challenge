import Ember from 'ember';
import stockData from '../data/stock';

export default Ember.Component.extend({
  chartOptions: {
    rangeSelector: {
      selected: 1
    },
    title: {
      text: 'AAPL'
    }
  },

  chartData: Ember.copy(stockData, true)
});
