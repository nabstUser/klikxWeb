"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="super-title">Contactez-nous</div>
            <h2 className="mb-8">DÉMARREZ VOTRE PROJET</h2>
            <p className="text-muted-foreground text-lg max-w-lg mb-10">
              Que vous soyez prêt à commencer ou que vous ayez simplement des questions, notre équipe est là pour vous aider à transformer vos propriétés avec des modèles 3D isométriques époustouflants.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href="mailto:info@klikx.fr" className="text-muted-foreground hover:text-primary transition-colors">
                  info@klikx.fr
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
                <a href="tel:+33123456789" className="text-muted-foreground hover:text-primary transition-colors">
                  +33 1 23 45 67 89
                </a>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-semibold mb-4">Heures d'ouverture</h3>
              <p className="text-muted-foreground">
                Lun - Ven: 9h - 18h<br />
                Week-end: Fermé
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {formState.submitted ? (
              <div className="bg-white p-12 border">
                <h3 className="text-2xl font-semibold mb-4">Merci pour votre message !</h3>
                <p className="text-muted-foreground mb-8">
                  Nous avons bien reçu votre demande et nous vous contacterons dans les plus brefs délais.
                </p>
                <Button
                  onClick={() => setFormState({ ...formState, submitted: false })}
                  className="rounded-none"
                >
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-12 border">
                <h3 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h3>
                <div className="space-y-6">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-medium mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                      className="p-3 border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                        className="p-3 border border-border focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="text-sm font-medium mb-2">
                        Téléphone (optionnel)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="p-3 border border-border focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                      rows={5}
                      className="p-3 border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="rounded-none w-full"
                    disabled={formState.loading}
                    withArrow
                  >
                    {formState.loading ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
