import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route,Router,Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import DetailForms from './components/Forms/DetailForms';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/home')
  }, [])
  
  return (
    <div className="App">
     
      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/forms" element={<DetailForms/>} />
      </Routes>
      {/* <DetailForms/> */}
      
    </div>
  );
}

export default App;
