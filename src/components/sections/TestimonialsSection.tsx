"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: "testimonial-1",
    quote:
      "The 3D isometric models from Klikx completely transformed our Airbnb listings. We've seen a 30% increase in booking inquiries since adding them to our property photos.",
    author: "Sarah J.",
    role: "Airbnb Superhost",
  },
  {
    id: "testimonial-2",
    quote:
      "As a property management company, we needed a way to showcase multiple properties consistently. Klikx delivered stunning isometric models that our clients love and that have improved our marketing results dramatically.",
    author: "Michael T.",
    role: "CEO, Urban Stay Properties",
  },
  {
    id: "testimonial-3",
    quote:
      "The level of detail in our premium 3D model is impressive. Klikx captured all the unique architectural features of our vacation home, making it stand out in the crowded market.",
    author: "Rebecca L.",
    role: "Vacation Rental Owner",
  },
  {
    id: "testimonial-4",
    quote:
      "Klikx's customer service is as impressive as their 3D models. They were responsive, made all requested revisions quickly, and delivered ahead of schedule.",
    author: "David K.",
    role: "Real Estate Investor",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container px-4 sm:px-8 md:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from property owners and managers who have enhanced their listings with our 3D isometric models
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 text-4xl text-primary/30">"</div>
              <blockquote>
                <p className="mb-4 text-lg italic text-muted-foreground">
                  {testimonial.quote}
                </p>
                <footer>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </footer>
              </blockquote>
              <div className="absolute bottom-6 right-6 text-4xl text-primary/30">"</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
