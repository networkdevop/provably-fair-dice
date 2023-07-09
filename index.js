const readline = require("readline");
const gen = require("random-seed");
const chalk = require("chalk");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function promptUser(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  console.log(
    chalk.red(
      '\u26A0' + " Please carefully copy all" + chalk.blue.bold(' seed value ') + "any mistakes may result in false data!")
  );
  const seedArg = await promptUser("Please enter seed: ");
  const rollerIdArg = await promptUser("Please enter RollerId: ");
  const timeArg = await promptUser("Please enter Time: ");
  const betIdArg = await promptUser("Please enter BetId: ");
  const seed = seedArg + rollerIdArg + timeArg + betIdArg;
  // generating random value generator with seed value.
  var rand = new gen(seed);
  // generating diceValue.
  const diceValue = rand(64880);

  // print
  console.log(chalk.green.underline.bold(`Result`));
  console.log(chalk.magenta(`- Entered seed: ${seedArg}`))
  console.log(chalk.magenta(`- Entered RollerId: ${rollerIdArg}`))
  console.log(chalk.magenta(`- Entered Time: ${timeArg}`))
  console.log(chalk.magenta(`- Entered BetId: ${betIdArg}`))
  console.log(chalk.green.underline.bold(`Generated Dice Value: ${diceValue}`))
  rl.close();
}

main().catch((error) => {
  console.error(error);
});
