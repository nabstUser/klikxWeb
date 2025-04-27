"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "Basic",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "Basic",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-muted/30 section-padding">
      <div className="container px-4 sm:px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl mb-20"
        >
          <h3 className="text-primary font-medium mb-4">Contact</h3>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl max-w-2xl">
            Démarrer votre projet
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Prêt à améliorer vos annonces immobilières avec des modèles 3D isométriques époustouflants ? Contactez-nous dès aujourd'hui pour commencer.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-8">Informations de contact</h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="text-primary font-mono text-sm">E:</div>
                  <div>
                    <a
                      href="mailto:contact@klikx.fr"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      contact@klikx.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary font-mono text-sm">T:</div>
                  <div>
                    <a
                      href="tel:+33612345678"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      +33 6 12 34 56 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary font-mono text-sm">H:</div>
                  <div>
                    <p className="text-muted-foreground">
                      Lundi - Vendredi: 9h - 18h<br />
                      Samedi & Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-primary text-white">
                <h4 className="text-xl font-bold mb-4">Service client</h4>
                <p className="mb-6">
                  Notre équipe est disponible pour répondre à toutes vos questions sur nos services de modélisation 3D isométrique.
                </p>
                <div className="text-lg font-bold">+33 6 12 34 56 78</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              {isSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center border border-primary/20 bg-primary/5 p-12 text-center">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center bg-primary text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">Message envoyé avec succès !</h3>
                  <p className="text-muted-foreground">
                    Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 rounded-none"
                    variant="outline"
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 border p-8">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Votre nom
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-border bg-transparent px-0 py-2 text-base focus:border-primary focus:outline-none"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Adresse email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-border bg-transparent px-0 py-2 text-base focus:border-primary focus:outline-none"
                        placeholder="jean@exemple.fr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Numéro de téléphone (Optionnel)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-b border-border bg-transparent px-0 py-2 text-base focus:border-primary focus:outline-none"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-2 block text-sm font-medium">
                        Forfait de service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border-b border-border bg-transparent px-0 py-2 text-base focus:border-primary focus:outline-none"
                      >
                        <option value="Basic">Forfait Basic</option>
                        <option value="Premium">Forfait Premium</option>
                        <option value="Deluxe">Forfait Deluxe</option>
                        <option value="Custom">Solution personnalisée</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Votre message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-border bg-transparent px-0 py-2 text-base focus:border-primary focus:outline-none"
                      placeholder="Parlez-nous de votre propriété et de ce que vous recherchez..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="rounded-none px-8 py-7 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
