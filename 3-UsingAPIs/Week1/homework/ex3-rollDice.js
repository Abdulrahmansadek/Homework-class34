'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-3-roll-a-dice

- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollDice()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDice()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/

function rollDice() {
  return new Promise((resolve, reject) => {
    // Compute a random number of rolls (3-10) that the dice MUST complete
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Dice scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      // Compute a random dice value for the current roll
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Dice value is now: ${value}`);

      // Use callback to notify that the dice rolled off the table after 6 rolls
      if (roll > 6) {
        reject(new Error('Oops... Dice rolled off the table.'));
      }

      // Use callback to communicate the final dice value once finished rolling
      if (roll === randomRollsToDo) {
        resolve(value);
      }

      // Schedule the next roll todo until no more rolls to do
      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };
    // Start the initial roll
    rollOnce(1);
  });
}

rollDice()
  .then((value) => console.log(`Success! Dice settled on ${value}.`))
  .catch((error) => console.log(error.message));
// ! Do not change or remove the code below
module.exports = rollDice;

/*
Explanation 
The problem doesn't occur.
In the callback function , we get an error message in the first condition '(roll>6)' but the set timeout doesn't stop
and it continue executing until the condition will be false, 
witch is in our case (roll < randomRollsToDo)
so the last call of rollDice() is when (roll === randomRollsToDo) which is also the condition of the success callback function.
and then we get  success message after an error message when the randomRollsToDo's is more than 6.
we can fix that with adding 'return' 
if (roll > 6) {
    callback(new Error('Oops... Dice rolled off the table.'));
      return;
    }

*/
