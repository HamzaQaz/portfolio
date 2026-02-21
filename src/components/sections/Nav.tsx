import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="fixed top-0">
      <NavBody>
        <a href="#" className="relative z-20 flex items-center px-2 py-1 text-sm font-bold text-emerald-400 font-display">
          NightlyDev
        </a>
        <NavItems items={navItems} />
        <NavbarButton href="#contact" variant="dark" className="bg-emerald-500 text-black hover:bg-emerald-400">
          Contact
        </NavbarButton>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <a href="#" className="text-sm font-bold text-emerald-400 font-display">
            NightlyDev
          </a>
          <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <NavbarButton href="#contact" variant="dark" className="w-full bg-emerald-500 text-black">
            Contact
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
