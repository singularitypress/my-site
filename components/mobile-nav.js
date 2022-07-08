import React, { useState } from "react";

// These are used to hide on tablet/laptop/desktop: d-md-none d-lg-none d-xl-none

/**
 * NOTE: To see why we have "d-md-none d-lg-none d-xl-none" view 2. in mobile-nav.md
 * 
 * NOTE: Styles can be found in /styles/_mobile-nav.scss
 * 
 * NOTE: If you want to hide your existing nav on mobile so you don't have that and this running at the same time,
 * add "d-xs-none d-sm-none" classes to it
 * 
 * @param navItems - view 1. in mobile-nav.md to see how you should pass items into navItems for <MobileNav navItems={ } />
 */
const MobileNav = ({ navItems }) => {
  const [isNavOpen, setIsNavOpen] = useState("closed");
  return (
    <>
      <button
        className="mobile-nav__button d-md-none d-lg-none d-xl-none"
        onClick={() => {
          if (isNavOpen === "closed") {
            setIsNavOpen("open");
          } else {
            setIsNavOpen("closed");
          }
        }}
      >
        Menu
      </button>
      <div className={`mobile-nav d-md-none d-lg-none d-xl-none ${isNavOpen}`}>
        <ul className="mobile-nav__links">
          {
            navItems.map((item, index) => {
              return (
                <li className="mobile-nav__link" key={index}>
                  <a href={item.link}>{item.text}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
