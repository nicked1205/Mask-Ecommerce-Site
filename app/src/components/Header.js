import { useState } from "react";

function Header() {
  const menus = [
    {
      title: "Company",
      items: [
        "Company Overview",
        "CEO's Message",
        "History",
        "Management Philosophy",
        "Patents and Certifications",
        "Recruitment",
        "Directions",
      ],
      paths: [
        "/company-overview",
        "/ceo-message",
        "/history",
        "/management-philosophy",
        "/patents-and-certifications",
        "/recruitment",
        "/directions",
      ]
    },
    {
      title: "Products",
      items: ["Life Saving Towel", "Life Saving Mask", "Oxygen Generator"],
      paths: ["/products/towel", "/products/mask", "/products/oxygen-generator"]
    },
    {
      title: "PR",
      items: ["Promotional Videos", "Photos", "Press Release", "Partners"],
      paths: ["/pr/videos", "/pr/photos", "/pr/press-release", "/pr/partners"]
    },
    {
      title: "Community",
      items: ["Notice", "Inquiry", "Exchanges and Returns"],
      paths: ["/community/notice", "/community/inquiry", "/community/exchanges-returns"]
    },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (i) => {
    setOpenDropdown(openDropdown === i ? null : i);
  };

  return (
    <section>
      <nav className="fixed flex justify-between items-center px-4 py-3 bg-black text-white md:px-16 z-20 w-full">
        <div className="logo">
          <h1 className="text-lg font-bold">MyApp</h1>
        </div>

        <ul className="hidden space-x-6 md:flex">
          {menus.map((menu, i) => (
            <li key={i} className="relative">
              <button
                onClick={() => toggleDropdown(i)}
                className="py-1 px-2 rounded-md hover:bg-white hover:bg-opacity-15 duration-300 transition inline-block"
              >
                {menu.title}
              </button>

              <div
                className={`z-20 absolute left-1/2 -translate-x-1/2 mt-2 overflow-hidden transition-all duration-300 ease-in-out 
                ${openDropdown === i ? "opacity-100 max-h-96 w-56" : "opacity-0 max-h-0 w-0"}`}
              >
                <div className="bg-black text-white text-sm rounded-2xl py-4 space-y-2 text-center">
                  {menu.items.map((item, j) => (
                    <a
                      key={j}
                      href={menu.paths[j]}
                      className="block hover:text-gray-300 transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(true)}
          className="py-1 px-2 rounded-md hover:bg-white hover:bg-opacity-15 duration-300 transition inline-block md:hidden"
        >
          <svg
            fill="#FFFFFF"
            viewBox="0 0 24.75 24.75"
            className="w-6 h-6"
          >
            <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
            c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2
            c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"></path>
          </svg>
        </button>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-black text-white shadow-lg transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
            <h2 className="text-lg font-bold">Menu</h2>
            <button onClick={() => setMenuOpen(false)} className="text-white">
              ✕
            </button>
          </div>
          <div className="p-4 space-y-4">
            {menus.map((menu, i) => (
              <div key={i} className="border-b border-gray-700 pb-2">
                <button
                  onClick={() => toggleDropdown(i)}
                  className="flex justify-between items-center w-full text-left font-semibold"
                >
                  {menu.title}
                  <span
                    className={`transition-transform ${
                      openDropdown === i ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openDropdown === i ? "max-h-60 mt-2" : "max-h-0"
                  }`}
                >
                  <ul className="pl-2 space-y-2 text-sm">
                    {menu.items.map((item, j) => (
                      <li key={j}>
                        <a
                          href={menu.paths[j]}
                          className="block hover:text-gray-300 transition"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
