const db = require('../');

const Lifecycle = db.Model.extend({
  tableName: 'lifecycle',
  card: function() {
    return this.belongsTo('Card');
  },
  company: function() {
    return this.belongsTo('Company').through('Card');
  },
  currentCards: function() {
    return this.where('card_id', '1');
  }
});

module.exports = db.model('Lifecycle', Lifecycle);