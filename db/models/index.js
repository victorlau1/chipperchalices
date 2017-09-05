module.exports.Auth = require('./auths');
module.exports.Profile = require('./profiles');
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
  tableName: 'lifecycles',
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

module.exports = db.model('Card', Card);
module.exports = db.model('Location', Location);
module.exports = db.model('Company', Company);
module.exports = db.model('Lifecycle', Lifecycle);
// module.exports = db.model('News', News);
// module.exports = db.model('Interaction', Interaction);


