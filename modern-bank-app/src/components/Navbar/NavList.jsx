import { navLinks } from "../../constants";

const NavList = ({ isMobile }) => {
  const baseClasses = `list-none justify-end items-center flex-1`;
  const mobileClasses = `${isMobile ? 'flex flex-col' : 'hidden sm:flex'}`;
  const classes = `${baseClasses} ${mobileClasses}`;

  return (
    <ul className={classes}>
      {navLinks.map((link, index) => (
        <li
          key={link.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
            index === navLinks.length - 1 ? "mr-0" : isMobile ? "mb-4" : "mr-10"
          }`}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
