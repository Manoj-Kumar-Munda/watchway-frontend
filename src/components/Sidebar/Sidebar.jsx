import Logo from "../Header/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { cn } from "../../utils/cn";
import { useDispatch } from "react-redux";
import { toggleMenu, toggleSmSidebar } from "../../store/slices/appSlice";
import SidebarItems from "./SidebarItems";
import { memo } from "react";

const Sidebar = ({ isSmMenuOpen = false, className = "" }) => {
  const dispatch = useDispatch();

  const handleSmSidebar = () => {
    dispatch(toggleSmSidebar());
  };
  return (
    <div
      className={cn(
        " fixed inset-0 z-50 w-0 transition-colors ",
        isSmMenuOpen && "w-auto bg-slate-800/60 block"
      )}
    >
      <div
        className={cn(
          "bg-white fixed top-0 bottom-0 z-50 transition-all duration-500 -left-full  max-w-56 px-2 sm:px-4 flex flex-col gap-2 w-full",
          isSmMenuOpen && "left-0"
        )}
      >
        <div className="inline-flex items-center gap-4 py-3">
          <button className="">
            <RxHamburgerMenu size={24} onClick={handleSmSidebar} />
          </button>
          <Logo />
        </div>

        <SidebarItems />
      </div>
    </div>
  );
};

export const LgSidebar = memo(({ isMenuOpen = true, className = "" }) => {
  const dispatch = useDispatch();
  const handleLgSidebar = () => {
    dispatch(toggleMenu());
  };
  return (
    <div
      className={cn(
        "hidden   bg-white fixed top-0 bottom-0 z-50 transition-all duration-500 -left-full  max-w-56 px-2 sm:px-4 md:flex flex-col gap-2 w-full",
        isMenuOpen && "md:left-0"
      )}
    >
      <div className="inline-flex items-center gap-4 py-3">
        <button className="hidden md:inline">
          <RxHamburgerMenu size={24} onClick={handleLgSidebar} />
        </button>
        <Logo />
      </div>

      <SidebarItems />
    </div>
  );
});

export default memo(Sidebar);
