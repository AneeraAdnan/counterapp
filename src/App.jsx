
import Signup from './components/Foam';
import Counter from './components/Counter';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/signup" />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/counter' element={<Counter />} />
                
            </Routes>
        </BrowserRouter>
    </div>
    
  );
}
