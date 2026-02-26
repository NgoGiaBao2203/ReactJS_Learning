import { useState } from "react";

const gifts = ["CPU i9", "RAM 32GB", "SSD 1TB"];

function App() {
  const [gift, setGift] = useState();

  const ramdomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    // Cập nhật State bằng phần quà tại vị trí index vừa lấy được
    setGift(gifts[index]);
  };
  return (
    <div className="App" style={{ padding: 30 }}>
      <h1>{gift || "Chua co phan thuong"}</h1>
      <button onClick={ramdomGift}> Lay thuong </button>
    </div>
  );
}
export default App;
