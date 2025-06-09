"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const testimonials = [
  {
    name: "Aarav Mehta",
    feedback:
      "The tour was amazing! Everything was well organized and stress-free. The hotel arrangements and local guides were top-notch. I will definitely travel with Viacation again!",
  },
  {
    name: "Priya Sharma",
    feedback:
      "Viacation customized our trip exactly how we wanted. From transport to meals to sightseeing, everything was smooth and budget-friendly. Highly recommended for first-time travelers.",
  },
  {
    name: "Rahul Singh",
    feedback:
      "Loved the hotel and the itinerary. Great support from the team! We made changes in the middle of the tour and they handled it professionally. Worth every rupee!",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
      setFade(true);
    }, 200);
  };

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setFade(true);
    }, 200);
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(next, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  return (
    <section className="py-16" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>

        <div
          className="relative w-full"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <Card
            className={clsx(
              "p-8 bg-red-50 w-full min-h-[200px] transition-opacity duration-500 ease-in-out",
              fade ? "opacity-100" : "opacity-0"
            )}
          >
            <CardContent className="flex flex-col items-center justify-center gap-6">
              <p className="text-lg text-gray-700 max-w-3xl italic">
                “{testimonials[index].feedback}”
              </p>
              <p className="font-semibold text-brand text-xl">
                {testimonials[index].name}
              </p>
            </CardContent>
          </Card>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
