import Nav from "./components/Nav";
import Intro from "./components/Intro";

function App() {
  return (
    <>
      <div className=" bg-gradient-to-tr h-screen from-indigo-700 to-red-200">
        <Nav />
        <Intro />
      </div>
    </>
  );
}

export default App;
