import './App.css';
import MobileLayout from './MobileLayout/MobileLayout';

import WebLayout from './WebLayout/WebLayout';

function App() {

  return (
    <div className="App">
      
      {/* MOBILE LAYOUT */}
      <div className='xl:hidden mobile-layout'>
        <MobileLayout />
      </div>
      {/* TABLET LAYOUT */}


      {/* WEB LAYOUT */}
      <div className="hidden xl:block web-layout">
        <WebLayout />
      </div>
    </div>
  );
}

export default App;
