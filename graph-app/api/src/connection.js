// connection.js
const _ = require('lodash');
var neo4j = require('neo4j-driver');
var driver = neo4j.driver('neo4j://neo4j:7687', neo4j.auth.basic('neo4j', 'newPassword'))

const connectDb = () => {
  return driver.session()
}

const getAll = function(session) {
  return session.readTransaction(txc =>
      txc.run('MATCH (person:Person) RETURN person')
    ).then(_manyGenres);
};


const _manyPersons = function (result) {
  return result.records.map(r => new Person(r.get('person')));
};



module.exports = connectDb;