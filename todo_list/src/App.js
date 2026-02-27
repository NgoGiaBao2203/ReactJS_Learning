import { useState } from "react";

function App() {
  // State quản lý giá trị input hiện tại
  const [job, setJob] = useState("");

  // Lazy init: hàm này CHỈ chạy 1 lần khi component mount
  // Dùng để lấy dữ liệu đã lưu trong localStorage
  const [jobs, setJobs] = useState(() => {
    // Lấy dữ liệu từ localStorage theo key 'jobs'
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));

    // Log ra để debug – kiểm tra dữ liệu localStorage
    console.log(storageJobs);

    // Return dữ liệu cho state `jobs`
    // LocalStorage chưa có gì thì storageJobs sẽ là null
    return storageJobs ?? [];
  });

  // Hàm xử lý khi nhấn nút add
  const handleSubmit = () => {
    setJobs((prev) => {
      // Tạo mảng mới, KHÔNG được mutate state cũ
      const newJobs = [...prev, job];

      // Save to localStorage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      // Trả về state mới để React re-render
      return newJobs;
    });

    // Reset input sau khi add
    setJob("");
  };

  return (
    <div>
      {/* Controlled input: value luôn sync với state */}
      <input
        value={job}
        onChange={(e) => setJob(e.target.value)}
        placeholder="todo"
      />

      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          // NOTE: Dùng index làm key – tạm chấp nhận cho demo
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
