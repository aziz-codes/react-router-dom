import { React } from "react";
import { Route, Navigate } from "react-router-dom";
const ProtectedRoutes = ({ user, component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (user) {
            return <Component />;
          } else
            return (
              <Navigate
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            );
        }}
      />
    </>
  );
};
export default ProtectedRoutes;
