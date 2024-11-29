import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const MenuWrapper = styled.div``;
const SubMenuWrapper = styled.div``;

const SubMenuLink = (props: any) => {
  const navigate = useNavigate();

  const currentPage = getPageName()

  return (
    <div
      className={`link subMenuLink ${(currentPage === props.name || currentPage === props.path) ? 'selected' : ''}`}
    >
      <div onClick={() => {
        navigate(props.to);
        props.callback();
      }}>
        {props.children}
      </div>
    </div>
  );
};

const MenuLink = styled(Link)``;

const getPageName = () => {
  var page = window.location.pathname;
  page = page.replace(".html", "");
  page = page.replace(".php", "");
  page = page.replace("/", "");
  if (page === "") {
    page = "start";
  }
  return page;
};

const getCurrentMainPage = () => {
  var page = getPageName();
  if (
    page === "start" ||
    page === "profile" ||
    page === "projects" ||
    page === "misc"
  ) {
    return page;
  } else if (
    page.includes("projects/") ||
    page === "flappyDoge" ||
    page === "gyroSnakeEditor"
  ) {
    return "projects";
  } else if (page === "bio" || page === "cv") {
    return "profile";
  } else if (page === "3dprints" || page === "3dmodels") {
    return "3d";
  } else if (page === "blog" || page === "art") {
    return "misc";
  } else if (page.includes("blog/")) {
    return "misc";
  } else {
    return "NONE";
  }
};

interface IMenuItem {
  name: string;
  path?: string;
  children?: Array<IMenuItem>;
}

const Menu = () => {
  const [selectedParent, setSelectedParent] = useState({
    name: undefined,
    path: undefined,
    children: [],
  });
  const [selectedMainPage, setSelectedMainPage] = useState("");
  let location = useLocation();

  useEffect(() => {
    setSelectedMainPage(getCurrentMainPage());
  }, [location]);

  useEffect(() => {
    setSelectedMainPage(getCurrentMainPage());

    const item = MENU_CONFIGURATION.find(x => x.name === getCurrentMainPage());

    if (item && item.children && item.children.length > 0) {
      setSelectedParent(item);
      $('.subMenuBar').slideDown(350);
    }
  }, []);

  useEffect(() => {
    setSelectedMainPage(getCurrentMainPage());

    const item = MENU_CONFIGURATION.find(x => x.name === selectedParent.name);

    if (item && item.children && item.children.length > 0) {
      $('.subMenuBar').slideDown(350);
    }
  }, [selectedParent]);

  const MENU_CONFIGURATION: IMenuItem[] = [
    {
      name: "start",
      path: "",
    },
    {
      name: "profile",
      children: [
        {
          name: "bio",
        },
        {
          name: "cv",
        },
      ],
    },
    {
      name: "projects",
    },
    {
      name: "3d",
      children: [
        {
          name: "3d prints",
          path: '3dprints'
        },
        {
          name: "3d models",
          path: '3dmodels'
        },
      ],
    },
    {
      name: "misc",
      children: [
        {
          name: "art",
        },
        {
          name: "blog",
        },
      ],
    },
  ];

  return (
    <>
      <MenuWrapper id="menu">
        {MENU_CONFIGURATION.map((x) => (
          <MenuLink
            key={x.name}
            to={`/${x.path !== undefined ? x.path : x.name}`}
            className={`link mainMenuLink ${x.name === selectedMainPage ? "active" : ""
              }`}
            onClick={(e) => {
              if (x.children) {
                e.preventDefault();
              }
              //document.querySelector('.subMenuBar').style.display = 'block';
              //$('.subMenuBar').slideUp(350);
              setSelectedParent(x);
              //$('.subMenuBar').slideDown(350);
            }}
          >
            <span data-hover={x.name.toUpperCase()}>
              {x.name.toUpperCase()}
            </span>
          </MenuLink>
        ))}
      </MenuWrapper>
      {/* {JSON.stringify(selectedParent)} */}
      <SubMenuWrapper id="subMenuContainer">
        <div
          className={`subMenuBar ${selectedParent?.children ? "" : "hidden"}`}
        >
          {selectedParent?.children?.map((x: IMenuItem) => (
            <SubMenuLink name={x.path ?? x.name} key={x.name} to={`/${x.path ?? x.name}`} callback={() => {
              setSelectedMainPage(getCurrentMainPage());
            }}>
              {x.name.toUpperCase()}
            </SubMenuLink>
          ))}
        </div>
      </SubMenuWrapper>
    </>
  );
};

export default Menu;
