// Challenge https://leetcode.com/problems/minimum-processing-time/description/
// Solution Reference https://leetcode.com/problems/minimum-processing-time/solutions/4144452/beats-99-80-easy-and-detailed-explanation-with-solution-efficient-code/

/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function(processorTime, tasks) {
    processorTime.sort((a, b) => a - b)
    tasks.sort((a, b) => b - a)

    let processorIndex = 0
    let answer = 0

    for (const processingTime of processorTime) {
        let currentMax = 0
        let taskCount = 0

        while (processorIndex < tasks.length && taskCount < 4) {
            currentMax = Math.max(currentMax, processingTime + tasks[processorIndex])
            processorIndex++
            taskCount++
        }

        answer = Math.max(answer, currentMax)
    }

    return answer
};