import { FaHome, FaProjectDiagram, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-8 py-4 bg-white/10 backdrop-blur-md rounded-full shadow-lg flex items-center gap-10 border border-white/20">
      <h1 className="text-2xl font-header text-primary">AlgoMation</h1>
      <ul className="flex gap-8 text-text text-2xl">
        <li className="hover:text-accent cursor-pointer" title="Home">
          <FaHome />
        </li>
        <li className="hover:text-accent cursor-pointer" title="Visualizations">
          <FaProjectDiagram />
        </li>
        <li className="hover:text-accent cursor-pointer" title="About">
          <FaInfoCircle />
        </li>
        <li className="hover:text-accent cursor-pointer" title="Contact">
          <FaEnvelope />
        </li>
      </ul>
    </nav>
  );
}