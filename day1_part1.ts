import * as fs from 'fs';

function main() {
	const rotationsText = fs.readFileSync("inputs/day1.txt").toString("utf8");
  const rotations = rotationsText.split("\n");

  let dialPointsAt = 50;
  let password = 0;

  for (const rotation of rotations) {
    switch(rotation[0]) {
      case 'R':
        dialPointsAt += +rotation.substr(1)
        break;
      case "L":
        dialPointsAt -= +rotation.substr(1)
        break;
    }

    if (dialPointsAt % 100 === 0) {
      password++;
    }
  }

  console.log("Password is: " + password)
}

main();
