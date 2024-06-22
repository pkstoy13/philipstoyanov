import {
  Intro,
  Education,
  Projects,
  /*Skills,
  Contact,*/
} from "./components";
import EmailForm from "./components/EmailForm";
//import { Education } from "components/Education";

export function App() {
  return (
    <>
      <div className=" bg-gradient-to-b from-indigo-600 to bg-indigo-900 h-full min-h-screen  text-text ">
        <Intro />
        <Education />
        <Projects />
        {/*<Skills />*/}
        {/*<Contact />*/}
        <EmailForm />
      </div>
    </>
  );
}
