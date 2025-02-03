"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";

type Order = {
  id: string;
  clientId: string;
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";
  amount: number;
  description: string | null;
  createdAt: string;
  client: {
    name: string | null;
  };
};

type Client = {
  id: string;
  name: string | null;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetchOrders();
    fetchClients();
  }, []);

  const fetchOrders = async () => {
    const response = await fetch("/api/orders");
    const data = await response.json();
    setOrders(data);
  };

  const fetchClients = async () => {
    const response = await fetch("/api/clients");
    const data = await response.json();
    setClients(data);
  };

  const onSubmit = async (data: any) => {
    await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    reset();
    setIsOpen(false);
    fetchOrders();
  };

  const updateOrderStatus = async (orderId: string, status: string) => {
    await fetch(`/api/orders/${orderId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchOrders();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Orders</h1>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Order
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Order</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="clientId">Client</Label>
                  <Select {...register("clientId")}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a client" />
                    </SelectTrigger>
                    <SelectContent>
                      {clients.map((client) => (
                        <SelectItem key={client.id} value={client.id}>
                          {client.name || "Unnamed Client"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input type="number" step="0.01" id="amount" {...register("amount")} />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" {...register("description")} />
                </div>
                <Button type="submit" className="w-full">Add Order</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {orders.map((order) => (
            <Card key={order.id} className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {order.client.name || "Unnamed Client"}
                  </h3>
                  <p className="text-gray-600 mb-1">Amount: ${order.amount}</p>
                  {order.description && (
                    <p className="text-gray-600">{order.description}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  {order.status === "ACTIVE" && (
                    <>
                      <Button
                        onClick={() => updateOrderStatus(order.id, "COMPLETED")}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Complete
                      </Button>
                      <Button
                        onClick={() => updateOrderStatus(order.id, "CANCELLED")}
                        variant="destructive"
                      >
                        Cancel
                      </Button>
                    </>
                  )}
                  <div className={`px-3 py-1 rounded-full text-sm ${
                    order.status === "ACTIVE" ? "bg-blue-100 text-blue-800" :
                    order.status === "COMPLETED" ? "bg-green-100 text-green-800" :
                    "bg-red-100 text-red-800"
                  }`}>
                    {order.status}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}