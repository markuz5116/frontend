import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToDoListPage from './ToDoListPage';
import NavBar from '../components/NavBar';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/todo-list" element={<ToDoListPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
