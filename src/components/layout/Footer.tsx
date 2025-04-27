"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Klikx<span className="text-primary">®</span>
            </h2>
            <p className="text-white/70 max-w-md mb-8">
              Modèles 3D isométriques de haute qualité pour les propriétaires{" "}
              immobiliers et agences qui souhaitent se démarquer avec un{" "}
              visuel captivant.
            </p>
            <div className="flex flex-wrap gap-6">
              <Button
                asChild
                variant="arrowLight"
                size="link"
                className="text-white"
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  Nous contacter
                </Link>
              </Button>
              <Button
                asChild
                variant="arrowLight"
                size="link"
                className="text-white"
              >
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  Nos services
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  to="services"
                  className="text-white/70 hover:text-white cursor-pointer transition-colors"
                >
                  Modèles 3D
                </Link>
                <Link
                  to="services"
                  className="text-white/70 hover:text-white cursor-pointer transition-colors"
                >
                  Visualisation
                </Link>
                <Link
                  to="services"
                  className="text-white/70 hover:text-white cursor-pointer transition-colors"
                >
                  Animation
                </Link>
                <Link
                  to="services"
                  className="text-white/70 hover:text-white cursor-pointer transition-colors"
                >
                  Personnalisation
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  to="features"
                  className="text-white/70 hover:text-white cursor-pointer transition-colors"
                >
                  À propos
                </Link>
                <Link
                  to="process"
                  className="text-white/70 hover:text-white cursor-pointer transition-colors"
                >
                  Processus
                </Link>
                <Link
                  to="testimonials"
                  className="text-white/70 hover:text-white cursor-pointer transition-colors"
                >
                  Témoignages
                </Link>
                <Link
                  to="contact"
                  className="text-white/70 hover:text-white cursor-pointer transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <nav className="flex flex-col space-y-3">
                <a
                  href="mailto:info@klikx.fr"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  info@klikx.fr
                </a>
                <a
                  href="tel:+33123456789"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-white/50 text-sm">
            © {new Date().getFullYear()} Klikx. Tous droits réservés.
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              Conditions d'utilisation
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
