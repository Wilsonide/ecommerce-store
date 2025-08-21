"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, MessageSquare, Send } from "lucide-react"
import { useCurrentUser } from "@/hooks/useCurrentUser"
import toast from "react-hot-toast"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const user = useCurrentUser()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      console.log("Form data:", formData)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      console.log(data)
      console.log("Response status:", response)
      if (!response.ok) {
        toast.error("Failed to send message. Please try again later.")
        console.error("Email sending error:")
      }
      else if (data.status === 200) {
        toast.success("Message sent successfully!")
      }
      
    } catch (error) {
      toast.error("something went wrong. Please try again later.")
      console.log("Email sending error:", error)
      
    }
    finally{
      setFormData({ name: "", email: "", phone: "", message: "" })
      setIsLoading(false)
    }
    
  }

  // Replace with your WhatsApp number (include country code, no + or spaces)
  const whatsappNumber = "2349031249273"
  const whatsappMessage = `Hello,${user ? ` my name is ${user.name}` : ""}. I want to make enquiry about your products.`
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 text-white text-center py-20 shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Get in touch with Icheku Wood & Sons Upholstery. We’d love to hear from you.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-700">Our Contact Info</h2>
          <p className="text-gray-700">
            Reach us through any of the following channels or use the form to send us a direct message.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-800">
              <Phone className="text-yellow-600" /> +234 8145959201 or +234 9031249273
            </p>
            <p className="flex items-center gap-3 text-gray-800">
              <Mail className="text-yellow-600" /> ichekuw@gmail.com
            </p>
            <p className="flex items-center gap-3 text-gray-800">
              <MapPin className="text-yellow-600" /> St. Andrew&apos;s Anglican Church, Amainyi, ihitte/uboma LGA, Imo state, Nigeria. Along Umuahia/Orieagu road 
            </p>
          </div>

          {/* WhatsApp button in Info */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            <MessageSquare className="w-5 h-5" /> Chat us on WhatsApp
          </a>

          {/* Map */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.347457373252!2d3.379205815296836!3d6.601838224082912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d22b0b90efb%3A0xf9b8e7cb0d65d8a!2sLagos!5e0!3m2!1sen!2sng!4v1678901234567"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>

             <button
              type="submit"
              disabled={isLoading}
              className={cn("w-full flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition",isLoading && "opacity-5 cursor-not-allowed")}
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

