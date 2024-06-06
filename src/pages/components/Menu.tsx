import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const MenuWrapper = styled.div``;
const SubMenuWrapper = styled.div``;

const SubMenuLink = (props: any) => {
  const navigate = useNavigate();

  const currentPage = getPageName()

  return (
    <div
      className={`link subMenuLink ${currentPage === props.name ? 'selected' : ''}`}
      onClick={() => {
        navigate(props.to);
      }}
    >
      <a href="">{props.children}</a>
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
  } else if (
    page === "blog" ||
    page === "art" ||
    page === "videos" ||
    page === "photos" ||
    page === "3dprints"
  ) {
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

  useEffect(() => {
    setSelectedMainPage(getCurrentMainPage());
  }, [selectedParent]);

  const MENU_CONFIGURATION: IMenuItem[] = [
    {
      name: "start",
      path: "",
    },
    {
      name: "projects",
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
            className={`link mainMenuLink ${
              x.name === selectedMainPage ? "active" : ""
            }`}
            onClick={(e) => {
              if (x.children) {
                e.preventDefault();
              }
              setSelectedParent(x);
            }}
          >
            <span data-hover={x.name.toUpperCase()}>
              {x.name.toUpperCase()}
            </span>
          </MenuLink>
        ))}
      </MenuWrapper>
      {JSON.stringify(selectedParent)}
      <SubMenuWrapper id="subMenuContainer">
        <div
          className={`subMenuBar ${selectedParent?.children ? "" : "hidden"}`}
        >
          {selectedParent?.children?.map((x: IMenuItem) => (
            <SubMenuLink name={x.name} key={x.name} to={`/${x.name}`}>
              {x.name.toUpperCase()}
            </SubMenuLink>
          ))}
        </div>
      </SubMenuWrapper>
    </>
  );
};

export default Menu;
