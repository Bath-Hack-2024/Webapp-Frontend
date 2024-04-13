import { Link, LinkProps } from "react-router-dom";
import "@/css/StyledLink.css";

interface StyledLinkProps {
  to: LinkProps["to"];
  children: React.ReactNode;
}

export default function StyledLink(props: StyledLinkProps) {
  const { to, children } = props;
  return (
    <Link
      className="link"
      to={to}
    >
      {children}
    </Link>
  )
}