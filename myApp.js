require('dotenv').config();

require('mongodb');

const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connect to MongoDB..'))
.catch(err => console.error('Could not connect to MongoDB..', err)); 

var Schema = mongoose.Schema;

var personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
}
);

// console.log(personSchema)

var Person = mongoose.model("Person", personSchema);

// console.log(Person)

let ijabor = new Person({
  name: "Ijabor",
  age: 32,
  favoriteFoods: ["rice", "beans"]
}
);

// let Person;

const createAndSavePerson = (done) => {

  let person = new Person({
    name: "Ijabor",
    age: 32,
    favoriteFoods: ["rice", "beans"]
  }
  );
  person.save((error, data) => {

    if (error) {
      console.log(error);
    }else{
      done(null, data)
    }
    
  })
    
};

var arrayOfPeople = [
  {name: "Emma", age: 25, favoriteFoods: ["beans and rice"]},
  {name: "Ijabor", age: 35, favoriteFoods: ["rice and plantain"]},
  {name: "Lucky", age: 43, favoriteFoods: ["Fish"]}
];

var createManyPeople = function(arrayOfPeople, done) {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

var findPeopleByName = function(personName, done) {
  Person.find({name: personName}, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
