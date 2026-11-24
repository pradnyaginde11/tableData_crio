import { useState } from "react";
import "./App.css";

function App() {
  const [place, setPlace] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [people, setPeople] = useState([]);

  const handleAdd = () => {
    if (!place.trim() || !name.trim() || !age.trim()) {
      return;
    }

    const newPerson = {
      id: Date.now(),
      place,
      name,
      age,
    };

    setPeople((prev) => [...prev, newPerson]);

    setPlace("");
    setName("");
    setAge("");
  };

  const handleClear = () => {
    setPlace("");
    setName("");
    setAge("");
  };

  const handleRemove = (id) => {
    setPeople((prev) => prev.filter((person) => person.id !== id));
  };

  return (
    <div className="container">
      <h1>Add People to Table</h1>

      <p>Enter Place, Name, and Age, then click Add.</p>

      <div className="form">
        <input
          type="text"
          name="place"
          placeholder="Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <div className="buttons">
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>

      {people.length === 0 ? (
        <p>No entries yet. Add your first row!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Place</th>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {people.map((person) => (
              <tr key={person.id}>
                <td>{person.place}</td>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>
                  <button onClick={() => handleRemove(person.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;