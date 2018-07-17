const chores = [
  {
    "_id": "5b4cfa6caf3a409baa817a19",
    "name": "sweep"
  },
  {
    "_id": "5b4cfa6cca66b0cdfe56a81e",
    "name": "scoop litter box"
  },
  {
    "_id": "5b4cfa6c516b30f96d0b7526",
    "name": "mop"
  },
  {
    "_id": "5b4cfa6ca17fdb1623324797",
    "name": "make to do list"
  },
  {
    "_id": "5b4cfa6ca45eef31bf64e010",
    "name": "graduate from hack reactor"
  },
  {
    "_id": "5b4cfa6cbe9063ec9958453d",
    "name": "eat ice cream"
  },
  {
    "_id": "5b4cfa6ccbd25ec04ab2fc77",
    "name": "eat franklin's bbq"
  },
  {
    "_id": "5b4cfa6c18f69be0f1b28b9d",
    "name": "get infinity gauntlet"
  },
  {
    "_id": "5b4cfa6c2f0e0253812203d8",
    "name": "code app"
  },
  {
    "_id": "5b4cfa6c363750b4f87a739f",
    "name": "do a backflip"
  }
];

const users = [
  {
    "_id": "5b4cf9c0fefe80c26f6fa4b7",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "name": {
      "first": "Jill",
      "last": "Mckinney"
    },
    "company": "INVENTURE",
    "email": "jill.mckinney@inventure.org",
    "registered": "Tuesday, November 22, 2016 8:12 PM",
    "greeting": "Hello, Jill! You have 84 unfinished chores!",
    "favoriteIceCream": "vanilla"
  },
  {
    "_id": "5b4cf9c05401d27173f1d580",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "name": {
      "first": "Brandi",
      "last": "Clemons"
    },
    "company": "GINK",
    "email": "brandi.clemons@gink.name",
    "registered": "Saturday, June 20, 2015 7:51 PM",
    "greeting": "Hello, Brandi! You have 93 unfinished chores!",
    "favoriteIceCream": "cookies and cream"
  },
  {
    "_id": "5b4cf9c01f88c9ac4bd4462f",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "name": {
      "first": "Edwina",
      "last": "Hurst"
    },
    "company": "ENERFORCE",
    "email": "edwina.hurst@enerforce.biz",
    "registered": "Wednesday, February 7, 2018 10:10 PM",
    "greeting": "Hello, Edwina! You have 75 unfinished chores!",
    "favoriteIceCream": "chocolate"
  },
  {
    "_id": "5b4cf9c080891eec388d38e4",
    "guid": "45549353-df93-4e46-98f8-e8eae898a42c",
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "name": {
      "first": "Sophia",
      "last": "Little"
    },
    "company": "HALAP",
    "email": "sophia.little@halap.info",
    "registered": "Sunday, September 13, 2015 9:05 AM",
    "greeting": "Hello, Sophia! You have 33 unfinished chores!",
    "favoriteIceCream": "chocolate chip"
  },
  {
    "_id": "5b4cf9c02a74649217341b36",
    "guid": "2d7a5b9a-758b-4319-b19a-29f5786f555b",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "name": {
      "first": "Guzman",
      "last": "Travis"
    },
    "company": "ORBOID",
    "email": "guzman.travis@orboid.com",
    "registered": "Sunday, February 18, 2018 1:02 AM",
    "greeting": "Hello, Guzman! You have 105 unfinished chores!",
    "favoriteIceCream": "chocolate chip"
  }
];

module.exports.mockUsers = users;
module.exports.mockChores = chores;
