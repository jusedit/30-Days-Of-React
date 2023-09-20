import "./Colors.css";
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
for (let i = 0; i < 5; i++) {
  colors.push(hexaColor());
}

function Colors() {
  return colors.map((v) => (
    <div style={{ backgroundColor: v }} className="bar">
      {v}
    </div>
  ));
}

export default Colors;
