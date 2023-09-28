import React from "react";

const Number = ({ number, color }) => <div className={color}>{number}</div>;

class Numbers extends React.Component {
  constructor(props) {
    super(props);
    const { amount } = props;
    const numbers = Array.from({ length: amount });
    this.numberList = numbers.map((v, i) => {
      let color = this.isPrime(i) ? "red" : this.isEven(i) ? "green" : "yellow";
      return color;
    });
  }
  isEven = (num) => num % 2 === 0;
  isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  render() {
    return (
      <div className="numbers">
        {this.numberList.map((color, i) => {
          return (
            <Number className="numbers" key={i} number={i} color={color} />
          );
        })}
      </div>
    );
  }
}
export default Numbers;
