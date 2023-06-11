import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
  FaAddressCard,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import useRole from "../hooks/useRole";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [role] = useRole();
  console.log(role);

  // const isAdmin = false;
  // const isInstructor = false;
  // const isUser = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-accent">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {role == "admin" && (
            <>
              <li>
              <span className="text-2xl text-fuchsia-500 " >Dashboard | Admin</span>
              </li>
              <li>
                <NavLink to="/dashboard/ManageClasses">
                  <FaUtensils></FaUtensils> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUser">
                  <FaWallet></FaWallet> Manage User
                </NavLink>
              </li>
            </>
          )}
          {role == "instructor" && (
            <>
              <li>
              <span className="text-2xl text-fuchsia-500 " >Dashboard | Instructor</span>
              </li>
              <li>
                <NavLink to="/dashboard/addClasses">
                  <FaAddressCard></FaAddressCard> Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClasses">
                  <FaWallet></FaWallet> My Class
                </NavLink>
              </li>
            </>
          )}

          {role == "user" && (
            <>
              <li>
                <span className="text-2xl text-fuchsia-500 " >Dashboard | User</span>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrollClass">
                  <FaAddressCard></FaAddressCard> My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/selectClass">
                  <FaShoppingCart></FaShoppingCart> My Selected Classes
                  <span className="badge inl badge-secondary ">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home Page
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
