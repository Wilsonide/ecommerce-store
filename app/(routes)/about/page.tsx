"use client"

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 text-white text-center py-20 shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold">About Us</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Crafting comfort and elegance for your home, one piece at a time.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-700 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded over two decades ago, <strong>Icheku Wood & Sons Upholstery</strong> has become a trusted 
            name in fine furniture and custom upholstery. We are a family-owned business with a 
            passion for blending traditional craftsmanship with modern designs.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our team of skilled artisans and designers work tirelessly to create 
            furniture that reflects elegance, durability, and comfort. From sofas and chairs 
            to bespoke interior pieces, every project is crafted with care and precision.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/images/myWorkshop.jpg"
            alt="Workshop"
            width={640}
            height={400}
            className="rounded-2xl shadow-lg object-cover h-80 w-full"
            priority
          />
        </div>
      </section>


      {/* Our Mission & Vision */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-2xl shadow">
            <h2 className="text-3xl font-bold text-yellow-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To transform living spaces with beautifully crafted, affordable, and sustainable 
              furniture, while maintaining the highest standards of quality and customer care.
            </p>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-2xl shadow">
            <h2 className="text-3xl font-bold text-yellow-700 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be recognized as Nigeria’s leading upholstery and furniture brand, known for 
              innovation, craftsmanship, and trustworthiness in every home we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <h2 className="text-3xl font-bold text-yellow-700 text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-yellow-700 mb-3">Quality Craftsmanship</h3>
            <p className="text-gray-700 leading-relaxed">
              Every piece is handcrafted by skilled artisans with attention to detail.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-yellow-700 mb-3">Custom Designs</h3>
            <p className="text-gray-700 leading-relaxed">
              We tailor our furniture to meet your personal style and comfort preferences.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-yellow-700 mb-3">Trusted Service</h3>
            <p className="text-gray-700 leading-relaxed">
              Our family values ensure honesty, reliability, and a customer-first approach.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Bringing Comfort & Elegance to Your Home
        </h2>
        <p className="text-lg mb-8">
          Let’s craft your dream furniture today.
        </p>
        <a
          href="/contact"
          className="bg-white text-yellow-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  )
}
