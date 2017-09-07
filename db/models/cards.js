const db = require('../');

const Card = db.Model.extend({
  tableName: 'cards',
  lifecycle: function() {
    return this.hasMany(Lifecycle);
  }
});

const Location = db.Model.extend({
  tableName: 'location',
  company: function() {
    return this.belongsTo(Company);
  }
});

const Company = db.Model.extend({
  tableName: 'companies',
  location: function() {
    return this.hasOne(Location);
  }
});

const Lifecycle = db.Model.extend({
  tableName: 'lifecycle',
  post: function() {
    return this.belongsTo(Card);
  }
});

// const News = db.Model.extend({
//   tableName: 'news',
// });

// const Interaction = db.Model.extend({
//   tableName: 'interactions',
// });
module.exports = {
  Card: db.model('Card', Card),
  Location: db.model('Location', Location),
  Company: db.model('Company', Company),
  Lifecycle: db.model('Lifecycle', Lifecycle)
};

