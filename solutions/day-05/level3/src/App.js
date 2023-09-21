import "./App.css";
import Colors from "./Colors";
import { Skills } from "./Skills";

function App({
  user: { avatar, firstName, lastName, title, country, skills, colors, date },
}) {
  return (
    <div className="card">
      <img src={avatar} className="avatar" alt="User Avatar" />
      <h1>
        {firstName} {lastName}
        <i class="fa-solid fa-circle-check"></i>
      </h1>
      <p>
        {title}, {country}
      </p>
      <h2>Skills</h2>
      <Skills skills={skills} />
      <h2>Colors</h2>
      <Colors colors={colors} />
      <footer>
        <i class="fa-regular fa-clock"></i>
        Joined on {date}
      </footer>
    </div>
  );
}

export default App;
