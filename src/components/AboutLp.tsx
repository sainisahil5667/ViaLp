"use client"; // if using in Next.js 13+ app directory

import { useState } from "react";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  const text = `
    Switzerland, renowned for its breathtaking landscapes and charming cities, 
    is a top destination for travelers seeking natural beauty and cultural richness. 
    Nestled in the heart of the Alps, it offers pristine lakes, snow-capped mountains, 
    and picturesque villages. Visitors can explore vibrant cities...
  `;

  const shortText = `
    Switzerland, renowned for its breathtaking landscapes and charming cities, 
    is a top destination for travelers seeking natural beauty and cultural richness...
  `;

  return (
    <section className="bg-[#fdf5f2] p-6 rounded-xl max-w-5xl mx-auto mt-10 mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About Bali</h2>
      <p className="text-black leading-relaxed">
        {expanded ? text : shortText}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#ff5a3c] font-medium ml-2"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </p>
    </section>
  );
}
