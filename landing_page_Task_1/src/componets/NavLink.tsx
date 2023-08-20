import Style from "./NavLink.module.css";
import { Link } from "react-router-dom";
interface NavLinkProps {
  link: string;
  title: string;
}
const NavLink: React.FC<NavLinkProps> = ({ link, title }) => {
  return (
    <Link to={link == "Home" ? "" : `${link}`} className={Style.link}>
      <div className={Style.container}>
        <div className={Style.main}>{title}</div>
        <div className={Style.line}></div>
      </div>
    </Link>
  );
};
export default NavLink;
