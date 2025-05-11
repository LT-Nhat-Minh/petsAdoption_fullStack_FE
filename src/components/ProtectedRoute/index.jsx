import { Button, Result } from "antd";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

// const RoleBaseRoute = (props) => {
//   const isAdminRoute = window.location.pathname.startsWith("/admin");
//   const user = useSelector((state) => state.account.user);
//   const userRole = user.role;

//   if (isAdminRoute && userRole === "admin") {
//     return <>{props.children}</>;
//   } else
//     return (
//       <Result
//         status="403"
//         title="403"
//         subTitle="Sorry, you are not authorized to access this page."
//         extra={
//           <Button type="primary" href="/">
//             Back Home
//           </Button>
//         }
//       />
//     );
// };

const ProtectedRoute = (props) => {
  const user = useSelector((state) => state.account.user);
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const isAuthorized = user.role === "admin" || user.role === "user";

  const isAdminRoute = window.location.pathname.startsWith("/admin");

  return (
    <>
      {isAuthenticated ? (
        <>
          {isAdminRoute && user.role === "admin" ? (
            <>{props.children}</>
          ) : isAdminRoute && user.role !== "admin" ? (
            <Result
              status="403"
              title="403"
              subTitle="Sorry, you are not authorized to access this page."
              extra={
                <Button type="primary" href="/">
                  Back Home
                </Button>
              }
            />
          ) : (
            <>{props.children}</>
          )}
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default ProtectedRoute;
