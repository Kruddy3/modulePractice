var dt = require('./controllers/module');
// console.log(dt.myDateTime('foo man choo'))
// console.log(dt.moreTest())
// dt.log('message logged ')

//trying to get dog variable from a different file. i can import {dog} from './modus.js'


//can I use fs? I remember using it in previous tutorials and such

//i think its used for different type of file manipulation
//typically json



//this works but it doesnt seem like the best approach
// console.log(dt().dog)

//cat is a local that doesnt get returned so no access
// console.log(dt().cat)


//the function dt 2nd array position function call
// console.log(dt()[1]())

//~~~~~~~~~~~~~~~~~~~~~
//getting this data from
// module.exports = function(config){
//
//   var isPrivate = {};
//   var isPublic = {};
//
//   function dog() {
//     return 'doggo'
//   }
//   function cat() {
//     return 'catto'
//   }
//   return [dog,cat];
// };



console.log(dt.dog('dog'))
console.log(dt.cat('cat'))
