import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Shop from './components/Shop/Shop'
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About'
import { productsCartLoader } from './components/Loaders/productsCartLoaders';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop />
        },
        {
          path: '/orders',
          loader: productsCartLoader,
          element: <Order />
        },
        {
          path: '/inventory',
          element: <Inventory />
        },
        {
          path: '/about',
          element: <About />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
