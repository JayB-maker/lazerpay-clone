import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, LoginPage, SignUpPage } from './Pages'
import ScrollToTop from './ScrollToTop'


const AppRoutes = () => {
  return (
    <>
    <Router>
        <ScrollToTop />
        <Routes>
            <Route path='/'>
                <Route index element={<HomePage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='signup' element={<SignUpPage />} />
            </Route>
        </Routes>
    </Router>
    </>
  )
}

export default AppRoutes