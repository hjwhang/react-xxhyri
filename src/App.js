import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import AuthProvider from "./context/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <AuthRoute path="/" exact>
            <Home />
          </AuthRoute>
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
