// Challenge https://leetcode.com/problems/long-pressed-name/description/
// Solution Reference https://leetcode.com/problems/long-pressed-name/solutions/4223904/925-long-pressed-name/

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let namePointer = 0;
    let typedPointer = 0;

    if (typed.length < name.length) return false

    while (typedPointer < typed.length) {
        if (name[namePointer] === typed[typedPointer]) {
            namePointer += 1;
            typedPointer += 1;
        } else if (name[namePointer - 1] === typed[typedPointer]) {
            typedPointer += 1;
        } else {
            return false
        }
    }

    return name.length === namePointer;
};