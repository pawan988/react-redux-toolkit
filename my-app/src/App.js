import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./container/Login";
import RegistrationForm from "./container/Register";
function App() {
  return (
    <div className="App">
      <LoginForm />
      <RegistrationForm />
    </div>
  );
}

export default App;
