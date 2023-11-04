/*
  https://daisyui.com/components/navbar/
  responsive (dropdown menu on small screen, center menu on large screen)
*/

export default function Navbar() {
  return (
    /* 
      with the fixed attribute the navbar will always remain at the top even when scrolling down
      with the z-10 attribute the navbar is always in the foreground 
    */
    <div className="navbar z-10 fixed bg-base-200">
        {/* with the navbar-start attribute the brand name is on the left side of the navbar */}
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl">rewear.</a>
      </div>
      {/* 
        with the navbar-end attribute, the dropdown menu is on the right side of the navbar
        with the lg:hidden attribute the dropdown menu is not displayed from  minimum breakpoints of 1024px
      */} 
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            <li>
              <a href="#contribute-section">contribute</a>
            </li>
            <li>
              <a href="#how-does-it-work-section">how does it work</a>
            </li>
            <li>
              <a href="#who-we-are-section">who we are</a>
            </li>
          </ul>
        </div>
      </div>
      {/* 
        with the navbar-end attribute, the nav links are on the right side of the navbar
        with the hidden and lg:flex attributes, the nav links are not displayed if the breakpoints are less than 1024px and if this is not the case, the nav links are displayed and flexibly adjusted at the breakpoints
      */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <a href="#contribute-section">contribute</a>
          </li>
          <li>
            <a href="#how-does-it-work-section">how does it work</a>
          </li>
          <li>
            <a href="#who-we-are-section">who we are</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
