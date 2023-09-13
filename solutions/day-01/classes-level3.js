// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode)
// and measure of variability(range, variance, standard deviation).
// In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.
// You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class.
// Check the output below.

class Statistics {
  constructor(values) {
    this.values = values;
  }
  count() {
    return this.values.length;
  }
  sum() {
    return this.values.reduce((acc, curr) => acc + curr);
  }
  min() {
    return Math.min(...this.values);
  }
  max() {
    return Math.max(...this.values);
  }
  range() {
    return this.max() - this.min();
  }
  mean() {
    if (this.count() == 0) return 0;
    return this.sum() / this.count();
  }
  median() {
    const len = this.count();
    if (len == 0) return 0;
    const sorted = [...this.values].sort((a, b) => a - b);
    const middle = Math.floor(len / 2);
    if (len % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
      return sorted[middle];
    }
  }
  mode() {
    let countedValues = [];
    this.values.forEach(
      (val) =>
        (countedValues[val] = {
          mode: val,
          count: countedValues[val] ? countedValues[val].count + 1 : 1,
        })
    );
    countedValues.sort((a, b) => b.count - a.count);
    return countedValues[0];
  }
  var() {
    const mean = this.mean();
    return (
      this.values
        .map((val) => {
          let diff = val - mean;
          return diff * diff;
        })
        .reduce((acc, curr) => acc + curr) / this.count()
    );
  }
  std() {
    return Math.sqrt(this.var());
  }
  freqDist() {
    const countedValues = [];
    this.values.forEach((val) => {
      countedValues[val] = (countedValues[val] || 0) + 1;
    });
    const dist = countedValues
      .map((count, val) => [count, val])
      .filter((val) => val != undefined)
      .sort((a, b) => b[0] - a[0]);
    return dist;
  }
}

ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
const statistics = new Statistics(ages);

// the output should look like this
console.log("Count:", statistics.count()); // 25
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 30
console.log("Median: ", statistics.median()); // 29
console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}
console.log("Variance: ", statistics.var()); // 17.5
console.log("Standard Deviation: ", statistics.std()); // 4.2
console.log("Frequency Distribution: ", statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
