import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import EditPage from './pages/Edit';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/edit",
      element: <EditPage />,
    },
  ]);

  return (
    <div className='container'>
      <h1>Meme Generator</h1>
      <RouterProvider router={router} />
    </div>
  );
};

export default App
