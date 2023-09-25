const isEven = (num) => num % 2 === 0;

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const Number = ({ number, color }) => <div className={color}>{number}</div>;

function Numbers({ amount }) {
  const numbers = Array.from({ length: amount });
  const numberList = numbers.map((v, i) => {
    let color = isPrime(i) ? "red" : isEven(i) ? "green" : "yellow";
    return <Number className="numbers" key={i} number={i} color={color} />;
  });
  return <div className="numbers">{numberList}</div>;
}

export default Numbers;
