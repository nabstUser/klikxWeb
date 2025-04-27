"use client";

import * as React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Arrow } from "@/components/ui/arrow";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const routes = [
  {
    title: "À propos",
    to: "features",
    number: "01",
  },
  {
    title: "Services",
    to: "services",
    number: "02",
  },
  {
    title: "Processus",
    to: "process",
    number: "03",
  },
  {
    title: "Témoignages",
    to: "testimonials",
    number: "04",
  },
  {
    title: "Contact",
    to: "contact",
    number: "05",
  },
];

export function MainNav() {
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border/5">
      <div className="container-wide flex h-20 items-center justify-between">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <span className="font-bold text-xl tracking-tight">Klikx</span>
          </ScrollLink>
        </div>

        {/* Navigation in the center - Desktop Only */}
        <div className="hidden lg:flex justify-center flex-1 px-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-8">
              {routes.map((route) => (
                <NavigationMenuItem key={route.to}>
                  <ScrollLink
                    to={route.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer flex flex-col items-center group"
                    onSetActive={() => setActiveItem(route.to)}
                    onMouseEnter={() => setActiveItem(route.to)}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground opacity-70">{route.number}</span>
                      <span className="relative text-base font-medium group-hover:text-primary transition-colors">
                        {route.title}
                        {activeItem === route.to && (
                          <motion.div
                            layoutId="navbar-underline"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </span>
                    </div>
                  </ScrollLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Buttons on the right */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            className="hidden md:flex rounded-none border-foreground/20 hover:border-foreground/80"
          >
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              Nous contacter
              <Arrow direction="up-right" className="ml-2" />
            </ScrollLink>
          </Button>

          <Button
            asChild
            className="rounded-none hidden md:flex"
          >
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              Démarrer
              <Arrow direction="up-right" className="ml-2" color="white" />
            </ScrollLink>
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-md pt-20 border-none">
              <nav className="flex flex-col space-y-8 mt-8">
                {routes.map((route) => (
                  <ScrollLink
                    key={route.to}
                    to={route.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="flex gap-4 cursor-pointer group"
                    onClick={() => {
                      // Close the sheet when a link is clicked
                      const closeButton = document.querySelector('[data-radix-collection-item]');
                      if (closeButton instanceof HTMLElement) {
                        closeButton.click();
                      }
                    }}
                  >
                    <span className="text-sm text-primary">{route.number}</span>
                    <span className="text-xl font-medium group-hover:text-primary transition-colors">
                      {route.title}
                    </span>
                  </ScrollLink>
                ))}

                <div className="flex flex-col space-y-4 pt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-none w-full"
                  >
                    <ScrollLink
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="cursor-pointer"
                    >
                      Nous contacter
                      <Arrow direction="up-right" className="ml-2" />
                    </ScrollLink>
                  </Button>
                  <Button
                    asChild
                    className="rounded-none w-full"
                  >
                    <ScrollLink
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="cursor-pointer"
                    >
                      Démarrer
                      <Arrow direction="up-right" className="ml-2" color="white" />
                    </ScrollLink>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
