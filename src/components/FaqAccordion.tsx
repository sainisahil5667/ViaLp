// components/FaqAccordion.tsx
"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqAccordion() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-4">
        Frequently Asked Questions about Bali Tour
      </h2>
      <p className="text-center text-muted-foreground mb-8">
        If you’re new or looking for answers to your questions, this guide will help you learn more about our services and their features.
      </p>

      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>What’s included in the Bali tour package?</AccordionTrigger>
          <AccordionContent>
            Our Bali tour includes accommodation, airport transfers, guided tours to top attractions, daily breakfast, and 24/7 support.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Do I need a visa to visit Bali?</AccordionTrigger>
          <AccordionContent>
            It depends on your nationality. Many countries are eligible for visa-on-arrival or visa-free entry. Please check with your local embassy.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What is the best time to visit Bali?</AccordionTrigger>
          <AccordionContent>
            The dry season from April to October is ideal for visiting Bali, especially for beach and outdoor activities.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Can I customize my Bali itinerary?</AccordionTrigger>
          <AccordionContent>
            Yes! We offer fully customizable packages to suit your travel preferences, group size, and interests.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
