import { useAuth } from "../../context";
import { logoutHandler } from "../../util";

const Logout = () => {
  const { auth, authDispatch } = useAuth();
  return (
    <>
      <button
        className="btn"
        onClick={() => logoutHandler({ auth, authDispatch })}
      >
        Logout
      </button>
    </>
  );
};

export { Logout };
