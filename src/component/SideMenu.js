import { useEffect, useState } from "react";
const profile = require("../image/pic.png");
const category = require("../image/Category.png");
const note = require("../image/note.png");
const chart = require("../image/Chart.png");
const people = require("../image/people.png");
const report = require("../image/presention.png");
const user = require("../image/security-user.png");
const key = require("../image/key.png");
const logo = require("../image/Logo.png");

const SideMenu = () => {
  const [active, setActive] = useState("Dashboard");
  const [showMenu, setShowMenu] = useState(false);
  const sideMenuData = [
    {
      logo: category,
      name: "Dashboard",
      navigate: "",
    },
    {
      logo: note,
      name: "Create Campaign",
      navigate: "",
    },
    {
      logo: chart,
      name: "Analytics",
      navigate: "",
    },
    {
      logo: people,
      name: "Audience Segment",
      navigate: "",
    },
    {
      logo: report,
      name: "Reports",
      navigate: "",
    },
  ];
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""
    }
  }, [showMenu]);

  return (
    <div className="sidebar">
      <div className="menu-wrapper">
        <div className="logo">
          <img src={logo} width={"47px"} height={"46px"} />
          <div> JUUUNO</div>
        </div>
        <div className="sideMenu" onClick={() => setShowMenu(!showMenu)}>
          <div className="menu"></div>
          <div className="menu"></div>
          <div className="menu"></div>
        </div>
      </div>
      <nav className={`navbar ${showMenu ? "showMenu" : "hideMenu"}`}>
        <div className="logo mobile-logo" onClick={() => {
          setShowMenu(false);
        }}>
          <img src={logo} width={"47px"} height={"46px"} />
          <div> JUUUNO</div>
        </div>
        <ul>
          {sideMenuData?.map((list, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setActive(list?.name);
                  setShowMenu(false);
                }}
                className={`${active === list?.name ? "active" : ""}`}
              >
                <img src={list?.logo} width={"22px"} height={"22px"} />{" "}
                {list?.name}
              </li>
            );
          })}
        </ul>
        <div className="profile-wrapper">
          <div className="profile-block">
            <img src={profile} width={"43px"} height={"42px"} />
            <div>
              Ads
              <div>Advertiser Account</div>
            </div>
          </div>
          <ul>
            <li
              onClick={() => {
                setActive("Profile");
                setShowMenu(false);
              }}
              className={`${active === "Profile" ? "active" : ""}`}
            >
              <img src={user} width={"24px"} height={"24px"} /> Profile
            </li>
            <li
              onClick={() => setActive("Authentication")}
              className={`${active === "Authentication" ? "active" : ""}`}
            >
              <img src={key} width={"24px"} height={"24px"} /> 2f Authentication
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default SideMenu;
