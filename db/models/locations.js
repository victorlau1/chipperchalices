const db = require('../');

const Location = db.Model.extend({
  tableName: 'location',
  company: function() {
    return this.belongsTo('Company');
  }
});

module.exports = db.model('Location', Location);