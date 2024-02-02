import logo from "../../assets/genie.png";
import { useNavigate } from "react-router-dom";
import './index.css'

const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="header">
      <img
        src={logo}
        className="logo"
        alt="logo"
        onClick={() => {
          navigate("../");
        }}
      />
      <p className="header-title">cover genie</p>
      {/* {localStorage.getItem("userName") && (
        <p className="username">{localStorage.getItem("userName")}</p>
      )} */}
    </div>
  );
};

export default Header;
