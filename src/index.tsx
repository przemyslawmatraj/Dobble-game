import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DobbleGame from "./routes/DobbleGame/DobbleGame";
import Quiz from "./routes/Quiz/Quiz";
import Menu from "./routes/Menu/Menu";
import StartDobble from "./routes/DobbleGame/StartDobble";
import { store } from "./app/store";
import { Provider } from "react-redux";
import StartQuiz from "./routes/Quiz/StartQuiz";

import ScrollToTop from "./helpers/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "dobble",
        element: <DobbleGame />,
      },
      {
        path: "dobble/start",
        element: <StartDobble />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
      {
        path: "quiz/start",
        element: <StartQuiz />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
