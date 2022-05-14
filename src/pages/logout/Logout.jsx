import { useAuth } from "../../context";
import { logoutHandler } from "../../util";

const Logout = () => {
  const { authDispatch } = useAuth();
  return (
    <>
      <button className="btn" onClick={() => logoutHandler({ authDispatch })}>
        Logout
      </button>
    </>
  );
};

export { Logout };
