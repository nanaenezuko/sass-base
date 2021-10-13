function question() {
  const rs = require('readline-sync');

  var aNewNum = 30;
  var aNewNum2 = 20;

  console.log(aNewNum + aNewNum2);

  var name = rs.question('what is your name? ');

  console.log("your name is " + name);
};
