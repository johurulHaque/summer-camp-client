import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on Data
  const isAdmin = false ;
  const isInstructor = false;
  const isUser = true  ;
  // const cart = 10;
  // const [isAdmin] = useAdmin();
  // console.log(isAdmin)

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
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">

                    {
                        isAdmin && <>
                            <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/ManageClasses"> <FaUtensils></FaUtensils> Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/manageUser"><FaWallet></FaWallet> Manage User</NavLink></li>                            
                        </> 
                        }
                    {
                        isInstructor && <>
                            <li><NavLink to="/dashboard/"><FaHome></FaHome> Instructor Home</NavLink></li>
                            <li><NavLink to="/dashboard/addClasses"> <FaUtensils></FaUtensils> Add a Class</NavLink></li>
                            <li><NavLink to="/dashboard/myClasses"><FaWallet></FaWallet> My Class</NavLink></li>                                                   
                        </> 
                        }
                      
                        { isUser && <>
                            <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>                            
                            <li><NavLink to="/dashboard/"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/enrollClass"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/selectClass"><FaShoppingCart></FaShoppingCart>  My Selected Class
                                    <span className="badge inl badge-neutral">+{cart?.length || 0}</span>
                                </NavLink>

                            </li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>                    
                </ul>
      </div>
    </div>
  );
};

export default Dashboard;
