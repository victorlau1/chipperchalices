const db = require('../');

const Lifecycle = db.Model.extend({
  tableName: 'lifecycle',
  post: function() {
    return this.belongsTo('Card');
  }
});

module.exports = db.model('Lifecycle', Lifecycle);