import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { isEmpty } from "../utils";

export default function UnProtectedRoute({
  component: Component,
  ...restOfProps
}) {
  const userData = useSelector((state) => state.user);
  const isAuthenticated = !isEmpty(userData.isSignedIn) ? true : false;

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? (
          <Redirect to="/planner" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
