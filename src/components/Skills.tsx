export function Skills() {
  return (
    <div className="section-block ">
      <h1 className="header ">Skills</h1>
      <h2>Programming Languages</h2>
      <div className="flex justify-center space-x-4 mb-2">
        <p>JavaScript</p>
        <p>TypeScript</p>
        <p>Python</p>
        <p>C</p>
        <p>C++</p>
        <p>Java</p>
      </div>
      <h2>Web Development</h2>
      <ul className="flex flex-wrap space-x-4 mb-2">
        <li>React</li>
        <li>Next.js</li>
        <li>Vite</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Tailwind</li>
        <li>React Bootstrap</li>
        <li>Material UI</li>
      </ul>
      <h2>Version Control</h2>
      <div className="flex justify-center space-x-4 mb-2">
        <p>Git</p>
        <p>GitHub</p>
        <p>GitLab</p>
      </div>
    </div>
  );
}
