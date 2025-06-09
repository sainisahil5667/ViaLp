"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BaliTourSection() {
  const [activeTab, setActiveTab] = useState<"amazing" | "romantic">("amazing");

  const tabData = {
    amazing: {
      title: "Amazing Bali 4N/ 5D",
      location: "Havelock | Port Blair",
      price: "₹17,999/person",
      image: "/image2.jpg", // ⬅️ Put this in /public folder
      features: [
        "Airport Transfers",
        "3-4 star hotels",
        "Delicious Meals",
        "Stunning Sightseeing",
        "24/7 Trip Advisor Support",
      ],
    },
    romantic: {
      title: "Romantic Bali 5N/6D",
      location: "Neil Island | Port Blair",
      price: "₹21,999/person",
      image: "/image3.jpg", // ⬅️ Put this in /public folder
      features: [
        "Private Candlelight Dinner",
        "Luxury Hotel Stays",
        "Romantic Beach Walks",
        "Private Cruise Experience",
        "Dedicated Trip Support",
      ],
    },
  };

  const current = tabData[activeTab];

  return (
    <section className="p-6 mb-8">
      <h2 className="text-3xl font-bold text-center mb-4">Bali Tour Packages</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        <Button
          className={activeTab === "amazing" ? "bg-[#fa5a32] text-white" : "bg-gray-400 text-white"}
          onClick={() => setActiveTab("amazing")}
        >
          Amazing Andaman
        </Button>
        <Button
          className={activeTab === "romantic" ? "bg-[#fa5a32] text-white" : "bg-gray-400 text-white"}
          onClick={() => setActiveTab("romantic")}
        >
          Romantic Andaman
        </Button>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center max-w-5xl mx-auto">
        <div className="w-full md:w-1/2">
          <Image
            src={current.image}
            alt={current.title}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-bold">{current.title}</h3>
              <p className="text-lg font-semibold">
                {current.location} <span className="text-sm font-bold text-[#fa5a32]">{current.price}</span>
              </p>
              <div>
                <h4 className="font-semibold">Inclusions</h4>
                <ul className="list-disc list-inside space-y-1">
                  {current.features.map((feature, i) => (
                    <li key={i} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
              <Button className="bg-[#fa5a32] text-white hover:bg-orange-600">Download Itinerary</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
