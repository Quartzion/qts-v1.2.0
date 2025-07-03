import ReactDom from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Page1 from './pages/Page1.jsx';
import App from './app.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Page1 /> },
      { path: 'page1', element: <Page1 /> }
    ]
  }
]);

ReactDom.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
