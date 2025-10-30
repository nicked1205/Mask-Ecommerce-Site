import { useEffect, useMemo, useState } from "react";
import { FaHome, FaChevronRight, FaChevronLeft, FaBars } from "react-icons/fa";
import Logo from "../assets/images/logo.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

export default function Header() {
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
      ],
    },
    {
      title: "Products",
      items: ["Life Saving Mask"],
      paths: ["/products/mask"],
    },
    {
      title: "PR",
      items: ["Promotional Videos", "Photos", "Press Release", "Partners"],
      paths: ["/pr/videos", "/pr/images", "/pr/press-release", "/pr/partners"],
    },
    {
      title: "Community",
      items: ["Notice", "Inquiry"],
      paths: ["/community/notice", "/community/inquiry"],
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubnav, setShowSubnav] = useState(false);

  // detect current section + page
  const { sectionIdx, pageIdx } = useMemo(() => {
    const path = typeof window !== "undefined" ? window.location.pathname : "";
    for (let i = 0; i < menus.length; i++) {
      const j = menus[i].paths.findIndex((p) => p === path);
      if (j !== -1) return { sectionIdx: i, pageIdx: j };
    }
    return { sectionIdx: 0, pageIdx: 0 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // close subnav on route change
    const handleRouteChange = () => {
      setShowSubnav(false);
    }; 
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      showSubnav && setShowSubnav(false);
    }
  }, [menuOpen, showSubnav]);

  const activeSection = menus[sectionIdx];
  const activePage = activeSection.items[pageIdx] || activeSection.items[0];

  const isHome = typeof window !== "undefined" && window.location.pathname === "/";

  // if (isHome) {
  //   return (
  //     <section className="relative h-screen w-full overflow-hidden">
  //       {/* Background slider */}
  //       <Swiper
  //         modules={[Autoplay, Pagination]}
  //         autoplay={{ delay: 6000, disableOnInteraction: false }}
  //         pagination={{ clickable: true }}
  //         loop
  //         className="absolute inset-0 h-full w-full"
  //       >
  //         {[
  //           "/images/slide1.jpg",
  //           "/images/slide2.jpg",
  //           "/images/slide3.jpg",
  //         ].map((src, i) => (
  //           <SwiperSlide key={i}>
  //             <img
  //               src={src}
  //               alt={`Slide ${i + 1}`}
  //               className="object-cover w-full h-full"
  //             />
  //             <div className="absolute inset-0 bg-black/40"></div>
  //           </SwiperSlide>
  //         ))}
  //       </Swiper>

  //       {/* Transparent header bar */}
  //       <header className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-4 bg-transparent">
  //         <a href="/" className="flex items-center gap-2">
  //           <img src="/logo.svg" alt="Saving Story" className="h-8 md:h-10" />
  //         </a>

  //         <button
  //           onClick={() => setMenuOpen(true)}
  //           className="flex items-center bg-brand-lightBg hover:bg-brand-border/40 text-brand-text rounded-full h-full aspect-square py-3 px-3 shadow-sm transition"
  //         >
  //           <FaBars size={16} />
  //         </button>
  //       </header>

  //       {/* Center text content */}
  //       <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
  //         <img
  //           src="/images/fire-agency.png"
  //           alt="National Fire Agency"
  //           className="h-24 mb-4"
  //         />
  //         <h2 className="text-xl md:text-3xl font-semibold leading-snug max-w-2xl">
  //           Did you know that approximately 70% of fire casualties are caused by
  //           suffocation due to toxic gas?
  //         </h2>
  //         <p className="mt-3 text-sm md:text-base text-gray-200 max-w-xl">
  //           Sanso Drim Life Saving Towel and Sanso Drim Life Saving Mask protect your life from fire.
  //         </p>
  //       </div>

  //       {/* Side menu (reuses your existing logic) */}
  //       {(menuOpen) && (
  //         <div
  //           className={`fixed inset-0 z-40 transition-opacity duration-300 ${
  //             menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
  //           }`}
  //           style={{ background: "rgba(20,20,20,0.35)" }}
  //           onClick={() => setMenuOpen(false)}
  //         >
  //           <div
  //             className={`absolute top-0 right-0 w-72 h-full bg-brand-footerBg text-white shadow-lg transform transition-transform duration-300 ${
  //               menuOpen ? "translate-x-0" : "translate-x-full"
  //             }`}
  //             onClick={(e) => e.stopPropagation()}
  //           >
  //             <div className="flex justify-between items-center px-4 py-4 border-b border-brand-accent">
  //               <h2 className="text-lg font-bold">Menu</h2>
  //               <button onClick={() => setMenuOpen(false)} aria-label="Close">✕</button>
  //             </div>
  //             <div className="p-4 space-y-6">
  //               {menus.map((m, i) => (
  //                 <div key={i} className="border-b border-brand-accent/60 pb-3">
  //                   <h3 className="font-semibold text-brand-accent mb-2">{m.title}</h3>
  //                   <ul className="space-y-2 text-sm">
  //                     {m.items.map((lbl, j) => (
  //                       <li key={j}>
  //                         <a
  //                           href={m.paths[j]}
  //                           className="block hover:text-brand-accentHover transition duration-200"
  //                           onClick={() => setMenuOpen(false)}
  //                         >
  //                           {lbl}
  //                         </a>
  //                       </li>
  //                     ))}
  //                   </ul>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </section>
  //   );
  // }

  return (
    <section className="relative z-50">
      <div className="w-full bg-brand-bg px-4 md:px-8 py-2 relative min-h-[64px] flex flex-row justify-between items-center">
        {/* --- LEFT SIDE: Logo on Home, Breadcrumb on others --- */}
        {isHome ? (
          // 🏠 Home version: just logo
          <a href="/" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="PNTD"
              className="h-16 md:h-20 hover:opacity-80 transition"
            />
          </a>
        ) : (
          // 📂 Other pages: breadcrumb + subnav transition
          <>
            {/* --- BREADCRUMB BAR --- */}
            <div
              className={`inset-0 flex items-center justify-between transition-all duration-300 ease-in-out ${
                showSubnav
                  ? "opacity-0 -translate-x-full pointer-events-none"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <div className="flex items-center gap-2 rounded-full bg-brand-surface shadow-sm border border-brand-border px-4 py-2 transition">
                {/* Home → link to "/" */}
                <a href="/" className="flex items-center gap-2">
                  <FaHome className="text-brand-textMuted hover:text-brand-primaryHover duration-300" />
                </a>

                <span className="text-sm text-brand-text">{activeSection.title}</span>
                <FaChevronRight className="text-brand-border text-xs" />
                <span className="text-sm font-semibold text-brand-text">
                  {activePage}
                </span>

                {/* Chevron circle → open subnav */}
                <button
                  onClick={() => setShowSubnav(true)}
                  className="ml-2 grid place-items-center w-6 h-6 rounded-full bg-brand-bg border border-brand-border hover:bg-brand-lightBg transition duration-300"
                  aria-label="Open sub-navigation"
                >
                  <FaChevronRight className="text-brand-textMuted text-xs" />
                </button>
              </div>
            </div>

            {/* --- SUBPAGE BAR --- */}
            <div
              className={`absolute max-w-[80%] w-fit left-4 top-4 inset-0 flex justify-between transition-all duration-300 ease-in-out ${
                showSubnav
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full pointer-events-none"
              }`}
            >
              <div className="flex-1">
                <div className="rounded-lg bg-brand-surface border border-brand-border shadow-sm px-4 py-2">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <button
                      onClick={() => setShowSubnav(false)}
                      className="grid place-items-center w-8 h-8 rounded-full bg-brand-bg border border-brand-border hover:bg-brand-lightBg transition shrink-0"
                      aria-label="Back to breadcrumb"
                    >
                      <FaChevronLeft className="text-brand-text" />
                    </button>

                    {activeSection.items.map((label, i) => {
                      const href = activeSection.paths[i];
                      const active = i === pageIdx;
                      return (
                        <a
                          key={i}
                          href={href}
                          className={`text-sm transition ${
                            active
                              ? "px-3 py-1 rounded-full bg-brand-bg border border-brand-border text-brand-text font-semibold shadow-sm"
                              : "text-brand-text hover:text-brand-primaryHover"
                          }`}
                          onClick={() => setShowSubnav(false)}
                        >
                          {label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* --- RIGHT SIDE: Hamburger --- */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center bg-brand-lightBg hover:bg-brand-border/40 text-brand-text rounded-full h-full aspect-square py-3 px-3 shadow-sm transition"
        >
          <FaBars size={16} />
        </button>
      </div>

      {/* --- SIDE MENU --- */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ background: "rgba(20,20,20,0.35)" }}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-brand-footerBg text-white shadow-lg transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center px-4 py-4 border-b border-brand-accent">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="p-4 space-y-6">
            {menus.map((m, i) => (
              <div key={i} className="border-b border-brand-accent/60 pb-3">
                <h3 className="font-semibold text-brand-accent mb-2">{m.title}</h3>
                <ul className="space-y-2 text-sm">
                  {m.items.map((lbl, j) => (
                    <li key={j}>
                      <a
                        href={m.paths[j]}
                        className="block hover:text-brand-accentHover transition duration-200"
                        onClick={() => setMenuOpen(false)}
                      >
                        {lbl}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
