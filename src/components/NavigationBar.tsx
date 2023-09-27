import "./NavigationBar.css";

export const NavigationBar = () => {
  return <div className="nav">
    <div className="sidebar">
    <button>toggle</button>
    </div>
    <div className="search">
      <input placeholder="Search animals" />
      <button>search</button>
    </div>
    <div className="actions">
      <button>Feedback</button>
      <button>Share</button>
    </div>
  </div>;
}
