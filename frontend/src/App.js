import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MenShoes from './pages/menshoes/MenShoes';
import MenShoesDetail from './pages/menshoes/MenShoesDetail';
import WomenShoes from './pages/womenshoes/WomenShoes';
import WomenShoesDetails from './pages/womenshoes/WomenShoesDetails';
import { AppProvider } from './AppContext';
import Cart from './components/Cart';

function App() {
  return (
    <main className='p-4'>
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<MenShoes />} />
          <Route path="/menshoes/:id" element={<MenShoesDetail />} />
          <Route path="/womenshoes" element={<WomenShoes />} />
          <Route path="/womenshoes/:id" element={<WomenShoesDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AppProvider>
    </main>
  );
}

export default App;
