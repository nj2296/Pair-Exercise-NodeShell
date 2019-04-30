process.stdout.write('propmt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
})

module.exports = function() {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
  })
}
