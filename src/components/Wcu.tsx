// app/components/WhyChooseUs.tsx or wherever you're placing it
import Image from "next/image";

const features = [
  {
    img: "/EMI-1.webp",
    title: "Flexible Payment Options",
  },
  {
    img: "/Guarantee-1.webp",
    title: "Price Match Guarantee",
  },
  {
    img: "/Customized-Packages.webp",
    title: "100% Customized Package",
  },
  {
    img: "/customer-support.webp",
    title: "24×7 Customer Support",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#fceee6] py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={item.img}
                alt={item.title}
                width={80}
                height={80}
                className="mb-4"
              />
              <p className="font-semibold text-black">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
