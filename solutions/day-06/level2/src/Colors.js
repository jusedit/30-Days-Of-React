const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};
const colors = [];

const Color = ({ color }) => (
  <div className="color" style={{ backgroundColor: color }}>
    {color}
  </div>
);

function Colors({ amount }) {
  for (let i = colors.length; i < amount; i++) {
    colors.push(hexaColor());
  }
  const numberList = colors.map((v, i) => {
    return <Color key={v} color={v} />;
  });
  return <div className="numbers">{numberList}</div>;
}

export default Colors;
