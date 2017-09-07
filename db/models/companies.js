const db = require('../');

const Company = db.Model.extend({
  tableName: 'companies',
  location: function() {
    return this.hasOne('Location');
  }
});

module.exports = db.model('Company', Company);