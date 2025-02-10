"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Gauge,
  Globe,
  Laptop,
  Smartphone,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "We build high-performance websites and web services from scratch or improve existing solutions.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "We create high-quality mobile applications for iOS, Android, and Windows, from concept to launch.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs, regardless of complexity.",
  },
  {
    icon: Gauge,
    title: "Technical Support",
    description:
      "We analyze, optimize, and enhance your existing systems for better performance and security.",
  },
  {
    icon: Laptop,
    title: "UI/UX Design",
    description:
      "We craft intuitive and visually appealing UI/UX designs that enhance user experience.",
  },
  {
    icon: Users,
    title: "Outstaffing Services",
    description:
      "We provide skilled developers (middle/senior) to seamlessly integrate into your team.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We offer a wide range of services to help your business grow in the
            digital world.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div className="p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 border rounded-lg h-full group">
                <service.icon className="h-12 w-12 text-primary mb-4 group-hover:text-[#0e62e4] transition duration-300" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
