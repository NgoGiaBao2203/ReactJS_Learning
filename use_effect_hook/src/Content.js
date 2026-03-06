// Mounted / Unmounted
// 1. Mounted / Unmounted
//2. useEffect hook
//---------------------------
// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])
//----------------------------
// 1. callback: gọi sau khi component mounted
import { type } from "@testing-library/user-event/dist/type";
import { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  // Tạo thêm state để lưu tab hiện tại đang được chọn (mặc định là 'posts')
  const [currentTab, setCurrentTab] = useState("posts");

  useEffect(() => {
    // Sử dụng template literal để thay đổi API theo tab được chọn
    fetch(`https://jsonplaceholder.typicode.com/${currentTab}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [currentTab]); // Thêm currentTab vào deps để mỗi lần click nút là fetch lại data mới

  return (
    <div>
      <h1>Cố lên</h1>
      {tabs.map((tab) => (
        <button
          key={tab}
          // Kiểm tra nếu tab đang lặp qua trùng với currentTab trong state thì tô màu
          style={
            currentTab === tab
              ? { backgroundColor: "#6f4e37", color: "white" }
              : { backgroundColor: "#eee", color: "#333" }
          }
          // Lắng nghe sự kiện click để cập nhật lại state currentTab
          onClick={() => setCurrentTab(tab)}
        >
          {tab}
        </button>
      ))}

      <div style={{ marginTop: "20px" }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nhập tiêu đề..."
        />
      </div>

      <ul>
        {posts.map((item) => (
          // Lưu ý: JSONPlaceholder trả về 'title' cho posts/albums và 'name' cho comments
          <li key={item.id}>{item.title || item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
