const pwd = require('./pwd');
const ls = require('./ls')

process.stdout.write('propmt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  process.stdout.write('You types: ' + cmd);
  process.stdout.write('\nprompt > ');
})

// // Print current working directory using pwd command:
// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();

//   process.stdout.write(process.cwd());
//   process.stdout.write('\nprompt > ');
// })

pwd();
ls();
