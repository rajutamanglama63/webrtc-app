import Notifications from "./components/notifications/Notifications";
import Options from "./components/options/Options";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";
import "./app.css";

function App() {
  return (
    <div className="app">
      <div className="app-bar">Video chat app</div>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
