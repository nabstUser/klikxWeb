"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Arrow } from "@/components/ui/arrow";
import Image from "next/image";

export function ContactSection() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    submitted: false,
    loading: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, loading: true });

    // Simuler un envoi de formulaire
    setTimeout(() => {
      setFormState({
        ...formState,
        submitted: true,
        loading: false,
        firstName: "",
        lastName: "",
        email: "",
        company: "",
      });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-primary overflow-hidden py-0"
    >
      {/* Fond avec image */}
      <div className="absolute left-0 top-0 w-full h-full lg:w-1/2 lg:opacity-100 z-0">
        <Image
          src="/images/isometric-house-2.jpg"
          alt="Modèle 3D isométrique"
          fill
          className="object-cover object-center opacity-10 lg:opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
      </div>

      <div className="container-wide relative z-10 flex flex-col h-full min-h-screen">
        <div className="flex flex-col lg:flex-row pt-32 lg:pt-40 h-full">
          {/* Contenu de gauche */}
          <div className="lg:w-1/2 pr-0 lg:pr-20 mb-16 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-6xl md:text-8xl text-white font-bold tracking-tight leading-[0.9] uppercase mb-12">
                GET IN<br />TOUCH
              </h1>

              <h2 className="text-xl text-white font-medium mb-4">
                We're waiting to hear from you
              </h2>

              <p className="text-white/80 text-lg mb-12 max-w-lg">
                Envoyez-nous un message et découvrez comment nos modèles 3D peuvent transformer votre propriété.
              </p>

              <div className="flex flex-col gap-3 mb-12">
                <a
                  href="mailto:info@klikx.fr"
                  className="flex items-center text-white group"
                >
                  <span className="text-lg">info@klikx.fr</span>
                  <Arrow
                    direction="up-right"
                    className="ml-3 w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    color="white"
                  />
                </a>

                <a
                  href="tel:+33123456789"
                  className="text-white text-lg"
                >
                  +33 1 23 45 67 89
                </a>
              </div>
            </motion.div>
          </div>

          {/* Formulaire à droite */}
          <div className="lg:w-1/2 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="border-t border-white/20 pt-8 mb-12">
                <h3 className="text-xl text-white font-medium mb-8">
                  Let's get things started
                </h3>
              </div>

              {formState.submitted ? (
                <div className="py-12">
                  <h3 className="text-2xl font-medium mb-4 text-white">
                    Thank you for your message!
                  </h3>
                  <p className="text-white/80 mb-8">
                    We've received your inquiry and will get back to you shortly.
                  </p>
                  <div className="flex justify-end">
                    <Button
                      onClick={() => setFormState({ ...formState, submitted: false })}
                      className="rounded-full bg-white text-primary hover:bg-white/90 px-8 py-3"
                    >
                      Send another message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formState.firstName}
                      onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                      required
                      className="bg-transparent border-0 border-b border-white/20 py-3 px-1 text-white placeholder-white/40 focus:border-white focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formState.lastName}
                      onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                      required
                      className="bg-transparent border-0 border-b border-white/20 py-3 px-1 text-white placeholder-white/40 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      className="bg-transparent border-0 border-b border-white/20 py-3 px-1 text-white placeholder-white/40 focus:border-white focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="bg-transparent border-0 border-b border-white/20 py-3 px-1 text-white placeholder-white/40 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex justify-end mt-16">
                    <div className="group">
                      <Button
                        type="submit"
                        className="rounded-full bg-white text-primary hover:bg-white/90 px-8 py-3 text-base font-medium transition-all"
                        disabled={formState.loading}
                      >
                        {formState.loading ? "Sending..." : "Submit"}
                        <span className="inline-flex ml-2">
                          <Arrow
                            direction="up-right"
                            className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </span>
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
