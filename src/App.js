import './App.css';
import useMousePosition from './hooks/useMousePosition';

import WebLayout from './WebLayout/WebLayout';

function App() {

  const mousePosition = useMousePosition()

  return (
    <div className="App">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{ background: `radial-gradient(1200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(192, 156, 247, 0.08), transparent 90%)` }}
      />
      <WebLayout />
    </div>
  );
}

export default App;
