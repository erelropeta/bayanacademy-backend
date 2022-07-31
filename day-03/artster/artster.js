const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const figlet = require('figlet');
const colors = require('colors');

if (argv.fonts === true) {
  figlet.fonts(function (err, fonts) {
    if (err) {
      console.log('something went wrong...');
      console.dir(err);
      return;
    }
    console.dir(fonts);
  });

  return;
}

if (!argv.text) {
  argv.text = 'Hello, World!';
}

figlet.text(
  argv.text,
  {
    font: argv.font,
  },
  function (err, data) {
    if (err) {
      console.log('Ooops. Something went wrong :/');
      console.dir(err);
      return;
    }

    console.log(data.rainbow);
  }
);
