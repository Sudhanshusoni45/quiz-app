import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { logoutHandler } from "../../util";

const Logout = () => {
  const { authDispatch } = useAuth();
  const Navigate = useNavigate();
  return (
    <>
      <button
        className="btn"
        onClick={() => logoutHandler({ authDispatch, Navigate })}
      >
        Logout
      </button>
    </>
  );
};

export { Logout };
