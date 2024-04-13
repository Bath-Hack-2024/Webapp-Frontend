import { Link, LinkProps, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "@/css/StyledLink.css";

interface StyledLinkProps {
  to: LinkProps["to"];
  children: React.ReactNode;
}

function StyledLink({ to, children }: StyledLinkProps) {
  const location = useLocation();

  const [linkClass, setLinkClass] = useState("link");

  useEffect(() => {
    setLinkClass(location.pathname === to ? "link active" : "link");
  }, [location.pathname]);

  return (
    <Link
      className={linkClass}
      to={to}
    >
      {children}
    </Link>
  )
}

export default StyledLink;