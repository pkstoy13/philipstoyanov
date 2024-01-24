export function Nav() {
  return (
    <div>
      <div className="flex justify-end space-x-3 pr-4 bg-gray-800 text-red-200">
        <button className="hover:animate-pulse">Overview</button>
        <button className="hover:animate-pulse">Education</button>
        <button className="hover:animate-pulse">Projects</button>
        <button className="hover:animate-pulse">Skills</button>
      </div>
    </div>
  );
}
