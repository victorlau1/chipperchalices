const db = require('../');


const Card = db.Model.extend({
  tableName: 'cards',
  lifecycle: function() {
    return this.hasMany('Lifecycle');
  }
});

module.exports = db.model('Card', Card);

