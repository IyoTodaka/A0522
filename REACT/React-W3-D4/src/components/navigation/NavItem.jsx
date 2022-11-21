import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const NavItem = ({ linkTitle, linkHref }) => {
  return (
    <Typography
      as="li"
      variant="small"
      color="gray"
      className="p-1 font-bold"
    >
      <Link to={linkHref} className="flex items-center">
        {linkTitle}
      </Link>
    </Typography>
  );
};

export default NavItem;
