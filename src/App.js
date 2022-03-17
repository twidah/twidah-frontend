import "./App.css";
import LoginForm from "./comps/login/Login";
import RegisterForm from "./comps/register/Register";
import Header from "./comps/Header";

function App() {
  return (
    <div>
      <Header />
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default App;
