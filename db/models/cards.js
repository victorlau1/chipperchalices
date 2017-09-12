const db = require('../');

const Card = db.Model.extend({
  tableName: 'cards',
  lifecycle: function() {
    return this.hasMany('Lifecycle');
  },
  company: function() {
    return this.belongsTo('Company');
  }
});

module.exports = db.model('Card', Card);

