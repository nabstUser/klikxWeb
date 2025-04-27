"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Processus" },
  { href: "/contact", label: "Contact" },
];

export function MainNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          ? "py-3 bg-background/90 backdrop-blur-md shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-foreground flex items-center"
          >
            <span className="mr-1 text-3xl text-primary">K</span>
            <span className="tracking-tight">LIKX</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors relative group py-2",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full",
                    pathname === link.href ? "w-full" : "w-0"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button
              asChild
              variant="default"
              size="sm"
              className="rounded-none px-5 py-6"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Nous contacter
                <ExternalLink size={16} className="ml-1" />
              </Link>
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
                  <Link
                    href="/"
                    className="text-xl font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-1 text-3xl text-primary">K</span>
                    <span>LIKX</span>
                  </Link>
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
                        key={link.href}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuItemVariants}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            "text-2xl font-medium py-2 hover:text-primary transition-colors block",
                            pathname === link.href ? "text-primary" : "text-foreground"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-primary text-sm mr-2">0{index + 1}</span>
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="mt-auto pt-8">
                  <Button
                    asChild
                    className="w-full rounded-none py-6"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center gap-2"
                    >
                      Nous contacter
                      <ExternalLink size={16} />
                    </Link>
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
