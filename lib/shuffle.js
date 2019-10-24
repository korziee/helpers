"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shuffles an array using the Fisher-Yates shuffle algorithm
 *
 * @see https://bost.ocks.org/mike/shuffle/ for more information
 */
exports.shuffle = (arr) => {
    // take a copy to stay immutable
    const arrayToShuffle = [...arr];
    let elementsLeftToShuffle = arrayToShuffle.length;
    // While there remain elements to shuffle…
    while (elementsLeftToShuffle) {
        // Pick a remaining element…
        const elementToShuffle = Math.floor(Math.random() * elementsLeftToShuffle);
        // subtract so that we don't put the copy in the same place
        elementsLeftToShuffle -= 1;
        // And swap it with the current element.
        const tempVal1 = arrayToShuffle[elementToShuffle];
        arrayToShuffle[elementsLeftToShuffle] = arrayToShuffle[elementToShuffle];
        arrayToShuffle[elementToShuffle] = tempVal1;
    }
    return arrayToShuffle;
};
//# sourceMappingURL=shuffle.js.map