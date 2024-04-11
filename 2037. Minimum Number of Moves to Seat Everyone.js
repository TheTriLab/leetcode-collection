// Challenge https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/description/

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats.sort((a, b) => a - b)
    students.sort((a, b) => a - b)
    let move = 0

    for (let i = 0; i < students.length; i++) {
        move += Math.abs(students[i] - seats[i])
    }

    return move
};