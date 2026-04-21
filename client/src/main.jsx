import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LoginPage from "./LoginPage.jsx";

function Root() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
