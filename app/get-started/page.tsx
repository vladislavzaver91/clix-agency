"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useState } from "react";

const projectTypes = [
  "Web Application",
  "E-Commerce",
  "Corporate Website",
  "Custom Development",
  "Other",
];

export default function GetStartedPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    projectType: "web application", // дефолтное значение
    name: "",
    email: "",
    phone: "",
    budget: "5-10k", // дефолтное значение
    description: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target ? e.target : { name: e.name, value: e };
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/form-get-started", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Request submitted",
          description: "We'll contact you shortly to discuss your project.",
        });
        setFormData({
          projectType: "",
          name: "",
          email: "",
          phone: "",
          budget: "",
          description: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description:
          "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 relative">
          {/* gradient line */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute right-56 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10"
          />
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Get Started
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-muted-foreground"
          >
            Tell us about your project and let&apos;s create something amazing
            together
          </motion.p>
        </div>

        <Card className="max-w-2xl mx-auto p-8 hover:translate-y-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Project Type</label>
              <Select
                name="projectType"
                onValueChange={(value) =>
                  handleChange({ target: { name: "projectType", value } })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase()}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Your Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Project Budget</label>
              <Select
                name="budget"
                onValueChange={(value) =>
                  handleChange({ target: { name: "budget", value } })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5k">$1,000 - $5,000</SelectItem>
                  <SelectItem value="5-10k">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10-25k">$10,000 - $25,000</SelectItem>
                  <SelectItem value="25-50k">$25,000 - $50,000</SelectItem>
                  <SelectItem value="50k+">$50,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Project Description</label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your project requirements..."
                className="min-h-[150px]"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Submit Request
            </Button>
          </form>
        </Card>
      </div>
    </motion.div>
  );
}
