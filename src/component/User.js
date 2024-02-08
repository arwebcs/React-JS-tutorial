import { useParams, useLocation } from "react-router-dom";

function User() {
  const params = useParams();
  const { name } = params;
  const location = useLocation();

  console.log(location);

  return (
    <>
      <h1>User : {name}</h1>
    </>
  );
}

export default User;
