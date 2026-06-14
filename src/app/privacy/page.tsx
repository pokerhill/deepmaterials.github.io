const policySections = [
  {
    title: "1. Information We Collect",
    body: [
      "We may collect the following types of information:",
      "Information you provide to us. This may include your name, company name, job title, email address, phone number, mailing address, and any information you include when you contact us, request samples, submit an inquiry, download materials, or communicate with our team.",
      "Business and technical inquiry information. If you contact us about our products, we may collect information about your application, industry, product requirements, material interests, testing needs, or project specifications.",
      "Website usage information. We may collect basic information about how visitors use our website, such as IP address, browser type, device type, pages visited, referring website, and approximate location. We may collect this information through cookies, analytics tools, server logs, or similar technologies.",
    ],
  },
  {
    title: "2. How We Use Information",
    body: [
      "We use the information we collect to:",
      "Respond to inquiries and requests for product information, samples, quotes, or technical support.",
      "Provide, improve, and customize our website, products, and services.",
      "Communicate with customers, prospects, suppliers, and business partners.",
      "Evaluate product applications and technical requirements.",
      "Support sales, marketing, customer service, and business development activities.",
      "Maintain website security, prevent fraud, and protect our legal rights.",
      "Comply with applicable laws, regulations, and contractual obligations.",
    ],
  },
  {
    title: "3. Cookies and Analytics",
    body: [
      "Our website may use cookies and similar technologies to operate the site, understand website traffic, improve user experience, and evaluate the effectiveness of our communications.",
      "You can usually set your browser to refuse or delete cookies. Some website features may not work properly if cookies are disabled.",
    ],
  },
  {
    title: "4. How We Share Information",
    body: [
      "We do not sell personal information for money.",
      "We may share information with service providers that help us operate our website, manage communications, process inquiries, host data, provide analytics, or support our business operations.",
      "We may share information with employees, contractors, representatives, distributors, or business partners who need the information to respond to your inquiry or support a business relationship.",
      "We may share information with professional advisors, such as lawyers, accountants, auditors, or insurers.",
      "We may share information with government authorities, regulators, or other parties when required by law or when necessary to protect our rights, safety, property, or legal interests.",
      "We may share information with potential transaction parties in connection with a merger, financing, acquisition, sale of assets, reorganization, or similar business transaction.",
    ],
  },
  {
    title: "5. Data Security",
    body: [
      "We use reasonable administrative, technical, and physical safeguards designed to protect personal information. However, no website, network, or data transmission is completely secure. We cannot guarantee absolute security.",
    ],
  },
  {
    title: "6. Data Retention",
    body: [
      "We retain information for as long as reasonably necessary for the purposes described in this Privacy Policy, including to respond to inquiries, maintain business records, support customer relationships, comply with legal obligations, resolve disputes, and enforce agreements.",
    ],
  },
  {
    title: "7. Your Choices",
    body: [
      "You may contact us to request that we update, correct, or delete personal information you have provided to us, subject to legal, contractual, and business recordkeeping requirements.",
      "You may opt out of marketing communications by following the unsubscribe instructions in the communication or by contacting us directly.",
    ],
  },
  {
    title: "8. California Privacy Notice",
    body: [
      "If you are a California resident, you may have additional privacy rights under California law. Depending on our legal obligations and the nature of our relationship with you, these rights may include the right to know what personal information we collect, use, disclose, or share; the right to request deletion or correction of personal information; the right to opt out of certain sharing or sale of personal information; and the right not to be discriminated against for exercising privacy rights.",
      "Deep Materials does not knowingly sell personal information for money. If our data practices change, we will update this Privacy Policy as required.",
      "To submit a California privacy request, please contact us using the information below.",
    ],
  },
  {
    title: "9. Do Not Track and Global Privacy Controls",
    body: [
      "Some browsers transmit Do Not Track signals. Because there is not a uniform industry standard for responding to these signals, our website may not respond to them.",
      "Where required by applicable law, we will honor legally recognized browser-based opt-out preference signals, such as Global Privacy Control, if our website uses technologies that trigger such obligations.",
    ],
  },
  {
    title: "10. Children's Privacy",
    body: [
      "Our website is intended for business and professional audiences. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take reasonable steps to delete it.",
    ],
  },
  {
    title: "11. International Visitors",
    body: [
      "If you access our website from outside the United States, your information may be processed in the United States or other countries where our service providers operate. These countries may have data protection laws different from those in your location.",
    ],
  },
  {
    title: "12. Links to Other Websites",
    body: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices, content, or security of those third-party websites. You should review their privacy policies before providing information to them.",
    ],
  },
  {
    title: "13. Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date. Your continued use of our website after any update means you acknowledge the updated Privacy Policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-dm-midnight pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient">
            Privacy Policy
          </h1>
          <dl className="mt-6 grid gap-3 text-sm text-dm-gray-light sm:grid-cols-3">
            <div>
              <dt className="font-semibold text-dm-white">Effective Date</dt>
              <dd>June 10, 2026</dd>
            </div>
            <div>
              <dt className="font-semibold text-dm-white">Company</dt>
              <dd>Deep Materials Inc.</dd>
            </div>
            <div>
              <dt className="font-semibold text-dm-white">Website</dt>
              <dd>www.Deep-Materials.com</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-8 rounded-2xl glass glow-border p-6 sm:p-8">
          <p className="text-dm-gray-light leading-relaxed">
            Deep Materials Inc. (&quot;Deep Materials,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) respects your privacy. This
            Privacy Policy explains how we collect, use, disclose, and protect
            information when you visit our website, contact us, request product
            information, or otherwise interact with us.
          </p>

          {policySections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-dm-white">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3 text-dm-gray-light leading-relaxed">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-xl font-semibold text-dm-white">
              14. Contact Us
            </h2>
            <div className="mt-3 space-y-3 text-dm-gray-light leading-relaxed">
              <p>
                If you have questions about this Privacy Policy or wish to
                submit a privacy request, please contact us using the following
                email link:
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:sales@deep-materials.com?subject=DM%20Privacy%20Request"
                  className="text-dm-accent hover:text-dm-accent-light transition-colors"
                >
                  Sales@Deep-Materials.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
