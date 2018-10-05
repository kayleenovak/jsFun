const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    }

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification
        this.fly = fly;
      } 
    }

    const ship = new SpaceProbe('voyager', 'classy');

 
    // What is the value of `this` when we call ship.fly()?
    const result = 'window';
    return result;

    // Annotation:
    // The value of this is the window, because in ES6 functions this is defined when the code is declared, not when the function is invoked. If this were an ES5 function, this would refer to ship since the method is being called on ship and this is not being defined until the function is run.
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }
    
    // What is the value of `this` when we call fn()?
    const result = 'window';
    return result;

    // Annotation:
    // The value of this is the window, because there is no object for it to refer to. This is being called inside of a function, but the function is not being invoked as a method on an object.
  },

  exerciseC() {
    const car = {
      make: "Tesla",
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById("btn");
    el.addEventListener("click", car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = 'car';
    return result;

    // Annotation: 
    // The value of 'this' is car, because on click of an element the getInfo function is being invoked as a method on car.
  },

  exerciseD() {
    const dog = {
      breed: "Chihuahua",
      getBreed: function(){
        const innerFunction = function() {
        console.log(this.breed);
      };
    
      return innerFunction();
      }
    };


    // What is the value of `this` when we call dog.getBreed()?
    const result = 'dog'; // Actual result is the window. With nested functions, this does not stay bound within the object. 
    return result;

    // Annotation: 
    // 'This' will reference the dog object, because the getBreed function is being called as a method on the dog object. 
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    }


    // What is the value of `this` when we call fn()?
    const result = 'window';
    return result;

    // Annotation: 
    // The value of 'this' is the global window, because the function is in the globl scope. This is pointing to the object of where this exists, which is in the window. 
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'instance of Hero';
    return result;

    // Annotation: 
    // This refers to the new instance of storm, because identifyHero is a method that is called on the Hero object, and in this case the new instance of the Hero object. 
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
    }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`)
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = 'instance of Game';
    return result;

    // Annotation: 
    // This refers to the instance of the class Game, because restart is a method that is being called on the game object.
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        this.arrowFunction = () => { return this };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'obj';
    return result;

    // Annotation: 
    // The value of 'this' is the obj variable, because the method 'method' is being invoked on the object 'obj'. When that method is invoked, it is setting the key arrow function to an anonymous function that will return 'this'. In ES6 'this' is defined upon declaration
  },

  exerciseI() {  
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets)

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = poets;
    return result;

    // Annotation: 
    // 'this' refers to poets, because with the second argument you bind what this is going to refer to within the array prototype methods.
  },

  exerciseJ() {
    $('#btn').on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'btn';
    return result;

    // Annotation: 
    // The value of 'this' is the btn element, because the anonymous function when invoked is being invoked as a method on the button. 
  }

};

module.exports = context;