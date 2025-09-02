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
    },
    {
      title: "Products",
      items: ["Product 1", "Product 2", "Product 3"],
    },
    {
      title: "PR",
      items: ["News", "Events", "Press Releases"],
    },
    {
      title: "Community",
      items: ["Forum", "Support", "Guides"],
    },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (i) => {
    setOpenDropdown(openDropdown === i ? null : i);
  };

  return (
    <section>
      <nav className="flex justify-between items-center px-4 py-3 bg-black text-white md:px-16">
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
                className={`z-10 absolute left-1/2 -translate-x-1/2 mt-2 overflow-hidden transition-all duration-300 ease-in-out 
                ${openDropdown === i ? "opacity-100 max-h-96 w-56" : "opacity-0 max-h-0 w-0"}`}
              >
                <div className="bg-black text-white text-sm rounded-2xl py-4 px-auto space-y-2 text-center">
                  {menu.items.map((item, j) => (
                    <a
                      key={j}
                      href="#"
                      className={`block hover:text-gray-300 transition ${openDropdown !== i && "opacity-0"}`}
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
          onClick={() => setMenuOpen(!menuOpen)}
          className="py-1 px-2 rounded-md hover:bg-white hover:bg-opacity-15 duration-300 transition inline-block md:hidden"
        >
          <svg fill="#FFFFFF" version="1.1" id="Capa_1" viewBox="0 0 24.75 24.75" className="w-6 h-6">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
              <g> 
                <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2 c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2 c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"></path>
              </g> 
            </g>
          </svg>
        </button>
      </nav>
    </section>
  );
}

export default Header;
