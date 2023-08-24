// Main은 어떤 components 폴더에 넣는 것이 좋을지
import { useState } from "react";

import "./Main.css";
import Nav from "./components/Nav/Nav";
import Card from "./components/Card/Card";
import roomData from "./data/roomData.json";

function Main() {
  const [filteredRoom, setFilteredRoom] = useState({ category: "camping" });

  const filterChangeHandler1 = (selectedItem) => {
    setFilteredRoom({ category: selectedItem });
  };

  const displayedRooms = roomData.filter(
    (room) => room.category === filteredRoom.category
  );

  return (
    <div>
      <Nav
        selected={filteredRoom.category}
        onChangeFilter={filterChangeHandler1}
      />

      <div className="rooms">
        {displayedRooms.map((room) => (
          <Card key={room.description} className="room-card">
            <img src={room.src} alt={room.description} />
            <p>Name: {room.description}</p>
            <p>Category: {room.category}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Main;
