/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    return Math.max(...sentences.map((sentence, i) => (sentences[i].split(" ").length)))
};
