function Navbar({ activeTab, setActiveTab }) {
  return (
    <div className="navbar">
      <button
        className={activeTab === "list" ? "active" : ""}
        onClick={() => setActiveTab("list")}
      >
        Task List
      </button>
      <button
        className={activeTab === "add" ? "active" : ""}
        onClick={() => setActiveTab("add")}
      >
        Add Task
      </button>
    </div>
  );
}

export default Navbar;
