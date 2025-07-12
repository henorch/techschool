import { curriculum } from "../Data/data";
import './curricular.css'

function Curricular() {
  return (
    <div>
    <h1 style={{
        padding:'1rem'
    }}>Graphic Design Trainee Curriculum (Beginner to Intermediate)</h1>
      {curriculum.map(({ Phase, Topics, Practice }, index) => (
        <div key={index}>
          <div className="phase">Phase 1: {Phase}</div>

          <div className="topics">
            <h1>Topics</h1>
            <ul>{Topics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}</ul>
          </div>

          <div className="practices">
            <h1>Practices</h1>
            <ul>{Practice.map((prac, j) => (
              <li key={j}>{prac}</li>
            ))}</ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Curricular;
