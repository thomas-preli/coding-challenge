import Ember from 'ember';

export default Ember.Component.extend({
  chartOptions: {
    rangeSelector: {
      selected: 1
    },
    title: {
      text: 'NO SYMBOL SELECTED'
    }
  },

  chartData: []
});
