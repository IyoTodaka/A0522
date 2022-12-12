import { Link } from "react-router-dom";
import uuid from "react-uuid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from "@material-tailwind/react";

import NavItem from "./NavItem";
import Onigiri from "../../assets/onigiri.png";

const articleNav = [
  { title: "New Post", link: "/post/new" },
  { title: "Article1", link: "/posts/1" },
  { title: "Article2", link: "/posts/2" },
  { title: "Article3", link: "/posts/3" },
]

const navItems = [
  { title: "Home", link: "/" },
  { title: "Posts", link: "/posts" },
  { title: "Login", link: "/login" },
  { title: "Register", link: "/register" },
]

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

            {navItems.map(item => <NavItem key={uuid()} linkTitle={item.title} linkHref={item.link} light />)}

            <MenuHandler>
              <Button size="md" variant="text">
                Articles
              </Button>
            </MenuHandler>
            <MenuList>
              {articleNav.map(link => (
                <MenuItem key={uuid()}>
                  <NavItem key={uuid()} linkTitle={link.title} linkHref={link.link} menuitem />
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavList;
