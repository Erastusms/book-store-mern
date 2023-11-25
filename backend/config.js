const PORT = 5555;

const mongoDBURL =
  'mongodb://admin:admin@ac-2jcfvlj-shard-00-00.nemoveh.mongodb.net:27017,ac-2jcfvlj-shard-00-01.nemoveh.mongodb.net:27017,ac-2jcfvlj-shard-00-02.nemoveh.mongodb.net:27017/books-collection?ssl=true&replicaSet=atlas-2bzsn4-shard-0&authSource=admin&retryWrites=true&w=majority';

// Please create a free database for yourself.
// This database will be deleted after tutorial

module.exports = {
  PORT, mongoDBURL
}
