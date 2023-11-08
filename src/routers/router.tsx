import { ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import CreateMessage from "../pages/CreateMessage";
import Messages from "../pages/Messages";

type ProtectedRoute = {
  children?: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRoute) => {
  //wrapper component for protected routes
  //   const isAuth = !!user;
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

const Router = () => {
  return (
    <Routes>
      {/* <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} /> */}

      <Route
        //shared pages
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<CreateMessage />} />
        <Route path="messages" element={<Messages />} />
      </Route>

      <Route path="*" element={<h1>404, page not found</h1>} />
    </Routes>
  );
};

export default Router;
