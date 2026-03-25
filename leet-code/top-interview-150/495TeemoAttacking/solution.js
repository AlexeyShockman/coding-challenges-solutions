/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
function findPoisonedDuration(timeSeries, duration) {

    let totalDuration = duration;

    for (let i = 1; i < timeSeries.length; i++) {
        const interval = timeSeries[i] - timeSeries[i-1];

        totalDuration += interval < duration ? interval : duration;
        // totalDuration += Math.min(interval, duration); // так чуть медленнее по тестам.
    }

    return totalDuration;
}