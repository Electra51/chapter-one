import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <Link href={"/"} className="tracking-[0.04rem]">
          Home
        </Link>
      </li>
      <li>
        <Link href={"/"} className="tracking-[0.04rem]">
          Wishlist
        </Link>
      </li>
      <li>
        <Link href={"/"} className="tracking-[0.04rem]">
          About
        </Link>
      </li>{" "}
      <li>
        <Link href={"/"} className="tracking-[0.04rem]">
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="max-w-[1400px] navbar bg-base-100 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {menu}
            </ul>
          </div>
          <div>
            <Image src={logo} alt="" height={100} width={100} priority />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg">
              <circle className="cls-1" cx="12" cy="7.25" r="5.73" />
              <path
                className="cls-1"
                d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"
              />
            </svg>
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
