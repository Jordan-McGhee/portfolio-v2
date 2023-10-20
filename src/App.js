import './App.css';
import MobileLayout from './MobileLayout/MobileLayout';

import WebLayout from './WebLayout/WebLayout';

function App() {

  return (
    <div className="App">
      
      {/* MOBILE LAYOUT */}
      <div className='md:hidden'>
        <MobileLayout />
      </div>
      {/* TABLET LAYOUT */}


      {/* WEB LAYOUT */}
      <div className="hidden lg:block">
        <WebLayout />
      </div>
    </div>
  );
}

export default App;
