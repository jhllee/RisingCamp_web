import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import RootLayout from "./Pages/Root";
import DetailPage from "./Pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/detail/:roomId", element: <DetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
