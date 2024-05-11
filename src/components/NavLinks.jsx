import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    text: "Home",
    path: "/",
  },
  {
    id: 2,
    text: " Create recipe",
    path: "/about",
  },
  {
    id: 3,
    text: " Change thema",
    onClick: () => {
      dispatch({ type: "newTheme" });
    },
  },
];

function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link className="btn mt-2" key={link.id} to={link.path}>
            {link.text}
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;
