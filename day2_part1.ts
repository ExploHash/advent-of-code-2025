import * as fs from 'fs';

function findAllEvens(min: number, max: number) {
  const all: number[] = [];

  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      all.push(i);
    }
  }

  return all;
}

function findAllDuplicates(start: string, end: string) {
  const duplicates: number[] = [];
  const startNumber = +start.substring(0, start.length / 2)
  const endNumber = +end.substring(0, end.length / 2)

  for (let currentNumber = startNumber; currentNumber <= endNumber; currentNumber++) {
    const duplicate = +`${currentNumber}${currentNumber}`;
    if (duplicate >= +start && duplicate <= +end) {
      duplicates.push(duplicate);
    }
  }

  return duplicates;
}


function main() {
  const input = fs.readFileSync("inputs/day2.txt").toString("utf8");
  const sequences = input.split(",").map(seq => seq.trim())
  const duplicates = new Set<number>();

  for (const sequence of sequences) {
    const [start, end] = sequence.split("-");
    const startLength = start.length;
    const endLength = end.length;
    const evens = findAllEvens(startLength, endLength);

    for(const [index, even] of Object.entries(evens)) {
      const startNumber = evens[+index - 1] != null || even !== startLength ? Math.pow(10, even - 1) : start;
      const endNumber = evens[+index + 1] != null || (even != endLength) ? Math.pow(10, even) - 1 : end;

      const foundDuplicates = findAllDuplicates(`${startNumber}`, `${endNumber}`);
      for (const foundDuplicate of foundDuplicates) {
        if (!duplicates.has(foundDuplicate)) {
          duplicates.add(foundDuplicate)
        }
      }
    }
  }

  // Sum all duplicates
  const sum = Array.from(duplicates).reduce((acc, val) => acc + val);
  console.log(sum);
}

main()
