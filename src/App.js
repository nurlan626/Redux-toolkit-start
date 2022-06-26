import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";
import Counter from "./components/Counter";
import AsyncData from "./components/AsyncData";

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
      <Counter />
      <AsyncData />
    </div>
  );
}

export default App;
