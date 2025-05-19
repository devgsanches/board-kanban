import { BrowserRouter, Routes, Route } from 'react-router'
import AuthLayout from '../layouts'
import LoginPage from '../pages/Login'
import RegisterPage from '../pages/Register'
import HomePage from '../pages/Home'
import { PrivateRoute } from './private-route'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route
          path="/board"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
