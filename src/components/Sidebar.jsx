import {NavLink} from "react-router-dom"
import avatarIcon from "../assets/avatar.svg"
import incomeIcon from "../assets/income.svg";
import settingsIcon from "../assets/settings.svg";
import expensesIcon from "../assets/expenses.svg";
import investmentsIcon from "../assets/investments.svg";
import smsIcon from "../assets/sms.svg";
import logoutIcon from "../assets/logout.svg";
// import profileIcon from "./assets/profile.svg"
function Sidebar() {
    return (
        <div>
            <div className="sidebar-container">

                <div className="top-item-container">
                    <div className="admin-profile">
                    <>
                        <div className="menu-item">
                        <div className="icon-container">
                            <img src={avatarIcon} alt="avatar" />
                        </div>

                        <div className="menu-text-container">
                            <h1>Shugaglow</h1>
                            <p>User</p>
                        </div>

                        
                    </div>
                </>
                    </div>
                </div>

                <div className="menu-items-container">

                <NavLink to={"/"}>
                <div className="menu-item">
                        <div className="icon-container">
                            <img src={incomeIcon} alt="income" />
                        </div>

                        <div className="menu-text-container">
                            <h1>Income</h1>
                            <p>Click to see how much you have made</p>
                        </div>

                        
                    </div>
                </NavLink>

                <NavLink to={"expenses"}>
                <div className="menu-item">
                        <div className="icon-container">
                            <img src={expensesIcon} alt="expenses" />
                        </div>

                        <div className="menu-text-container">
                            <h1>Expenses</h1>
                            <p>Click to see how much you have spent</p>
                        </div>

                        
                    </div>
                </NavLink>

                <NavLink to={"sms"}>
                <div className="menu-item">
                        <div className="icon-container">
                            <img src={smsIcon} alt="sms" />
                        </div>

                        <div className="menu-text-container">
                            <h1>SMS alert</h1>
                            <p>Click to see your financial SMS notifications</p>
                        </div>

                        
                    </div>
                </NavLink>

                <NavLink to={"investments"}>
                <div className="menu-item">
                        <div className="icon-container">
                            <img src={investmentsIcon} alt="investments" />
                        </div>

                        <div className="menu-text-container">
                            <h1>Investments</h1>
                            <p>Click to see how much you have invested</p>
                        </div>

                        
                    </div>
                </NavLink>
                    

                <NavLink to={"settings"}>
                <div className="menu-item">
                        <div className="icon-container">
                            <img src={settingsIcon} alt="settings" />
                        </div>

                        <div className="menu-text-container">
                            <h1>Settings</h1>
                            <p>Click to change your settings</p>
                        </div>

                        
                    </div>
                </NavLink>

                </div>

                <div className="bottom-item-container">
                    <div className="logout">
                    <button>
                <div className="menu-item">
                        <div className="icon-container">
                            <img src={logoutIcon} alt="logout" />
                        </div>

                        <div className="menu-text-container">
                            <h1>Logout</h1>
                        </div>

                        
                    </div>
                </button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Sidebar
