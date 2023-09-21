export const Skills = ({ skills }) => (
  <div>
    {skills.sort().map((v, i) => (
      <div className="tag" key={v}>
        {v}
      </div>
    ))}
  </div>
);
