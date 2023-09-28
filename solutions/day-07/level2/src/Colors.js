import React from "react";

const Color = ({ color }) => (
  <div className="color" style={{ backgroundColor: color }}>
    {color}
  </div>
);
class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.colors = [];
    for (let i = this.colors.length; i < props.amount; i++) {
      this.colors.push(this.hexaColor());
    }
  }
  hexaColor() {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return "#" + color;
  }
  render() {
    return (
      <div className="numbers">
        {this.colors.map((v, i) => (
          <Color key={v} color={v} />
        ))}
      </div>
    );
  }
}

export default Colors;
