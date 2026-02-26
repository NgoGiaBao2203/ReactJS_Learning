import { useState } from "react";
//response API
const course = [
  { id: 1, name: "ReactJS" },
  { id: 2, name: "html, css" },
  { id: 3, name: "Javascript" },
];

function App() {
  const [checked, setChecked] = useState([]);
  console.log(checked);

  const handleSubmit = () => {
    //CALL API
    console.log({ ids: checked });
  };
  const heandleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        //Uncheck
        return checked.filter((item) => item !== id);
      } else {
        //Check
        return [...prev, id];
      }
    });
  };

  return (
    <>
      <div className="App" style={{ padding: 40 }}>
        {course.map((course) => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => heandleCheck(course.id)}
            />
            {course.name}
          </div>
        ))}
        <button onClick={handleSubmit}>Register</button>
      </div>
    </>
  );
}

export default App;
