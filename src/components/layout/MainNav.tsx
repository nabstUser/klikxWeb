"use client";

import * as React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const routes = [
  {
    title: "À propos",
    to: "features",
  },
  {
    title: "Services",
    to: "services",
  },
  {
    title: "Processus",
    to: "process",
  },
  {
    title: "Témoignages",
    to: "testimonials",
  },
  {
    title: "Contact",
    to: "contact",
  },
];

export function MainNav() {
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-8 md:px-12">
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
            <span className="font-bold text-2xl tracking-tight">Klikx</span>
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
                  </ScrollLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Buttons on the right - Desktop Only */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button
            asChild
            variant="outline"
            className="rounded-none px-6"
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
            </ScrollLink>
          </Button>
          <Button
            asChild
            className="rounded-none px-6 bg-primary"
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
            </ScrollLink>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-none border-none">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[400px] pt-20 border-none bg-background">
              <nav className="flex flex-col space-y-8 mt-8">
                {routes.map((route) => (
                  <ScrollLink
                    key={route.to}
                    to={route.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="flex items-center cursor-pointer group"
                    onClick={() => {
                      // Close the sheet when a link is clicked
                      const closeButton = document.querySelector('[data-radix-collection-item]');
                      if (closeButton instanceof HTMLElement) {
                        closeButton.click();
                      }
                    }}
                  >
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
