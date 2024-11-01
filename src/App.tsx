import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutesEnum } from "./routes";

const Home = React.lazy(() => import("./pages/home"));
const Login = React.lazy(() => import("./pages/login"));
const Profile = React.lazy(() => import("./pages/profile"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={RoutesEnum.Home} element={<Home />} />
        <Route path={RoutesEnum.Login} element={<Login />} />
        <Route path={RoutesEnum.Profile} element={<Profile />} />

        {/* 404 */}
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
