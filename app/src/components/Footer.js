import { useState } from "react";

export default function Footer() {
  const footerMenus = [
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
      items: ["Life Saving Towel", "Life Saving Mask", "Oxygen Generator"],
    },
    {
      title: "PR",
      items: ["Promotional Videos", "Photos", "Press Release", "Partners"],
    },
    {
      title: "Community",
      items: ["Notice", "Inquiry", "Exchanges and Returns"],
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (i) => {
    setOpenAccordion(openAccordion === i ? null : i);
  };  

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 grid-rows-2 md:grid-cols-6 md:grid-rows-1 gap-8">
        
        <div className="md:col-span-2 px-6 py-10 bg-gray-900 md:order-1 order-2 text-left">
          <div className="flex items-center mb-4">
            <img src="/logo.png" alt="Saving Story Logo" className="h-8 w-auto" />
          </div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Refusal of Unauthorized Email Collection</a></li>
          </ul>

          <div className="mt-6 text-sm space-y-1">
            <p><strong>Saving Story Co., Ltd.</strong> CEO Jang Seung</p>
            <p>#210, 2nd Floor, 594-7, Dongtangiheung-ro, Hwaseong-si, Gyeonggi-do, Republic of Korea</p>
            <p>TEL: +82-70-4909-7570 FAX: +82-31-377-6739</p>
            <p>E-mail: savingstory@hanmail.net</p>
          </div>

          <p className="mt-6 text-xs text-gray-400">
            Copyright © 2023 Saving Story. All Rights Reserved.
          </p>
        </div>

        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-10 md:order-2 order-1">
          {footerMenus.map((menu, i) => (
            <div className="md:block hidden" key={i}>
              <h3 className="font-semibold mb-4">{menu.title}</h3>
              <ul className="space-y-2 text-sm">
                {menu.items.map((item, j) => (
                  <li key={j}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {footerMenus.map((menu, i) => (
            <div className="md:hidden" key={i}>
              <div className="border-b border-gray-700">
                <button 
                  className="w-full flex justify-between items-center py-2 font-semibold text-left hover:text-gray-300"
                  onClick={() => toggleAccordion(i)}>
                  {menu.title}
                  <span
                    className={`transition-transform ${
                      openAccordion === i ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div className={`${openAccordion === i ? "max-h-96" : "max-h-0"} overflow-hidden transition-all duration-300 bg-gray-900`}>
                  <ul class="pl-4 py-2 space-y-3 text-left">
                    {menu.items.map((item, j) => (
                      <li key={j}>
                        <a href="#" className="hover:underline">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}