import React from "react";
import Image from "next/image";
import { PrivacyImg } from "../utilis/Images";

const Policy = () => {
  return (
    <>
      <div className="overflow-hidden">
        {/* Header Section */}
        <div className="relative bg-gray-900 mb-8 h-60 w-full">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-2">
              Privacy and Policy
            </h2>
          </div>

          <div className="absolute inset-0 opacity-40">
            <Image
              src={PrivacyImg}
              alt="About Banner"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
        <div className="container mx-auto p-6 text-gray-700" data-aos="fade-up">
          <div className="row">
            <h2 className="col text-center text-[#213b52] font-bold mb-6 text-2xl">
              Privacy Policy
            </h2>
          </div>

          <div className="responBx mb-6">
            <h6 className="sub-heading text-[#213b52] text-lg mb-4">
              This Privacy Policy was last updated on 12th Nov 2024.
            </h6>
            <p className="mb-4 text-md">
              Online Limited, including all legal entities under t group
              (hereafter referred to as quantisys with an exception of Online
              Freight Services Private Limited (YOFSPLL), respects your
              (customers - hereafter referred as &quot;you&quot; or
              &quot;user&quot;) privacy and values our relationship with our
              business partners, clients, third parties having contractual
              relationship with (hereafter referred to as &quot;third
              party&quot; or &quot;service provider&quot;), and any party who
              purchases/intend to purchase/inquire about any product(s) and/or
              service(s) made available through any &apos;s customer interface
              channels including Website, mobile site, mobile app & offline
              channels including call centers and offices (collectively referred
              herein as &quot;Sales Channels&quot;). We are committed to
              protecting your personally identifiable information (hereafter
              referred as &quot;information&quot; or &quot;personal
              information&quot; or &quot;personal data&quot; or &quot;special
              category of personal data&quot;) by handling it responsibly and
              safeguarding it using appropriate technical and organizational
              measures.
            </p>
            <p className="mb-4 text-md">
              We want to assure you that we follow appropriate standards when it
              comes to protecting your privacy on our Sales Channel. This policy
              outlines the types of personal information collected on our
              Website, how this data is used/processed and safeguarded as well
              as how users may exercise their rights with respect to personal
              information.
            </p>
            <p className="mb-4 text-md">
              This Privacy Policy applies to Quantisys.co company pages,
              communications and services (&quot;Services&quot;), including
              off-site Services, such as our email services, customer care and
              support services and the &quot;Contact us&quot;; &quot;Apply
              wi&quot; and &quot;Share on&quot; plugins on our digital
              properties.
            </p>

            <p className="mb-6 text-md">
              By using or accessing the Website or other Sales Channels, the
              user hereby agrees with the terms of this Privacy Policy and the
              contents herein.
            </p>
            <p className="mb-6 text-md">
              This Privacy Policy does not apply to any website(s), mobile sites
              and mobile apps of third parties, even if their websites/products
              are linked to our Website. User should take note that the
              information and privacy practices of Quantisys&apos;s business
              partners, advertisers, sponsors or other sites to which we provide
              hyperlink(s), may be materially different from this Privacy
              Policy. Accordingly, it is recommended that you review the privacy
              statements and policies of any such third parties.
            </p>

            <h5 className="font-bold text-2xl text-[#213b52]mb-4">
              Payment Information Security:
            </h5>
            <p className="mb-4 text-md">
              Ruzain Enterprises <b>(Herbskraft.com)</b> does not collect or
              store your credit card, debit card, or banking information. During
              checkout, this information is securely transmitted directly to our
              payment gateway provider, who then transmits it to the payment
              network or bank for authorization. Our payment gateway partners
              are compliant with relevant security standards, such as PCI
              (Payment Card Industry Data Security Standard), and have robust
              data security measures in place. We do not retain any portion of
              your payment details.
            </p>
            <p className="mb-6 text-md">
              Our website is hosted by a third-party service provider who
              specializes in secure data hosting. The information you provide is
              stored on servers owned and managed by these companies, which may
              be located in India, the United States, or other countries. Our
              Website hosting partners comply with industry-recognized security
              standards such as ISO/IEC 27001. While we take data security
              seriously and partner with reputable providers, we cannot be held
              liable for any data theft or security breaches that may occur at
              the data center hosting our website.
            </p>
            <p className="mb-6 text-md">
              <b>Quantisys for Business (Corporate):</b> In the event Quantisys
              is providing services to you as part of our agreement with your
              employer, contractor, business partner, affiliate or any other
              party who is having a contractual arrangement with Quantisys, then
              the terms and conditions stipulated in such contractual
              arrangement shall prevail over this data privacy policy. Such
              agreement may involve sharing personal data they control as part
              of that engagement. Our services may also include processing
              personal data under our client&apos;s control on our hosted
              software applications. All such processing will be governed by
              Quantisys&apos;s client privacy policy.
            </p>

            <p className="mb-6 text-md">
              In case you book travel services on behalf of your family or a
              minor, you agree:
            </p>
            <ul className="ml-4 text-md ">
              <li>
                To inform the individual about the content of this privacy
                policy
              </li>
              <li>
                To obtain any legally-required consent, for the collection, use,
                disclosure, and transfer (including cross-border transfer) of
                individual&apos;s personal information, from the individual in
                accordance with the legal and regulatory requirements
              </li>
            </ul>
            <p className="mb-6 text-md">
              In such a scenario, Quantisys will be acting as data processors
              while your respective employer, contractor, business partner,
              affiliate shall be acting as the data controller. It will be the
              obligation of the data controller to seek consent of the end
              customer.
            </p>
            <h5 className="font-bold text-lg text-[#213b52] mb-4">
              1. What Personal Data shall we collect?
            </h5>
            <p className="mb-4 text-md ">
              a. We collect the following personal and sensitive information
              from you when you transact through us:
            </p>
            <ul className="list-disc list-inside ml-4 mb-6 text-md">
              <li>Name, gender, age and date of birth</li>
              <li>
                Contact information such as address, email, and mobile phone
                number
              </li>
              <li>Country of residence</li>
              <li>
                Payment Details like Credit Card/ Debit Card details along with
                their expiry date (billing address in case of international
                debit/credit card).
              </li>
              <li>Passport Number & frequent flyer number (wherever needed)</li>
              <li>
                Lifestyle and social circumstances (for example, your hobbies)
              </li>
              <li>
                Family details/information (for example, your marital status and
                dependents)
              </li>
              <li>
                Employment and education details (for example, the organization
                you work for, your job title and your education details)
              </li>
              <li>
                Financial and tax-related information (like your income,
                investments and tax residency)
              </li>
              <li>
                Postings or messages on any blogs, forums, platforms, wikis or
                social media applications of Quantisys and Quantisys&apos;s
                third parties
              </li>
              <li>IP address, browser type and language, your access times</li>
              <li>Information in any complaints you make</li>
              <li>Details of how you use our products and services</li>
              <li>
                CCTV footage and other information we collect when you access
                our premises
              </li>
              <li>
                Recording of telephone calls to our representatives and call
                centers
              </li>
              <li>
                Details of how you like to interact with us (through email, SMS
                or WhatsApp) and other similar information relevant to our
                relationship
              </li>
              <li>Details shared by you over our chatbot - Yuva</li>
            </ul>
            <p className="text-md mb-2">
              b. The personal data we collect may also include
              &apos;sensitive&apos; or &apos;special categories&apos; of
              personal data such as details about your:
            </p>
            <ul className="ml-4 text-md mb-4">
              <li>
                Dietary requirements (for example, while providing your meal
                preference during flight/ hotel bookings)
              </li>
              <li>
                Health (so that we can make it easy for you to access our
                buildings, products and services, and/or any special assistance
                required by you)
              </li>
              <li>
                Sexual orientation (if you provide us with details of your
                spouse or partner)
              </li>
            </ul>
            <p className="text-md mb-4">
              If you choose not to provide, or object to us processing the
              information we collect, we may not be able to process your
              instructions or continue to provide some or all of our services to
              you (including our clients)Personal information of other
              customers/users/travelers
            </p>
            <p>
              If you provide personal information to us regarding individuals
              other than yourself, you agree
            </p>
            <ul className="ml-4">
              <li>
                To inform the individual about the content of this privacy
                policy
              </li>
              <li>
                To obtain any legally-required consent, for the collection, use,
                disclosure, and transfer (including cross-border transfer) of
                individual&apos;s personal information, from the individual in
                accordance with the legal and regulatory requirements
              </li>
            </ul>
            <p className="text-md text-bold mt-2">
              c. Personal information of child
            </p>
            <p className="mb-4">
              State that your company complies with the Children&apos;s Online
              Privacy Protection Act (COPPA) and thatyou take special measures
              to protect the privacy of children under 13.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;
