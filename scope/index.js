const scope = {
  exerciseA() {
    let personA = 'Paul'
    let personB = 'Ben' //CardiB
    let personC = 'Tom' //Paul -> 'CardiB'

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }
    }

      function beautifyPerson() {
        console.log('A: ' + personB) //console.log 'Ben'
        
        if (personB.includes('B')) {
          personB = person; //personB = 'CardiB'
          personC = personB; //personC = 'CardiB'
          console.log('B: ' + personC) // 'CardiB'
        }
      }

      personC = personA; //personC now is assigned to 'Paul'

    console.log('C: ' + personB); // Will console.log 'Ben'

    changePerson();

    console.log('D: ' + personC); // 'CardiB'

    const result = [
    {'C': 'Ben'}, 
    {'A': 'Ben'}, 
    {'B': 'CardiB'},
    {'D': 'CardiB'}
    ];

    return result;
  },

    // Annotation:
    // On line 3 we are declaring a variable called personA and assigning it to 'Paul', on line 4 we are declaring a variable called personB and assigining it to 'Ben', and on line 5 we are declaring a variable called personC and assigning it to 'Tom'. On line 7 we are declaring a function called changePerson. Since changePerson is not being invoked, we jump down to line 13 where we are declaring a function called beautifyPerson. Since beautifyPerson is not being invoked, we jump down to line 23 where we are reassigining the variable personC to the value of personA, which is 'Paul'. On line 25, we are console logging personB, which will log 'Ben'. On line 27 we are invoking the changePerson function. The change person starts with an if statement on line 8. If personA is strictly equal to 'Paul' then reassign person to 'CardiB' and invoke the beautifyPerson function. The beautifyPerson function, on line 14, console logs personB, which logs 'Ben'. If personB, includes 'B', which it does, then reassign personB to the value of person, which is 'CardiB', reassign personC to the value of personB, which is 'CardiB', and then console log personC, which will log 'CardiB'. The beautifyPerson function is now complete. We jump down to line 29 where we console log person C, which will log 'CardiB'

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75; // => 64

      if (number === 75) {
        let number = 28;
      }

      console.log('A: ' + number) //75 - 1st

      function newNumber() {
        number = 64;

        console.log('B: ' + number) // 64 - 2nd
      }

      newNumber();

      console.log('C: ' + number) // 64 - 3rd
    }

    numberFunction();

    console.log('D: ' + number) // 30 - 4th

    const result = [
    {'A': 75}, 
    {'B': 64}, 
    {'C': 64},
    {'D': 30}
    ];
    return result;

    // Annotation:
    // On line 46 we are declaring a variable called number and assigining it to a value of 30. On line 48 we are declaring a function called numberFunction. Since the function has not bee invoked, we jump down to line 68 where it invokes the numberFunction. We jump back up to line 49. Within the numberFunction we re declaring a variable called number and assigining it to a value of 75. On line 51, if the number is strictly equal to 75, then declare a new function called number and assign it to a value of 28. This is the end of the if statement. We jump to line 55, wehere we console.log the number value, which is 75. Then we declare a new function called newNumber. Since the function has not been invoked we jump to line 63 which invokes the newNumber function. Inside that function we are reassiging the number variable(The number variable declared inside the numberFunction) to a value of 64, and then console.loging the value of number, which has a value of 64. The newNumber function is now complete. Then we console.log the value of number inside the numberFunction, which holds a value of 64. The numberFunction function is now complete. Now we are console logging the value of number declared at the top of the code which is 30.
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo'; // -> 'Hey'

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      console.log('A: ' + greeting) // 'Yo'

      function newPhrase() {
        greeting = 'Hey';

        console.log('B: ' + greeting) // 'Hey'
      }

      newPhrase();

      console.log('C: ' + greeting) // 'Hey'
    }

    greetingFunction();

    console.log('D: ' + greeting) // 'Hello'

    const result = [
    {'A': 'Yo'}, 
    {'B': 'Hey'}, 
    {'C': 'Hey'},
    {'D': 'Hello'}
    ];
    return result;

    // Annotation:
    // On line 85 we are declaring a variable called greeting and assigining it to 'Hello'. On line 87 we are declaring a function called greetingFunction. Since the function has not been invoked, we jump down to line 107 where it invokes the greetingFunction. Within the greetingFunction, we declare a variable greeting and assign it to a value of 'Yo'. If greeting is strictly equal to 'Yo' then we declare a new variable called greeting and assign it to a value of 'Howdy'. The if statement is complete so we hump to line 94 where we console log the value of greeting which is 'Yo'. Still within the greetingFunction, we declare a new function called newPhrase. Since the function has not been invoked, then we jump down to line 102 where it invokes the newPhrase function. Within the newPhrase function we reassign the greeting variable that was declared within the greeting function to 'Hey'. Then we console log the value of greeting, which is 'Hey'. The newPhrase function is now complete. Then we console log greeting, which has a value of 'Hey' because the greeting is looking to the greeting variable that was defined within the greeting function which has been reassigined to 'Hey'. The greetingFunction is now complete. Then we log greeting, which will be 'Hello'. This greeting is looking to greeting declaration that was declared outside of the functions.
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi'; // => 'welcome'

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      console.log('A: ' + greeting) // 1st - 'hi'

      const newGreeting = ()  => {
        greeting = 'welcome';

        console.log('B: ' + greeting) // 2nd - 'welcome' 
      }

      newGreeting();

      console.log('C: ' + greeting) // 3rd - 'welcome'
    }

    greetingGenerator();

    console.log('D: ' + greeting) // 4th = 'howdy'

    const result = [
    {'A': 'hi'}, 
    {'B': 'welcome'}, 
    {'C': 'welcome'},
    {'D': 'howdy'}
    ];
    return result;

    // Annotation:
    // On line 124 we declare a variable called greeting and assign it to 'howdy'. On line 126 we declare an anonymous function called greetingGenerator. Since the function has not been invoked, we jump down to line 146 where we invoke greetingGenerator. In the greetingGenerator, we declare a variable called greeting and assign it to the value of 'hi'. On line 129, there is an if statement. If the greeting is strictly equal to 'hi', then declare a new variable called greeting and assign it to 'hello'. The if statement is complete. On line 133, we console log greeting which will log 'hi', because it looks to the greeting variable declared within the greetingGenerator function. Then we declare a new variable and assigin it to an anonymous function, since the function has not been invoked yet, we jump down to line 141 where it invokes the function assigned to newGreeting. Within the function, it reassigns the greeting variable to 'welcome'. It reassigns the greeting variable that is declared at the top of the greetingGenerator function. The newGreeting function is now complete. On line 143, we console log the greeting variable, which has a value of 'welcome', because it looks to the variable declared within the greetinGenerator function. The greetingGenerator function is now complete. On line 148, we console log greeting, which has a value of 'howdy'. It has a value of howdy, because it is looking to the variable that was declared globally. 
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam'; // -> 'Nathaniel'

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        console.log('A: ' + name); // 2nd 'Nathaniel'
      }

      console.log('B: ' + name) // 3rd 'Nathaniel'
    }

    console.log('C: ' + name); // 1st 'Brittany'

    sayName();

    console.log('D: ' + name) // 4th 'Brittany'

    const result = [
    {'C': 'Brittany'}, 
    {'A': 'Nathaniel'}, 
    {'B': 'Nathaniel'},
    {'D': 'Brittany'}
    ];
    return result;

    // Annotation:
    // On line 163, we are declaring a variable called name and assiging it to 'Brittany'. Online 165, we are declaring a function called say name. Since we are not invoking the function, we jump down to line 181, where we console log the value of name, which is 'Brittany'. The value is 'Brittany' because it is looking to the name variable that was declared first. on line 183, we are invoking the function. Within the sayName function we are declaring a variable and assigning it to a value of 'Pam'. On line 168, there is an if statement. If the name is strictly equal to 'Pam' then reassign the name variable to 'Nathaniel'. on line 171 we have a nested if statement. If the length of the name variable is greater than 0, then declare a new variable and assign it to 'Brittany'. The nested if statement is complete. Console log the name variable, which has a value of 'Nathaniel', because it is looking to the name varible that was declared within the sayName function, that variable was reassigned to 'Nathaniel'. The if statement is complete. On line 178, we console log the name variable which will log 'Nathaniel'. The sayName function is now complete. On line 185 we console log the value of name, which will log 'Brittany', because it is looking to the variable that was declared on line 163.
  },

  exerciseF() {
    var dog = 'Spot'; // -> 'Biscuit'

    function petDog() {
      console.log('A: ' + dog) // 1st 'Spot'

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        console.log('B: ' + dog) // 2nd 'Spot'

        dog = 'Biscuit';

        console.log('C: ' + dog) // 3rd 'Biscuit'

      }

      rollOver();

      console.log('D: ' + dog) // 4th 'Biscuit'
    }

    petDog();

    console.log('E: ' + dog) // 5th 'Biscuit'

    const result = [
    {'A': 'Spot'}, 
    {'B': 'Spot'}, 
    {'C': 'Biscuit'},
    {'D': 'Biscuit'},
    {'E': 'Biscuit'}
    ];
    return result;

    // Annotation:
    // On line 200 we are declaring a variable called dog and assigning it to 'Spot'. On line 202, we are declaring a function called petDog. Since we are not invoking the petDog function, we jump down to line 223. We invoke the petDog function. Within the petDog function, we console log dog, which will log 'Spot', because it is looking to the variable declared on line 200. On line 205, there is an if statement. If dog is strictly equal to 'Spot' then delcare a new variable called dog and assign it to a value of 'Fluffy'. The if statement is complete. On line 209, we declare a new function called rollOver. Since the function is not being invoked, we jump down to line 218. We invoke the rollOver function. Within the rollOver function, we console log the value of dog, which will log 'Spot', because it refers to the variable dog that is declared on line 200.  On line 212, we reassign the dog variable on line 200 to the value of 'Biscuit'. On line 214, we console log dog, which will log a value of 'Biscuit', because it os looking to the dog variable declared on line 200, which was reassigned to 'Biscuit'. On line 220 we console log dog, which will log a value of 'Biscuit', because it is looking to the variable declared on line 200. The petDog function in complete. On line 225, we console log the dog variable, which will log, 'Bicuit', because it is looking to the variable declared on line 200. 
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          console.log('A: ' + fruit) // 1st 'mango'
          const fruit = 'strawberry';
        }

        console.log('B: ' + fruit) // 2nd 'mango'
      }

      console.log('C: ' + fruit) // 3rd 'apple'
    }

    eatFruit()

    console.log('D: ' + fruit) // 4th 'apple'

    const result = [
    {'A': 'mango'}, 
    {'B': 'mango'}, 
    {'C': 'apple'},
    {'D': 'apple'}
    ];
    return result;

    // Annotation:
    // On line 241 we declare a variable called fruit and assign it to 'apple'. On line 243 we declare a function called eatFruit. Because eatFruit has not been invoked, we jump down to line 259, where we invoke the eatFruit function. Within the eatFruit function, we have an if statement. If the variable fruit is not equal to 'kiwi' then declare a new variable called fruit and assign it to 'mango'. On line 248 we have an if statement. If the fruit variable exists. then console log the value of fruit, which will log 'mango', because as it looks up the chain it refers to the fruit variable that was declared within the first if statement on line 246. On line 250, we declare a new variable called 'strawberry'. The if statement is complete. Online 253 we console log fruit, which will log 'mango', because it is refering to the variable declared within its function. The if statement is complete. On line 256, we console log fruit, which will log 'apple', because it looks up the chain through its parent elements until it finds a variable. In this case, it refers to the fruit variable declared on line 241. The eatFruit function is now complete. On line 261, we console log the fruit variable, which will log 'apple', because it is refering to the variable declared on line 241. 
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      console.log('A: ' + num) // 1st - 4

      if (num < 5) {
        const num = 9;

        fn2(num)

        const newNum = num;

        // Log B: newNum
      }

      newNum = num;

      // Log C: newNum
    }

    const fn2 = function(num){
      // Log D: num

      num = num + 1;

      // Log E: num
    }

    fn1();

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // On line 276, we are declaring a variable and assigning it to 6. On line 278 we are declaring a variable fn1 and assigning it to an anonymous function. Since that function has not been invoked, we will jump down to line 298. We declare a variable and assign it to an anonymous function. That function is not being invoked, so we will jump down to line 306, where we invoke the function assigned to the variable fn1. Within the anonymous function we declare a new variable called num and assign it to the number 4. Console log the num variable, which will log 4, because it looks up the chain and finds a variable called num declared within the same function. On line 283, there is an if statement. If the num variable isless than 5 then declare a new variable called num and assign it to the number 9. Invoke the function assigned to the variable fn2 and pass in the argument num. The fn2 function reassigns the num variable to num plus 1. 
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25; // hunger -> 75 -> 55
      console.log('A: ' + hunger) // 1st 75
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        console.log('B: ' + hunger) // 2nd 0
      }

      console.log('C: ' + hunger) // 3rd 75
    };

    eatSnack();

    hunger += 5; // hunger reassigned to 80
    console.log('D: ' + hunger) // 4th 80

    eatSnack(); 
    console.log('E: ' + hunger) // 5th 55

    const result = [
    {'A': 75}, 
    {'B': 0}, 
    {'C': 75},
    {'D': 80},
    {'A': 55}, 
    {'B': 0}, 
    {'C': 55},
    {'E': 55}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich'; //reassigned to 'not a mediocre sandwich'

    console.log('A: ' + sandwich) // 1st 'ketchup sandwich'

    const addChipotle = () => {
      console.log('B: ' + toppings) // 3rd undefined
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      console.log('C: ' + sandwich) // 4th 'not a mediocre sandwich'
    }

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      console.log('D: ' + cheeseTopping) // 2nd 'gouda'

      const shesTheManReference = () => {
        amandaBynes = "National Treasure"
      }

      shesTheManReference();
    }

    cheeseTopping = 'kraft'; 
    addCheese();

    addChipotle();
    console.log('E: ' + sandwich) // 5th 'not a mediocre sandwich'
    console.log('F: ' + amandaBynes) // 6th 'National Treasure'

    const result = [
    {'A': 'ketchup sandwich'}, 
    {'D': 'gouda'}, 
    {'B': undefined},
    {'C': 'not a mediocre sandwich'},
    {'E': 'not a mediocre sandwich'}, 
    {'F': 'National Treasure'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
        if (num > 5) {
           num = 7;
        }
        console.log('A: ' + num)
    }

    foo();

    console.log('B: ' + num)

    const result = [
    {'A': 7}, 
    {'B': 7}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100; // reassigned to 90

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        console.log('A: ' + grade) // 1st 95
      }

      addPoints();

      console.log('B: ' + grade) // 2nd 90
    }

    losePoints();

    console.log('C: ' + grade) // 3rd 90

    const result = [
    {'A': 95}, 
    {'B': 90}, 
    {'C': 90}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      console.log('A: ' + num) // 1st 5
      num = 6;
      console.log('B: ' + num) // 2nd 6
    }

    function second() {
      console.log('C: ' + num) // undefined
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = [
    {'A': 5}, 
    {'B': 6}, 
    {'C': undefined}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      console.log('A: ' + instructor) // 2nd 'Pam'

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      console.log('B: ' + instructor) // 3rd 'Pam'

      function rename() {
        instructor = 'Louisa';
        console.log('C: ' + instructor) // 4th 'Louisa'
      }

      rename();

      console.log('D: ' + instructor) // 5th 'Louisa'

    }

    console.log('E: ' + instructor) // 1st 'Pam'

    changeInstructor();

    console.log('F: ' + instructor) // 6th 'Louisa'

    const result = [
    {'E': 'Pam'}, 
    {'A': 'Pam'}, 
    {'B': 'Pam'},
    {'C': 'Louisa'},
    {'D': 'Louisa'}, 
    {'F': 'Louisa'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = [
    {'B': 'flipflop'}, 
    {'A': 'undefined'}, 
    {'C': 'flipflop'}
    ];
    return result;

    // Annotation:
    // On line 469 we declare a global variable named shoe, and assign it to 'flipflip'. Then we declare a global function putOnShoe. Then we skip dow to line 469 because it hasn't been invoked yet. On line 469, we log the value of shoe, which is 'flipflop' at this point in time. Then we go ahead and invoke out putOnShoe function, and when we try to log shoe within our function, we get undefine because our shoe declaration on line 473 is hoisted to the top of that function scope. Once we'ev finished executing putOnShoe, we go back down to line 478 and log show again which will give us flipflop.
  }
}

module.exports = scope;