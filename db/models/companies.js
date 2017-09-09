const db = require('../');

const Company = db.Model.extend({
  tableName: 'companies',
  location: function() {
    return this.hasOne('Location');
  },
  card: function() {
    return this.hasMany('Card');
  }
});

module.exports = db.model('Company', Company);