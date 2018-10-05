<<<<<<< HEAD

=======
const { instructors, cohorts } = require('./datasets/turing');
const { constellations, stars } = require('./datasets/astronomy');
const { cakes } = require('./datasets/cakes');
>>>>>>> 7e9eda8e34f417847e33aa6ed7958495eabb24a4
const { pie } = require('./datasets/pie');
const { clubs } = require('./datasets/clubs');
const { classrooms } = require('./datasets/classrooms');
const { mods } = require('./datasets/mods');
const { bosses, sidekicks } = require('./datasets/bosses');

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 

    const result = instructors.map((instructor) => {
        let newInstructor = {
          name: instructor.name,
        };
        
        let moduleNum = cohorts.find((cohort) => {
            return cohort.module === instructor.module;
        })
        
        newInstructor.studentCount = moduleNum.studentCount;

        return newInstructor
    });

    result;

    // Annotation:
    // 1) Given: Array
    // 2) Need: Array
    // 3) Use: Map
    // The prototype method map will be used, because in this case we want to return an array of the same length, and an array that is a modified version of the existing instructors array. Upon mapping through the array we want to return a modified version of each object that is already in the array, so we will set newInstructor to an object who has a key value pair that lists each instructor and their name. Next, we need to loop through the cohorts array to find the object that matches the module of each teacher. Once the object is found, set that equal to a variable. Now that we have the matching cohort for the instructor, we set a new key value pair to the newInstructor object to the matching module's student count. Then, we resturn the newInstructor object, which modifies the original one in the instructors array. 
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    const result = cohorts.reduce((result, cohort) => {
      let instructorMod = instructors.filter((instructor) => {
        return instructor.module === cohort.module;
      })
      let numberOfTeachers = instructorMod.length;
      let studentsPerTeacher = cohort.studentCount / numberOfTeachers;
      let newCohort = `cohort${cohort.cohort}:`
      result[newCohort] = studentsPerTeacher;
      return result;
    }, {});
    return result;

    // Annotation:
    // 1) Given: Array
    // 2) Need: Object
    // 3) Use: Reduce
    // We are given an array, and need to ultimately get an object, so we will use the reduce prototype on the cohorts array. In order to get the number of teachers per mod, we filter through the instructors array and return an array with all of the matching objects. Then we create a new variable called numberOfTeachers and assign it to the instructorMod array length. We create a new variable called students per teacher, and assign that to the calculation of the studentCount divided by the number of teachers that teach the mod. Now that we have the number of students per teacher, we create a new variable called newCohort and assign it to  cohort and the value of cohorts.cohort. Now we need to set the keys and values, so we use bracket notation since the key changes and we assign the key to a value of studentsPerTeacher. Once the key vlue pairs are set, we return the result which is our new object.
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // { 
    //   Leta: [2, 4],
    //   Nathaniel: [2],
    //   Robbie: [4],
    //   Pam: [2, 4]
    // }

    const result = instructors.reduce((acc, instructor) => {
      let name = instructor.name
      acc[name] = [];
      instructor.teaches.forEach((teach) => {
        cohorts.forEach((cohort) => {
          cohort.curriculum.forEach((lesson) => {
            if(teach === lesson && !acc[name].includes(cohort.module)) {
              acc[name].push(cohort.module);
            }
          })
        })
      })
      return acc
    }, {})
    return result;

    // Annotation:
    // 1) Given: Array
    // 2) Need: Object
    // 3) Use: Reduce
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = cohorts.reduce((acc, cohort) => {
        cohort.curriculum.forEach((lesson) => {
          acc[lesson] = []
          instructors.forEach((instructor) => {
            instructor.teaches.forEach((instructorLesson) => {
              if(instructorLesson === lesson) {
                acc[lesson].push(instructor.name);
              }
            })
          })
        })
      return acc
    }, {});
    return result;

    // Annotation:
    // 1) Given: Array
    // 2) Need: Object
    // 3) Use: Reduce
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    //Iterating over the mods array. Need to pull the values of the students and the instructors. Divide students by instructors. Need to return objects that contain the mod and the number of students per instructor.

    const result = mods.map((mod) => {
      return {
        mod: mod.mod,
        studentsPerInstructor: mod.students / mod.instructors }
      })
    return result;

    // Annotation:
    // 1) Given: Array
    // 2) Need: Array
    // 3) Use: Map
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter((classroom) => {
      return classroom.program === 'FE';
    })
    return result;

    // Annotation:
    // 1) Given: Array
    // 2) Need: Array
    // 3) Use: Filter
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }
    let feCounter = 0
    let beCounter = 0
    const result = classrooms.reduce((acc, classroom) => {1
      if(classroom.program === 'FE') {
        feCounter += classroom.capacity
        acc.feCapacity = feCounter
      } else {
        beCounter += classroom.capacity
        acc.beCapacity = beCounter
      }
      return acc
    }, {});
    return result;

    // Annotation:
    // 1) Given: Array
    // 2) Need: Object 
    // 3) Use: Reduce
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => {
      return a.capacity > b.capacity
    });
    return result;

    // Annotation:
    // 1) Given: Array
    // 2) Need: Array
    // 3) Use: Sort
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = Object.keys(cakes).reduce((acc, cake) => {
      let topping = cakes[cake].toppings.forEach((topping) => {
        if (!acc.includes(topping)) {
          acc.push(topping)
        }
      })
      return acc
    }, [])
    return result;

    // Annotation:
    // 1) Given: Array
    // 2) Need: Array
    // 3) Use: Reduce
  }

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = Object.keys(cakes).reduce((acc, cake) => {
      let topping = cakes[cake].toppings.forEach((topping) => {
        if(!acc[topping]) {
        acc[topping] = 1
      } else {
        acc[topping] += 1
      }
      })
      return acc
    }, {});
    return result;

    // Annotation:
    // 1) Given an array
    // 2) Give back an object
    // 3) Method - reduce

    // Pseudo Code
    // Grab all toppings from all objects
    // concat 
  },

  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'honey', inStock: 3 },
    //    { flavor: 'vanilla', inStock: 21 },
    //    ..etc
    // ]

    const result = cakes.map((cake) => {
        let newCake = {
            flavor: cake.cakeFlavor,
            inStock: cake.instock
        }
    });
    return result;

    // Annotation:
    // 1) Given an array
    // 2) Want an array
    // 3) Use map
  },

  totalInventory() {
    // Return the total amout of cakes in stock e.g.
    // 59

    //Pseudo
    //Grab all inStock values;
    //Add all values;
    const result = cakes.reduce((result, cake) => {
        result += cake.inStock;
        return result;
    }, 0);
    

    // Annotation:
    // 1) Data set given: Array;
    // 2) Want a single value back
    // 3) Use reduce
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock

    const result = cakes.filter((currentCake) => {
        return currentCake.inStock;
    })

    return result;
  }

  // I am receiveing an array of cakes, and I want a subset of that array, so I am going to reach for filter. My filter callback will return only the cakes who have an instock value.
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------







