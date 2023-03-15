const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // If Control + C pressed exits the programm
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = setupInput;