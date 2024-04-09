import { useInView } from "react-intersection-observer";
import { useHeaderStore } from "../../../store/use-header-store";
import clsx from "clsx";

const Header = () => {
  const { headerState } = useHeaderStore();

  return (
    <header id="header" className="w-full sticky top-0 h-0">
      <nav
        className={clsx(
          "flex justify-between items-center h-100 w-full mx-auto px-100",
          headerState === "light" && "bg-yellow-500",
          headerState === "dark" && "bg-black"
        )}
      >
        <h1 className="text-white text-24">HEADER</h1>
        <ul className="flex text-white gap-40">
          <li>nav-1</li>
          <li>nav-2</li>
          <li>nav-3</li>
          <li>nav-4</li>
          <li>nav-5</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
