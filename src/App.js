import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
      <Counter />
    </div>
  );
}

export default App;
