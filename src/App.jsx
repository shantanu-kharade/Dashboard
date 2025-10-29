import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Team from './pages/Team'
import Projects from './pages/Projects'
import FrontPage from './pages/FrontPage'
import SignIn from './pages/SignIn'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/team" element={<Team />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>

    )
}

export default App
