import { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router";
import logo from "../assets/images/finance-quizzes-logo.png";

type NavItem = {
  name: string;
  href: string;
};

function NavBar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const moreBtnRef = useRef<HTMLButtonElement | null>(null);
  const moreMenuRef = useRef<HTMLDivElement | null>(null);

  const isHome = location.pathname === "/";

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  // ESC to close menus
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setMoreOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close desktop dropdown when clicking outside or moving focus outside
  useEffect(() => {
    if (!moreOpen) return;

    const isInside = (target: EventTarget | null) => {
      if (!(target instanceof Node)) return false;
      const btn = moreBtnRef.current;
      const menu = moreMenuRef.current;
      return Boolean((btn && btn.contains(target)) || (menu && menu.contains(target)));
    };

    const onPointerDown = (e: MouseEvent | PointerEvent | TouchEvent) => {
      if (isInside(e.target)) return;
      setMoreOpen(false);
    };

    const onFocusIn = (e: FocusEvent) => {
      if (isInside(e.target)) return;
      setMoreOpen(false);
    };

    window.addEventListener("pointerdown", onPointerDown, { capture: true });
    window.addEventListener("focusin", onFocusIn, { capture: true });

    return () => {
      window.removeEventListener("pointerdown", onPointerDown, { capture: true } as any);
      window.removeEventListener("focusin", onFocusIn, { capture: true } as any);
    };
  }, [moreOpen]);

  const navItems: NavItem[] = useMemo(
    () => [
      { name: "Finance", href: "/finance-quiz" },
      { name: "Investing", href: "/investing-quiz" },
      { name: "Budgeting", href: "/budgeting-quiz" },
      { name: "Banking & Credit", href: "/banking-and-credit-quiz" },
    ],
    [],
  );

  const moreItems: NavItem[] = useMemo(
    () => [
      { name: "Saving Money", href: "/saving-money-quiz" },
      { name: "Financial Planning", href: "/financial-planning-quiz" },
      { name: "Stock Market Basics", href: "/stock-market-basics-quiz" },
      { name: "Retirement Basics", href: "/retirement-basics-quiz" },
      { name: "Economics", href: "/economics-quiz" },
      { name: "Business Finance", href: "/business-finance-quiz" },
      { name: "Insurance Basics", href: "/insurance-basics-quiz" },
      { name: "Q&A List", href: "/finance-quiz-questions" },
    ],
    [],
  );

  const brandLinkClass = useMemo(
    () =>
      `flex items-center gap-2 transition cursor-pointer ${
        isHome ? "text-teal-300" : "hover:opacity-90"
      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B2B]`,
    [isHome],
  );

  const desktopLinkBase =
    "font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B2B]";

  const mobileLinkBase =
    "block w-full px-5 py-3 text-left text-base font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B2B]";

  const closeAllMenus = () => {
    setOpen(false);
    setMoreOpen(false);
  };

  return (
    <header className="bg-[#0B1B2B] border-b border-slate-700/40 text-white sticky top-0 z-50">
      <nav
        className="mx-auto max-w-[1400px] px-4 py-3 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Logo & Brand */}
        <NavLink to="/" className={brandLinkClass} onClick={closeAllMenus}>
          <img
            src={logo}
            alt="FinanceQuizzes logo"
            className="h-8 w-8 select-none"
          />
          <span
            className={`font-semibold text-xl tracking-tight ${
              isHome ? "text-teal-300" : "text-white"
            }`}
          >
            FinanceQuizzes
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-4 xl:gap-8 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setMoreOpen(false)}
              className={({ isActive }) =>
                `${desktopLinkBase} ${
                  isActive
                    ? "text-teal-300"
                    : "text-slate-200 hover:text-teal-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* More dropdown */}
          <div className="relative">
            <button
              ref={moreBtnRef}
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              className={`${desktopLinkBase} text-slate-200 hover:text-teal-300 cursor-pointer`}
              aria-haspopup="menu"
              aria-expanded={moreOpen}
            >
              All Other Quizzes ▼
            </button>

            {moreOpen ? (
              <div
                ref={moreMenuRef}
                className="absolute right-0 mt-2 w-64 rounded-2xl border border-slate-700/50 bg-[#0B1B2B] shadow-xl overflow-hidden"
                role="menu"
                aria-label="More quizzes"
              >
                <ul className="py-2">
                  {moreItems.map((item) => (
                    <li key={item.name} role="none">
                      <NavLink
                        to={item.href}
                        onClick={() => setMoreOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B2B] ${
                            isActive
                              ? "text-teal-300 bg-slate-900/30"
                              : "text-slate-200 hover:text-teal-300 hover:bg-slate-900/20"
                          }`
                        }
                        role="menuitem"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          ref={toggleBtnRef}
          type="button"
          onClick={() => {
            setOpen((v) => !v);
            setMoreOpen(false);
          }}
          className="lg:hidden text-slate-200 cursor-pointer hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B2B]"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile Backdrop + Panel */}
      {open ? (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/40 cursor-pointer hover:bg-black/50 transition-colors"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div
            id="mobile-nav"
            className="absolute top-0 left-0 right-0 bg-[#0B1B2B] border-b border-slate-700/40 shadow-lg"
            role="dialog"
            aria-modal="true"
          >
            <div className="mx-auto max-w-[1400px] px-4 py-3 flex items-center justify-between text-left">
              <span className="text-slate-200 font-medium">Menu</span>
              <button
                type="button"
                className="text-slate-200 cursor-pointer hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B2B]"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <span className="text-2xl leading-none">✕</span>
              </button>
            </div>

            <div className="border-t border-slate-700/40">
              <ul className="flex flex-col py-1 text-left">
                {[...navItems, ...moreItems].map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `${mobileLinkBase} ${
                          isActive
                            ? "text-teal-300 bg-slate-900/30"
                            : "text-slate-200 hover:text-teal-300 hover:bg-slate-900/20"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default NavBar;
