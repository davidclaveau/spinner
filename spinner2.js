const spinString = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let time = 100;
for (const animation of spinString) {
  time += 200;
  setTimeout(() => {
    process.stdout.write(`\r${animation}   `);
  }, time);
};