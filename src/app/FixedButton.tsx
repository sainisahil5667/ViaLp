"use client"

import { Phone } from "lucide-react"

export default function CallUsButton() {
  return (
    <a
      href="tel:+1234567890"
      className="fixed right-0 top-1/2  z-50 w-[45px] h-[130px] bg-[#ff5733] rounded-l-2xl flex items-center justify-center hover:bg-[#e14a2a] transition-all"
    >
      <div className="flex text-nowrap rotate-90 gap-1 items-center justify-center">
        <Phone className="text-white mb-1 " />
        <span className="font-extrabold text-sm tracking-wider text-white">
          CALL US
        </span>
      </div>
    </a>
  )
}
