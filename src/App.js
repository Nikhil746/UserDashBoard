import React, { Suspense, lazy } from 'react';
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import PrivateRoutes from './components/PrivateRoutes';
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from "./components/ErrorHandler";
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedOut } from './redux/actions/action';

const Login = lazy(() => import('./components/Login'));
const SignUp = lazy(() => import('./components/Signup'));
const DashBoardData = lazy(() => import('./components/Dashboard'));
const Error = lazy(() => import('./components/Error'));

function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.accessToken)

  const handleLogout = () => {
    localStorage.clear();
    dispatch(userLoggedOut());
  }

  return (
    <div className="App">
      <div className="nav">
        <ul >
          <li>
            <NavLink className={"nav-link"} to="/signup">SIGNUP</NavLink>
          </li>
          {token ? (<>
            <li>
              <NavLink className={"nav-link"} onClick={handleLogout}>LOGOUT</NavLink>
            </li>
            <li>
              <NavLink className={"nav-link"} to="/dashboard">DASHBOARD</NavLink>
            </li>
          </>
          ) : (
            <li>
              <NavLink className={"nav-link"} to="/login">LOGIN</NavLink>
            </li>
          )}

          <Outlet />
        </ul>
      </div>
      <div >
        <ErrorBoundary FallbackComponent={ErrorFallback}
          onReset={() => { }}>
          <Suspense fallback={<div>loading ...</div>}>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path='/dashboard' element={<DashBoardData />} />
              </Route>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<SignUp />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path="*" element={<Error />} ></Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
export default App;
