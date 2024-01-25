import { Nav, Intro, Education, Projects, Skills } from "./components";
//import { Education } from "components/Education";

export function App() {
  return (
    <>
      <div className=" bg-gradient-to-tr h-full min-h-screen from-indigo-700 to-red-200">
        <Nav />
        <Intro />
        <Education />
        <Projects />
        <Skills />
      </div>
    </>
  );
}
