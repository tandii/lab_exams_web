import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Campaign } from './pages/Campaign'
import { Schedule } from './pages/Schedule'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/campaign' element={<Campaign />} />
            <Route path='/schedule' element={<Schedule />} />
        </Routes>
    )
}