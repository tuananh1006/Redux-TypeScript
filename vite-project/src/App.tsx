import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/counter/counter.slide";
import { decrease } from "./redux/counter/counter.slide";
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);
  console.log("Check count==", count);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        My current count is:{count}
        <div>
          <button onClick={() => dispatch(increment())}>
            Increase Value+1
          </button>
          <button onClick={() => dispatch(decrease())}>Decrease Value-1</button>
        </div>
      </div>
    </>
  );
}

export default App;
