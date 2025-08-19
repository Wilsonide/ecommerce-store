"use client"

import { useState } from "react"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in furniture upholstery, custom-made sofas, chairs, cushions.",
  },
  {
    question: "Do you provide home delivery?",
    answer:
      "No, except on demand. Delivery fees may vary depending on the location.",
  },
  {
    question: "Can I customize my furniture design?",
    answer:
      "Absolutely! We work closely with our clients to design and craft furniture pieces tailored to their preferences and style.",
  },
  {
    question: "What is the usual production time?",
    answer:
      "Production time depends on the project size. Most furniture orders take between 2 to 4 weeks to complete.",
  },
  {
    question: "Do you repair old or damaged furniture?",
    answer:
      "Yes, we restore and reupholster old or damaged furniture, giving them a fresh, modern look.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfers, and POS payments. A deposit is required to start custom projects.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 text-white text-center py-20 shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Find quick answers to common questions about our services, policies, and process.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-lg font-semibold text-yellow-700">{faq.question}</span>
                <span className="text-yellow-600 text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Still Have Questions?
        </h2>
        <p className="mb-6 text-lg">
          Our team is here to help you with any additional inquiries.
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
