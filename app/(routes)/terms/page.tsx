"use client"

export default function TermsPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 text-white text-center py-20 shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold">Terms & Conditions</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          By using the services of Icheku Wood & Sons Upholstery, you agree to the following 
          terms and conditions. Please read them carefully.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-12">
        
        {/* General Terms */}
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-yellow-700 mb-6">General Terms</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>All upholstery and furniture services provided by us are subject to these terms.</li>
            <li>By placing an order, you agree to be bound by these terms and any additional written agreements.</li>
            <li>We reserve the right to refuse service if necessary under reasonable circumstances.</li>
          </ul>
        </div>

        {/* Orders and Payments */}
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-yellow-700 mb-6">Orders & Payments</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>Orders are confirmed once a deposit (usually 50%) has been made.</li>
            <li>Final payment is due upon completion unless otherwise agreed.</li>
            <li>Payments can be made via bank transfer, cash, or other approved methods.</li>
          </ul>
        </div>

        {/* Custom Orders */}
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-yellow-700 mb-6">Custom Orders</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>Custom upholstery and furniture designs are made according to customer specifications.</li>
            <li>Once production begins, cancellations or major changes may not be possible.</li>
            <li>We will provide estimated timelines, but custom projects may take longer depending on complexity.</li>
          </ul>
        </div>

        {/* Delivery & Warranty */}
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-yellow-700 mb-6">Delivery & Warranty</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>Delivery timelines are estimates; unforeseen delays may occur but will be communicated promptly.</li>
            <li>We provide a warranty on craftsmanship for a specified period (atleast 3 years).</li>
            <li>Warranty does not cover misuse, negligence, or natural wear and tear of materials.</li>
          </ul>
        </div>

        {/* Cancellations & Refunds */}
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-yellow-700 mb-6">Cancellations & Refunds</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>Cancellations before production may receive partial refunds (excluding administrative costs).</li>
            <li>Once work has commenced, refunds may not be issued.</li>
            <li>Refunds are processed within 7–14 business days where applicable.</li>
          </ul>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-yellow-700 mb-6">Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            Icheku Wood & Sons Upholstery shall not be held liable for indirect, incidental, or 
            consequential damages arising from use of our services, except where required by law.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-700 mb-3">Contact Us</h2>
          <p className="text-gray-700 mb-2">
            For questions or clarifications regarding these Terms & Conditions, please contact:
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
