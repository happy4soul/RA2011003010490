import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [trains, setTrains] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedTrain, setSelectedTrain] = useState(null);
  
  useEffect(() => {
    fetch("http://20.244.56.144:80/train/trains")
      .then(response => response.json())
      .then(data => setTrains(data));
  }, []);
  
  function handleSearch(event) {
    setSearch(event.target.value);
  }
  
  function handleTrainSelect(event) {
    const trainId = event.target.value;
    setSelectedTrain(trains.find(train => train.id === trainId));
  }
  
  return (
    <div>
      <header>
        <h1>{selectedTrain?.name}</h1>
        <p>
          <a href={`https://www.whatsapp.com/${selectedTrain?.number}`}>Train No.</a>
        </p>
        <p>
          <a href={`https://www.whatsapp.com/${selectedTrain?.availability}`}>Seat Availability</a>
        </p>
        <input type="text" placeholder="Search" onChange={handleSearch} />
      </header>
      <main>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search for train No, seat Availability or Train Name"
            onChange={handleSearch}
            style={{
              padding: "10px",
              fontSize: "16px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #ccc",
              transition: "opacity 0.5s ease"
            }}
          />
        </div>
        <select value={selectedTrain?.id} onChange={handleTrainSelect}>
          <option value="">Trains Available</option>
          {/* {trains.filter(train => train.name.toLowerCase().includes(search.toLowerCase())).map(train => (
            <option value="2347">Sundar Exp 2347 {`{13 32 0}`} {`{55 0}`} {`{223 413}`} 7</option>
          ))} */}
          <option value="2347">
            Sundar Exp <br/> Train Number: 2347 <br/>{`13 32 0`} {`55 0`} {`223 413`} 7
            </option>

            
        </select>
      </main>
    </div>
  );
}

export default App;