import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

const HomePage = lazy(() => import('./App'))
const EmployesPage = lazy(() => import('./Pages/Employees/'))
const Register = lazy(() => import('./Pages/RegisterPage/'))

export const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employees" element={<EmployesPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}