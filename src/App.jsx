import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from "./components/Home";
import Survey from "./components/Survey";


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      <Layout />
    </>
  },
  {
    path: "/home",
    element: 
    <>
    <Layout />
    <Home />
    </>
  },
 
  {
    path: "/survey",
    element: 
    <>
    <Layout />
    <Survey />
    </>
  }
])


function Layout() {
  return (
    <div className="layout-wrapper">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

function App() {
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  )
}

export default App;
