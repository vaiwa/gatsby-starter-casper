import Link from "gatsby-link";

function GetNavList(config) {
  const NavList = []

  // const NavList = [
  //   {
  //     primaryText: "Home",
  //     // LeftIcon: <p>home</p>,
  //     component: Link,
  //     to: "/"
  //   },
  //   {
  //     divider: true
  //   }
  // ];

  NavList.push({ subheader: true, primaryText: "contact" });
  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        component: "a",
        href: link.url
      });
    });
  }

  NavList.push({ divider: true });
  NavList.push({ subheader: true, primaryText: "projects" });

  NavList.push({
    primaryText: "Deps",
    component: "a",
    href: "http://deps.vaiwa.cz/"
  });

  return NavList;
}
export default GetNavList;
