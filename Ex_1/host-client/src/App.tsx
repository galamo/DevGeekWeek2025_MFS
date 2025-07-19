import "./App.css";
// @ts-ignore
import FlightsComponent from "flights/Flights";
function App() {
  return (
    <>
      <div>
        <h1>Host Client </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "cetner",
        }}
      >
        <div
          style={{ border: "1px solid black", height: "80vh", width: "50vw" }}
        >
          {/* <FlightsComponent /> */}
        </div>
        <div
          style={{ border: "1px solid black", height: "80vh", width: "50vw" }}
        ></div>
      </div>
    </>
  );
}

export default App;
