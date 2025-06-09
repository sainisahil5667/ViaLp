// app/bali-tour-package-from-delhi/page.tsx
"use client";
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function BaliTourPackagePage() {
  return (
    <>
      <div className="w-full h-[300px] relative">
  <Image
    src="/bali-tour-packages-Web-banner.jpg" 
    alt="Bali Tour Package"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
    {/* <h1 className="text-white text-4xl font-bold">Bali Tour Package</h1> */}
  </div>
</div>
      
    
    </>
  );
}
