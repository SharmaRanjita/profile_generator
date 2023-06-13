const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  console.log(`My name is: ${name}`);

  rl.question("What's an activity you like doing?", (activity) => {
    console.log(`I enjoy doing ${activity}.`);

    rl.question("What do you listen to while doing that?", (music) => {
      console.log(`I listen to ${music} while ${activity}.`);

      rl.question("Which meal is your favourite (e.g., dinner, brunch, etc.)?", (meal) => {
        console.log(`My favorite meal is ${meal}.`);

        rl.question("What's your favourite thing to eat for that meal?", (food) => {
          console.log(`I love eating ${food} for ${meal}.`);

          rl.question("Which sport is your absolute favourite?", (sport) => {
            console.log(`My absolute favorite sport is ${sport}.`);

            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superpower) => {
              console.log(`My superpower is ${superpower}. I am amazing at ${superpower}!`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
