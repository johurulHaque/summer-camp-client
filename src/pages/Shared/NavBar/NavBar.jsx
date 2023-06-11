import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/login')
      })
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructor">Instructors</Link>
      </li>
      <li>
        <Link to="/classPage"> Classes</Link>
      </li>
      <li>
        <Link to="/dashboard"> Dashboard</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar  bg-opacity-50 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/">
            <div className="flex justify-center items-center gap-2">
              <img src="./images.png" alt="" className="w-16" />
              <span className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-amber-500">
                Sports Academy
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-2xl">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                src={user.photoURL}
                referrerPolicy="no-referrer"
                alt=""
                className="w-10 h-10 rounded-full"
                title={user.displayName}
              />

              <button
                onClick={handleLogOut}
                className="btn btn-sm btn-warning btn-outline"
              >
                LogOut <FaSignOutAlt></FaSignOutAlt>
              </button>
            </>
          ) : (
            <>
              <li className="list-none">
                <Link
                  to="/login"
                  className="btn btn-sm btn-active text-white btn-accent"
                >
                  <FaSignInAlt></FaSignInAlt> Login
                </Link>
              </li>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
