import { Intro, Education, Projects, /*Albums,*/ EmailForm } from "./components";

export function App() {
  return (
    <>
      <div className=" bg-gradient-to-b from-indigo-600 to bg-indigo-900 h-full min-h-screen  text-text ">
        <Intro />
        <Education />
        <Projects />
        {/*<Albums />*/}
        <EmailForm />
      </div>
    </>
  );
}
