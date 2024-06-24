// Challenge https://leetcode.com/problems/destroying-asteroids/description/
// Solution Reference https://leetcode.com/problems/destroying-asteroids/solutions/4494347/o-n-logn-o-n-full-explained-beats-100-java-c-python-go-ruby/

/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a, b) => a - b)
    let totalMass = mass

    for (const asteroid of asteroids) {
        if (asteroid > totalMass) {
            return false
        } else {
            totalMass += asteroid
        }
    }

    return true
};