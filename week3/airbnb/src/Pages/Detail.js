import { useParams } from "react-router-dom";
import roomData from "../data/roomData.json";
import "./Detail.css";

function DetailPage() {
  const params = useParams();

  const selectedRoom = roomData.find(
    (room) => room.roomId === parseInt(params.roomId)
  );
  console.log(selectedRoom);
  return (
    <div className="detail">
      <h2>{selectedRoom.description}</h2>
      <div className="room-detail">
        <div className="r1">
          <img
            className="r1img"
            src={`${process.env.PUBLIC_URL}/${selectedRoom.src}`}
            alt={selectedRoom.name}
          />
        </div>

        <div className="r2">
          <div className="r2-1">
            <img
              src={`${process.env.PUBLIC_URL}/${selectedRoom.src1}`}
              alt={selectedRoom.name}
            />
          </div>
          <div className="r2-2">
            <img
              src={`${process.env.PUBLIC_URL}/${selectedRoom.src2}`}
              alt={selectedRoom.name}
            />
          </div>
        </div>
        <div className="r3">
          <div className="r3-1">
            <img
              src={`${process.env.PUBLIC_URL}/${selectedRoom.src3}`}
              alt={selectedRoom.name}
            />
          </div>
          <div className="r3-2">
            <img
              src={`${process.env.PUBLIC_URL}/${selectedRoom.src4}`}
              alt={selectedRoom.name}
            />
          </div>
        </div>
      </div>
      <h2>{selectedRoom.host} 님이 호스팅하는 텐트</h2>
      <p>Name: {selectedRoom.name}</p>
      <p>Category: {selectedRoom.category}</p>
    </div>
  );
}

export default DetailPage;
