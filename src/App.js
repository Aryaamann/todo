import { Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import Todo from './component/Todo';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Todo/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
