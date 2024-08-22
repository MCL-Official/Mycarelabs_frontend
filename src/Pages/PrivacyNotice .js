import React from 'react';

const PrivacyNotice = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">My Care Labs Notice of Privacy Practices</h1>
      <p className="text-lg mb-4">
        This Notice Describes How Medical Information About You May Be Used And Disclosed And How You Can Get Access To This Information. Please Review It Carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Introduction</h2>
      <p className="mb-4">
        This Notice of Privacy Practices applies to GL CA CLIA LLC dba My Care Labs and all of its subsidiaries and business units (collectively referred to as “My Care Labs” in this Notice), except to the extent that a subsidiary, division, or business unit of My Care Labs performs occupational screening, forensic tests, paternity/identity tests, clinical trials tests or other services that do not involve standard electronic transactions for which the Department of Health and Human Services (“HHS”) has adopted standards.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">My Care Labs Protection of Protected Health Information (PHI)</h2>
      <p className="mb-4">
        Under the Health Insurance Portability and Accountability Act of 1996 (HIPAA), My Care Labs is required by law to maintain the privacy of health information that identifies you, called protected health information (PHI), and to provide you with notice of our legal duties and privacy practices regarding PHI. My Care Labs is committed to the protection of your PHI and will make reasonable efforts to ensure the confidentiality of your PHI, as required by statute and regulation. We take this commitment seriously and will work with you to comply with your right to receive certain information under HIPAA.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">My Care Labs Use and Disclosure of PHI</h2>
      <p className="mb-4">
        As permitted under HIPAA, the following categories explain the types of uses and disclosures of PHI that My Care Labs may make. Some of the uses and disclosures described may be limited or restricted by state laws or other legal requirements, for example, the Clinical Laboratory Improvement Amendments of 1988 (CLIA). Please contact our Privacy Officer, using the contact information provided at the end of this notice, for specific information regarding your state.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2"><strong>For treatment —</strong> My Care Labs may use or disclose PHI for treatment purposes, including disclosure to physicians, nurses, medical students, pharmacies, and other health care professionals who provide you with health care services and/or are involved in the coordination of your care, such as providing your physician with your laboratory test results.</li>
        <li className="mb-2"><strong>For payment —</strong> My Care Labs may use or disclose PHI to bill and collect payment for laboratory or genetic counseling services we provide. For example, My Care Labs may provide PHI to your health plan to receive payment for the health care services provided to you.</li>
        <li className="mb-2"><strong>For health care operations —</strong> My Care Labs may use or disclose PHI for health care operations purposes. These uses and disclosures are necessary, for example, to evaluate the quality of our laboratory testing, accuracy of results, accreditation functions, and for My Care Labs operation and management purposes.</li>
        <li className="mb-2"><strong>Appointment reminders and health-related benefits and services —</strong> My Care Labs may use and disclose PHI to contact you as a reminder that you have an appointment with us and may use and disclose PHI to tell you about health-related benefits and services that may be of interest to you.</li>
        <li className="mb-2"><strong>Disclosure of PHI to you —</strong> My Care Labs may disclose PHI to you or as directed by you to a third party. Your right to see and receive a copy of your PHI is listed below under patient rights regarding PHI.</li>
        <li className="mb-2"><strong>Emergency circumstances and notifications —</strong> My Care Labs may exercise its professional judgment based on the circumstances and use and disclose PHI for your safety.</li>
        {/* Add more list items for other disclosures as needed */}
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Patient Rights Regarding PHI</h2>
      <p className="mb-4">
        Subject to certain exceptions, HIPAA establishes the following patient rights with respect to PHI:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2"><strong>Right to Receive a Copy of the My Care Labs Notice of Privacy Practices —</strong> You have a right to receive a copy of this notice at any time.</li>
        <li className="mb-2"><strong>Right to Request Limits on Uses and Disclosures of your PHI —</strong> You have the right to request limits on how we use and disclose your PHI.</li>
        <li className="mb-2"><strong>Right to Request Confidential Communications —</strong> You have the right to request that My Care Labs communicate with you about your PHI at an alternative address or by an alternative means.</li>
        {/* Add more list items for other patient rights as needed */}
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">How to Contact Us or File a Complaint</h2>
      <p className="mb-4">
        If you have questions or comments regarding the My Care Labs Notice of Privacy Practices, or have a complaint about our use or disclosure of your PHI or our privacy practices, please contact: privacyofficer@MyCareLabs.com, call us at 800-790-4550 and ask for the My Care Labs HIPAA Privacy Officer, or send a written request to: HIPAA Privacy Officer, My Care Labs, 5500 Stewart Ave, Suite 108, Fremont, CA 94538.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Effective Date of Notice: April 1, 2023</h2>
      <p className="mb-4">Revised: March 20, 2023</p>
    </div>
  );
};

export default PrivacyNotice;
