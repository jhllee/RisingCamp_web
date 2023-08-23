import { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import Nav from "../components/Nav/Nav"
import Card from "../components/Card/Card";
import roomData from "../data/roomData.json";

function Home() {
  const [filteredRoom, setFilteredRoom] = useState({ category: "camping" });

  const filterChangeHandler1 = (selectedItem) => {
    setFilteredRoom({ category: selectedItem });
  };

  const displayedRooms = roomData.filter(
    (room) => room.category === filteredRoom.category
  );

  return (
    <div className="lay">
      <Nav
        selected={filteredRoom.category}
        onChangeFilter={filterChangeHandler1}
      />

      <div className="rooms">
        {displayedRooms.map((room) => (
          <Link key={room.name} className="room-link" to={`/detail/${room.roomId}`}>
          <Card key={room.name} className="room-card">
            <img src={room.src} alt={room.name} />
            <p>Name: {room.name}</p>
            <p>Category: {room.category}</p>
          </Card>
          </Link>
        ))}
      </div>

      <a href="/detail">Click here</a>
    </div>
  );
}

export default Home;