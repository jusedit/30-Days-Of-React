import "./Colors.css";
function Colors({ colors }) {
  return colors.map((v) => (
    <div style={{ backgroundColor: v }} className="bar">
      {v}
    </div>
  ));
}

export default Colors;
