import { useState } from "react";

function Header({
  brand,
  navItems,
  activePage,
  onNavigate,
  theme,
  onToggleTheme,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (pageId) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <button className="brand-mark" onClick={() => handleNavigate("home")}>
          <span className="brand-dot" />
          <span className="brand-text">{brand}</span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activePage === item.id ? "active" : ""}`}
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className={`theme-toggle theme-toggle--classic ${
            theme === "light" ? "theme-toggle--toggled" : ""
          }`}
          onClick={onToggleTheme}
          title="Toggle theme"
          aria-label="Toggle theme"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="1em"
            height="1em"
            fill="currentColor"
            strokeLinecap="round"
            className="theme-toggle__classic"
            viewBox="0 0 32 32"
          >
            <clipPath id="theme-toggle__classic__cutout">
              <path d="M0-5h30a1 1 0 0 0 9 13v24H0Z" />
            </clipPath>
            <g clipPath="url(#theme-toggle__classic__cutout)">
              <circle cx="16" cy="16" r="9.34" />
              <g stroke="currentColor" strokeWidth="1.5">
                <path d="M16 5.5v-4" />
                <path d="M16 30.5v-4" />
                <path d="M1.5 16h4" />
                <path d="M26.5 16h4" />
                <path d="m23.4 8.6 2.8-2.8" />
                <path d="m5.7 26.3 2.9-2.9" />
                <path d="m5.8 5.8 2.8 2.8" />
                <path d="m23.4 23.4 2.9 2.9" />
              </g>
            </g>
          </svg>
        </button>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