// DATASET: pie from ./datasets/pie
const piePrompts = {
  howManyIngredients() {
    // The bakery needs to make more rhubarb pies in order to meet the
    // desiredInventoryCount. Programmatically determine how many more pies
    // need to be made, and return an object of the total number of ingredients we need
    // we need to buy in order to make the remaining pies. e.g.:
    // {
    //   cinnamon: 50,
    //   sugar: 100
    // }

    //Pseudo-code
    //Get cinnamon and sugar and place as keys => 
    //Get values of cinamon and sugar
    //Multiply cinnamon and sugar values by
    const neededPies = pie.desiredInventoryCount - pie.inventoryCount
    const result = Object.keys(pie.ingredients).reduce((acc, ingredient) => {
      acc[ingredient] = pie.ingredients[ingredient] * neededPies
      return acc
    }, {});
    return result;

    // Annotation:
    // 1) Given: Object
    // 2) Need: Object
    // 3) Use: Reduce

  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
membersBelongingToClubs() {
    
    const result = clubs.reduce((obj, club) => {
        club.members.forEach(member => {
          if (!obj[member]) {
            obj[member] = clubs.filter((club) => {
              return club.members.indexOf(member) > -1;
          }).map((club) => {
              return club.club;
            })
          }
        })
        return obj
  }, {});
  return result

    // Annotation:
    // 1) Given: Array
    // 2) Need: Object
    // 3) Use: Reduce
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

 const result = Object.keys(bosses).map((boss) => {
  return {
    bossName: bosses[boss].name,
    sidekickLoyalty: sidekicks.reduce((acc, sidekick) => {
      if(bosses[boss].name === sidekick.boss) {
        acc += sidekick.loyaltyToBoss
      }
      return acc
    }, 0)
  }
})

    // Annotation:
    // Write your annotation here as a comment
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // [ 'Canis Major',
    //   'Carina',
    //   'Boötes',
    //   'Lyra',
    //   'Auriga',
    //   'Orion',
    //   'Canis Minor',
    //   'Eridanus',
    //   'Orion',
    //   'Centaurus' ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};



module.exports = {
  turingPrompts,
  piePrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts
};