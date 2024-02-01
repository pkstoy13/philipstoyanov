import { Nav, Intro, Education, Projects, Skills, Contact } from "./components";
//import { Education } from "components/Education";

export function App() {
  return (
    <>
      <div className=" bg-background h-full min-h-screen  text-text ">
        <Nav />
        <Intro />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
