import avatar from "./images/avatar.png";
import "./App.css";

const user = {
  firstName: "Jonas",
  lastName: "Nabbefeld",
  title: "Software Developer",
  country: "Germany",
  skills: [
    "HTML",
    "CSS",
    "JS",
    "PHP",
    "Python",
    "React",
    "MYSQL",
    "Git",
    "WordPress",
    "SEO",
    "jQuery",
    "MariaDB",
  ],
  date: "September 12, 2023",
};

const skillsElems = [];
user.skills.sort().forEach((val) => {
  skillsElems.push(
    <div className="tag" key={val}>
      {val}
    </div>
  );
});

function App() {
  return (
    <div className="card">
      <img src={avatar} className="avatar" alt="User Avatar" />
      <h1>
        {user.firstName} {user.lastName}
        <i class="fa-solid fa-circle-check"></i>
      </h1>
      <p>
        {user.title}, {user.country}
      </p>
      <h2>Skills</h2>
      <div>{skillsElems}</div>
      <footer>
        <i class="fa-regular fa-clock"></i>
        Joined on {user.date}
      </footer>
    </div>
  );
}

export default App;
