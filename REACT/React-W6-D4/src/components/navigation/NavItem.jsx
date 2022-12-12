import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const NavItem = ({ linkTitle, linkHref, light, menuitem }) => {
  return (
    <Typography
      as={menuitem ? "" : "li"}
      variant="small"
      color={light ? "white" : "gray" }
      className="mx-5 p-1 font-bold hover:underline"
    >
      <Link to={linkHref} className="flex items-center">
        {linkTitle}
      </Link>
    </Typography>
  );
};

export default NavItem;
