import { Link } from "react-router-dom";
export function genLinkTag(to, text) {
  return (
    <Link className="underline italic text-blue-500" to={to}>
      {text}
    </Link>
  );
}
