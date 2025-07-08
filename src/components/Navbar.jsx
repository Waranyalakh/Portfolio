import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Array รายการเมนู
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Skill", href: "#skill" },
    { name: "Project", href: "#project" },
    { name: "Contact", href: "#contact" },
    // เพิ่มเมนูอื่นได้ที่นี่
  ];

  return (
    <nav className="navbar bg-base-100 shadow-md px-4 py-2 fixed top-0 w-full z-50">
      <div className="flex-1">
        <h1 className="text-xl font-bold text-yellow">Portfolio Waranya Lakhom</h1>
      </div>
      <div className="flex-none">
        {/* เมนูปกติสำหรับจอขนาด md ขึ้นไป */}
        <div className="hidden md:flex gap-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="btn btn-ghost normal-case text-lg"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* ปุ่ม hamburger สำหรับจอเล็ก */}
        <div className="md:hidden">
          <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* เมนู dropdown สำหรับจอเล็ก */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-base-100 shadow-lg rounded-box flex flex-col gap-2 p-4 md:hidden z-50">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="btn btn-ghost"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
