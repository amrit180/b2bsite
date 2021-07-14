import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import "antd/dist/antd.css";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
    </div>
  );
};

export default App;
