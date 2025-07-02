import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import ProjectList from './pages/ProjectList.jsx';
import ProjectCreate from './pages/ProjectCreate.jsx';
import ProjectEdit from './pages/ProjectEdit.jsx';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Navbar />
        <main style={{ padding: '1rem', flexGrow: 1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<ProjectList />} />
            <Route path="/projects/new" element={<ProjectCreate />} />
            <Route path="/projects/:id" element={<ProjectEdit />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;