import React from 'react';

const PrivacyPolicy = () => {
  return (
    //   <br></br>
      <div className="max-w-4xl mx-auto p-6 bg-white text-gray-900 text-left">
        <br></br>
        <br></br>
        <br></br>
      <h1 className="text-3xl font-bold mb-6">Privacy Policy </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          At MyCare Labs, we prioritize your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, share, and protect the information you provide to us. By using our services, you consent to the practices described in this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information from you in the following ways:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong>Directly from You:</strong> When you interact with our services, register for medical tests, or contact us, you may provide us with personal information such as your name, email address, phone number, and payment details.
          </li>
          {/* <li className="mb-2">
            <strong>Automatically:</strong> We may automatically collect certain information when you use our services, such as your IP address, browser type, device information, and browsing behavior.
          </li> */}
          <li className="mb-2">
            <strong>From Third Parties:</strong> We may receive information about you from third-party sources, including partners, affiliates, and public databases.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-4">
          The information we collect may be used in the following ways:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong>To Provide and Improve Our Services:</strong> We use your information to deliver the services you request, enhance your experience, and improve the functionality and performance of our website and services.
          </li>
          <li className="mb-2">
            <strong>To Communicate with You:</strong> We may use your information to send you important updates, promotional materials, and respond to your inquiries.
          </li>
          <li className="mb-2">
            <strong>For Compliance and Legal Obligations:</strong> We may use your information to comply with applicable laws, regulations, and legal processes.
          </li>
          <li className="mb-2">
            <strong>For Analytics and Research:</strong> We may use your information for data analysis, research, and to improve our services and offerings.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong>With Service Providers:</strong> We may share your information with trusted service providers who assist us in operating our business, such as payment processors, IT service providers, and marketing partners.
          </li>
          <li className="mb-2">
            <strong>For Legal Reasons:</strong> We may disclose your information if required by law or in response to legal processes, such as a court order or subpoena.
          </li>
          <li className="mb-2">
            <strong>In Business Transfers:</strong> If MyCare Labs undergoes a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
          </li>
          {/* <li className="mb-2">
            <strong>Directly from You:</strong> When you interact with our services, register for medical tests, or contact us, you may provide us with personal information such as your name, email address, phone number, and payment details.
          </li> */}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Choices and Rights</h2>
        <p className="mb-4">
          You have certain rights regarding your personal information, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong>Access and Correction:</strong> You may request access to the personal information we hold about you and request corrections if the information is inaccurate or incomplete.
          </li>
          <li className="mb-2">
            <strong>Opt-Out:</strong> You may opt-out of receiving promotional communications from us by following the unsubscribe instructions in the communication or by contacting us directly.
          </li>
          <li className="mb-2">
            <strong>Data Deletion:</strong> You may request the deletion of your personal information, subject to legal requirements and legitimate business purposes.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="mb-4">
          We implement a variety of security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. While we strive to protect your information, no security system is completely secure, and we cannot guarantee the absolute security of your data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to enhance your experience on our website, analyze site usage, and assist in our marketing efforts. You can manage your cookie preferences through your browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of any significant changes by posting the updated policy on our website with the effective date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at:
        </p>
        <address className="not-italic">
          MyCare Labs
        </address>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
