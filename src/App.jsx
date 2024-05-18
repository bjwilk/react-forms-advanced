import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from "./components/Home";
import Survey from "./components/Survey";
import Form from "./components/Form";


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
  },
  {
    path: "/form",
    element: 
    <>
    <Layout />
    <Form />
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
