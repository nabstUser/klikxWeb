"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const routes = [
  {
    title: "Home",
    to: "hero",
  },
  {
    title: "Features",
    to: "features",
  },
  {
    title: "Services",
    to: "services",
  },
  {
    title: "Process",
    to: "process",
  },
  {
    title: "Testimonials",
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
      <div className="container flex h-16 items-center justify-between px-4 sm:px-8 md:px-12">
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <span className="font-bold text-2xl tracking-tight">Klikx</span>
        </ScrollLink>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {routes.map((route) => (
              <NavigationMenuItem key={route.to}>
                <ScrollLink
                  to={route.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "cursor-pointer",
                  )}
                  onSetActive={() => setActiveItem(route.to)}
                  onMouseEnter={() => setActiveItem(route.to)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  <span className="relative">
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

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="default" className="rounded-full px-8">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              Get Started
            </ScrollLink>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {routes.map((route) => (
                <ScrollLink
                  key={route.to}
                  to={route.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="py-2 text-lg font-medium hover:text-primary transition-colors cursor-pointer"
                  onClick={() => {
                    // Close the sheet when a link is clicked
                    const closeButton = document.querySelector('[data-radix-collection-item]');
                    if (closeButton instanceof HTMLElement) {
                      closeButton.click();
                    }
                  }}
                >
                  {route.title}
                </ScrollLink>
              ))}
              <Button className="mt-4 rounded-full">
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  Get Started
                </ScrollLink>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
