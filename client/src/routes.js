import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import TestPage from './pages/TestPage'
import AuthPage from './pages/AuthPage'
export const useRoutes = (isAuth) => {
  //isAuth флаг показывающий есть аутетификация у клиента
  if (isAuth) {
    return (
      <Routes>
        <Route path="/test" element={<TestPage />} exact />
        <Route path="*" element={<Navigate replace to="/test" />} />
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} exact />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}
