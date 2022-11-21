import { Link } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from "@material-tailwind/react";

import NavItem from "./NavItem";
import Onigiri from "../../assets/onigiri.png";

const NavList = () => (
  <nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-6">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
      <div className="pl-4 flex items-center">
        <Link
          className="flex items-center text-white no-underline hover:no-underline font-bold text-1xl lg:text-2xl"
          to="/"
        >
          <img src={Onigiri} className="max-w-none w-16 mr-2.5" />
          RiceIsLife
        </Link>
      </div>

      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-white p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <Menu>
            <MenuHandler>
              <Button size="md" variant="text">
                Articles
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>
                <NavItem linkTitle="Article1" linkHref="/post/1" />
              </MenuItem>
              <MenuItem>
                <NavItem linkTitle="Article2" linkHref="/post/2" />
              </MenuItem>
              <MenuItem>
                <NavItem linkTitle="Article3" linkHref="/post/3" />
              </MenuItem>
            </MenuList>
          </Menu>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavList;
