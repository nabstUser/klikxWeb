"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { to: "hero", label: "Accueil" },
  { to: "features", label: "À propos" },
  { to: "services", label: "Services" },
  { to: "process", label: "Processus" },
  { to: "contact", label: "Contact" },
];

export function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/95 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-xl font-bold text-foreground flex items-center cursor-pointer"
          >
            <span className="text-2xl lg:text-3xl font-bold text-primary tracking-tight">KLIKX</span>
          </ScrollLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, index) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-primary"
                onSetActive={() => setActiveSection(link.to)}
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors relative group py-2 cursor-pointer",
                  activeSection === link.to ? "text-primary" : "text-muted-foreground"
                )}
              >
                <span className="flex items-center gap-1">
                  {link.label}
                </span>
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full",
                    activeSection === link.to ? "w-full" : "w-0"
                  )}
                />
              </ScrollLink>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button
              asChild
              variant="default"
              size="sm"
              className="rounded-none px-6 py-4 text-sm bg-primary hover:bg-primary/90 text-white"
            >
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="flex items-center gap-2 cursor-pointer"
              >
                Nous contacter
                <ExternalLink size={14} />
              </ScrollLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full sm:w-[350px] p-0">
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <ScrollLink
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-xl font-bold cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-2xl font-bold text-primary">KLIKX</span>
                  </ScrollLink>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Fermer le menu"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <div className="flex flex-col space-y-6 mt-4">
                  <AnimatePresence>
                    {links.map((link, index) => (
                      <motion.div
                        key={link.to}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuItemVariants}
                      >
                        <ScrollLink
                          to={link.to}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className={cn(
                            "text-xl font-medium py-2 hover:text-primary transition-colors block cursor-pointer",
                            activeSection === link.to ? "text-primary" : "text-foreground"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="flex items-center">
                            <span className="text-primary text-sm mr-2">0{index + 1}</span>
                            {link.label}
                          </span>
                        </ScrollLink>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="mt-auto pt-8">
                  <Button
                    asChild
                    className="w-full rounded-none py-6 bg-primary text-white hover:bg-primary/90"
                  >
                    <ScrollLink
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="flex items-center justify-center gap-2 cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Nous contacter
                      <ExternalLink size={16} />
                    </ScrollLink>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
