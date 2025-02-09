"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import FileInput from "@/components/ui/file-input";

type Worker = {
  id: string;
  name: string;
  salary: string;
  phone_1: string | null;
  phone_2: string | null;
  email: string | null;
  contract: string | null;
  description: string | null;
  speciality: string;
  currency: string;
  documents: string[];
  created_at: string;
};

const specialities = [
  "Frontend",
  "Seo",
  "FullStack",
  "Backend",
  "Designer",
  "Web3",
  "Devops",
];
const currencies = ["USD", "EUR", "UAH"];

export default function WorkersPage() {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [currentWorker, setCurrentWorker] = useState<Worker | null>(null);
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = async () => {
    const response = await fetch("/api/workers");
    const data = await response.json();
    setWorkers(data);
  };

  const onSubmit = async (data: any) => {
    if (currentWorker) {
      await fetch(`/api/workers/${currentWorker.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsEditOpen(false);
    } else {
      await fetch("/api/workers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsOpen(false);
    }
    reset();
    fetchWorkers();
  };

  const handleEdit = (worker: Worker) => {
    setCurrentWorker(worker);
    Object.keys(worker).forEach((key) =>
      setValue(key, (worker as any)[key] || "")
    );
    setIsEditOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this worker?")) {
      await fetch(`/api/workers/${id}`, {
        method: "DELETE",
      });
      fetchWorkers();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Workers</h1>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 transition duration-300">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Worker
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Worker</DialogTitle>
              </DialogHeader>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 grid grid-cols-2"
              >
                <Label>Name</Label>
                <Input
                  {...register("name")}
                  required
                  className="border rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />

                <Label>Salary</Label>
                <Input
                  {...register("salary")}
                  required
                  className="border rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />

                <Label>Currency</Label>
                {/* Нативный Select */}
                <select
                  {...register("currency")}
                  className="w-full border rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                  required
                >
                  <option value="" disabled selected>
                    Select currency
                  </option>
                  {currencies.map((cur) => (
                    <option key={cur} value={cur}>
                      {cur}
                    </option>
                  ))}
                </select>

                <Label>Speciality</Label>
                {/* Нативный Select */}
                <select
                  {...register("speciality")}
                  className="w-full border rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                  required
                >
                  <option value="" disabled selected>
                    Select speciality
                  </option>
                  {specialities.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>

                <Label>Contract</Label>
                <Input
                  {...register("contract")}
                  className="border rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />

                <Label>Description</Label>
                <Input
                  {...register("description")}
                  className="border rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />

                <Label>Phone 1</Label>
                <Input
                  {...register("phone_1")}
                  className="border rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />

                <Label>Phone 2</Label>
                <Input
                  {...register("phone_2")}
                  className="border rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />

                <Label>Email</Label>
                <Input
                  {...register("email")}
                  type="email"
                  className="border rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />

                <Label>Documents</Label>
                {/* Файловый инпут */}
                <FileInput {...register("documents")} multiple />

                {/* Кнопка отправки */}
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 transition duration-300"
                >
                  Add Worker
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Карточки работников */}
        <div className="grid grid-cols-1 gap-6">
          {workers.map((worker) => (
            <Card
              key={worker.id}
              className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-1"
            >
              {/* Информация о работнике */}
              ...
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
