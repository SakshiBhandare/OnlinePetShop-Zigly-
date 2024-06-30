import React, { useEffect } from 'react';
import { Navbar, Collapse, Typography, IconButton, List, ListItem, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Bars4Icon, GlobeAmericasIcon, NewspaperIcon, PhoneIcon, RectangleGroupIcon, SquaresPlusIcon, SunIcon, TagIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from 'react-redux';
import { fetchmenuall } from '../app/slices/menuSlice';

const navListMenuItems = [
  {
    title: "Food"
  },
  {
    title: "Treats"
  },
  {
    title: "Toys"
  },
  {
    title: "Grooming"
  },
  {
    title: "Accessories"
  },
  {
    title: "Bowls & Feeders"
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">

          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>

          </div>
        </MenuItem>
      </a>
    ),
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-white text-xl"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Dogs
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchmenuall({}))

  }, [])
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      {/* <Typography
        as="a"
        href="#"
        variant="small"
        color="white"
        className="font-medium text-xl"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography> */}
      <NavListMenu />

      {
        menu?.map((element, index) => {
          return (
            <>
              <Typography key={index} as="a" href="#" variant="small" color="white" className="font-medium text-xl">
                <ListItem className="flex items-center gap-2 py-2 pr-4">{element?.mname}</ListItem>
              </Typography>
            </>
          )
        })
      }

    </List>
  );
}

function Menubar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-full h-max px-4 py-2 bg-[#21005b]">
      <div className="flex items-center lg:justify-center sm:justify-between text-white text-xl">
        {/* <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:block"
        >
          Pets House
        </Typography> */}
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default Menubar;