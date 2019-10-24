import test from "ava";
import { shuffle } from "./shuffle";

const generateRandomArray = (length: number) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
};

test("returns an array with the same amount of items as the input", t => {
  const originalArray = generateRandomArray(10);
  const shuffled = shuffle(originalArray);
  t.is(originalArray.length, shuffled.length);

  const array2 = generateRandomArray(100000);
  const shuffled2 = shuffle(array2);
  t.is(array2.length, shuffled2.length);
});

test("does not modify the original array (immutable)", t => {
  const originalArray = [1, 2, 3, 4, 5];
  const origCopy = [...originalArray];
  shuffle(originalArray);

  origCopy.forEach((c, i) => t.is(originalArray[i], c));
});

test("does not manipulate the data in the array items", t => {
  const arr = [];

  // instead of random data, we get an array which has a unique value in each of them, so that we can ensure that
  // the shuffle function does not manipulate anything
  for (let i = 0; i < 100; i += 1) {
    arr.push(i);
  }

  const shuffled = shuffle(arr);

  const vals = shuffled.every(f => arr.includes(f));

  t.truthy(vals);
});

test("shuffling multiple times returns different results", t => {
  const unshuffledArray = generateRandomArray(1000);

  const shuffle1 = shuffle(unshuffledArray);
  const shuffle2 = shuffle(shuffle1);

  t.notDeepEqual(shuffle1, shuffle2);
});
