import * as fs from "fs";

function main() {
  const rotationsText = fs.readFileSync("inputs/day1.txt").toString("utf8");
  const rotations = rotationsText.split("\n");

  let dialPointsAt = 50;
  let password = 0;

  for (const rotation of rotations) {
    if (rotation.lengt < 2) {
      continue;
    }

    const amountRotation = Math.abs(+rotation.substr(1));
    const multiplier = rotation[0] === "R" ? 1 : -1;
    let newDialPointsAt = dialPointsAt;

    let oldPassword = password;
    let oldDialPointsAt = dialPointsAt;

    // Ugly brute force
    for (let i = 0; i < amountRotation; i++) {
      newDialPointsAt = newDialPointsAt + 1 * multiplier;
      if (newDialPointsAt < 0) {
        newDialPointsAt = 100 + newDialPointsAt;
      } else if (newDialPointsAt >= 100) {
        newDialPointsAt -= 100;
      }

      if (newDialPointsAt === 0) {
        password++;
      }
    }
    dialPointsAt = newDialPointsAt;

    console.log(
      `From ${oldDialPointsAt} with ${amountRotation * multiplier} to ${dialPointsAt} with ${password - oldPassword} zeroes`,
    );
  }

  console.log("Password is: " + password);
}

main();
