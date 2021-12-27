import "./styles.css";
import { Grocery } from "./components/Grocery";

export default function App() {
  return (
    <div className="App">
      <Grocery />
      <footer className="footer">
        {" "}
        <a href="https://www.github.com/ipankaj07">Ipankaj07</a>
      </footer>
    </div>
  );
}
