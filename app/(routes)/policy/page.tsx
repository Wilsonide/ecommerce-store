"use client"

export default function PolicyPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 text-white text-center py-20 shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold">Our Policies</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          At Icheku Wood & Sons Upholstery, we value your trust.  
          Below are our Privacy and Delivery policies designed to protect you and serve you better.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-12">
        
        {/* Privacy Policy */}
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-yellow-700 mb-6">Privacy Policy</h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              This Privacy Policy explains how we
              collects, uses, and protects your personal information when you 
              interact with our services, website, and communication channels.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Information We Collect</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Personal details (name, phone number, email) when you contact us or request services.</li>
                <li>Transaction details related to upholstery services.</li>
                <li>Website usage data through cookies and analytics tools.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How We Use Your Information</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide and deliver upholstery services.</li>
                <li>Respond to inquiries and requests.</li>
                <li>Improve our services and customer experience.</li>
                <li>Send updates, promotions, or news (with your consent).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Protection</h3>
              <p>
                We implement strict security measures to safeguard your information 
                against unauthorized access, alteration, or disclosure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Rights</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Access, update, or correct your personal information.</li>
                <li>Request deletion of your personal data.</li>
                <li>Withdraw consent for marketing communications.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Delivery Policy */}
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-yellow-700 mb-6">Delivery Policy</h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              At Icheku Wood & Sons Upholstery, we strive to deliver your furniture and upholstery 
              projects safely and on time. Our delivery policy is designed to keep things transparent 
              and stress-free for you.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Delivery Areas</h3>
              <p>
                We deliver within Imo, Abia and surrounding states. Nationwide delivery is available 
                upon request and may attract additional charges.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Delivery Time</h3>
              <p>
                Standard delivery time is <span className="font-semibold">7–14 business days</span> 
                after project completion. Custom orders may require additional time, which will 
                be communicated upfront.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Delivery Charges</h3>
              <p>
                Delivery charges depend on location and size of order. For bulk or premium orders, 
                free delivery may apply.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Order Tracking</h3>
              <p>
                Customers will be notified via phone or email once their order is dispatched. 
                Estimated delivery dates will also be provided.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Damages</h3>
              <p>
                In the rare event of damage during delivery, please contact us immediately. 
                We will repair or replace items as per our warranty agreement.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-700 mb-3">Contact Us</h2>
          <p className="text-gray-700 mb-2">
            If you have any questions about our Privacy or Delivery Policies, please contact us:
          </p>
          <p className="text-gray-800 font-medium">
            📧  ichekuw@gmail.com <br />
            📞 +234 8145959201 or +234 9031249273 <br />
            📍 St. Andrew&apos;s Anglican Church, Amainyi, ihitte/uboma LGA, Imo state, Nigeria. Along Umuahia/Orieagu road 
          </p>
        </div>
      </section>
    </div>
  )
}
