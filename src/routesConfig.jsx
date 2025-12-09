import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import FarmlandPage from './pages/FarmlandPage'
import VillaContent from './pages/VillaContent'
import Kaira from './pages/Kaira'
import RevenueDetail from './pages/RevenueDetail'
import Bilvadhara from './pages/Bilvadhara'
import Niharika from './pages/Niharika'

 const routes = [
  { path: '/', element: <Home />, meta : {title: 'Home - Vibez Estates'} },
  { path: '/about', element: <About />,meta :{ title: 'About Us - Vibez Estates'} },
  { path: '/villa', element: <VillaContent />, meta: { title: 'Villa - Vibez Estates' } },
  { path: '/farmland', element: <FarmlandPage />, meta: { title: 'Farmland - Vibez Estates' } },
  { path: '/kaira-2', element: <Kaira />, meta: { title: 'Kaira - project - Vibez Estates' } },
  { path: '/revenue', element: <RevenueDetail />, meta: { title: 'Revenue Details - Vibez Estates' } },
  { path: '/contact', element: <Contact />, meta : {title: 'Contact - Vibez Estates'} },
  { path: '/bilvadhara', element: <Bilvadhara />, meta : {title: 'Bilvadhara - Vibez Estates'} },
  { path: '/niharika', element: <Niharika />, meta : {title: 'Niharika - Vibez Estates'} },
  ]

export default routes;