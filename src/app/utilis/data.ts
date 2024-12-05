import { MdFlightTakeoff } from "react-icons/md";
import {
    OperationImg,
    ComplianceImg,
    CustomerImg,
    TechImg,
    ScalabilityImg,
    SecurityImg,

    // Services Image
    // DistanceImg,
    // FinanceImg,
    // BookkeepingImg,
    // APARImg,
    // PayrollImg,
    // CFOImg,
    
    
}
from "./Images";
import { GiCruiser } from "react-icons/gi";
import { FaCarAlt } from "react-icons/fa";

// footer 
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";
// import { FaSquareXTwitter } from "react-icons/fa6";

// export {
//   FaLinkedin,
//   FaFacebook,
//   FaInstagram,
//   FaSquareXTwitter,
// }





export const WhyChooseUs = [
    {
      id:1,
      title: " Operational Efficiency and Cost Reduction",
      description: "Quantisys enhances operational efficiency and reduces costs through optimized processes and effective back-office operations, adaptable to seasonal business fluctuations.",
      imgSrc: OperationImg,
      icon: "bi-activity",
      link: "service-details.html",
    },
    {
      id:2,  
      title: "Compliance and Regulatory Adherence ",
      description: "Our compliance management services ensure up-to-date adherence to travel industry standards and regulations, underlining our commitment to quality assurance.",
      imgSrc: ComplianceImg,
      icon: "bi-broadcast",
      link: "service-details.html",
    },
    {
      id:3,
      title: " Customer Service and Support",
      description: "Offering 24/7 multilingual support, Quantisys ensures prompt resolution of customer inquiries through our dedicated call centers, chat, and email services.",
      imgSrc: CustomerImg,
      icon: "bi-easel",
      link: "service-details.html",
    },
    {
      id:4,
      title: "Technology and Infrastrucute",
      description: " Quantisys offers advanced technology solutions including cloud computing, IT infrastructure management, and tech support, ensuring a robust, secure, and efficient digital environment.",
      imgSrc: TechImg,
      icon: "bi-bounding-box-circles",
      link: "service-details.html",
    },
    {
      id:5,
      title: "Scalability and Flexibility",
      description: "Our solutions are designed to scale with your business, offering flexibility to meet changing market demands and business growth.",
      imgSrc: ScalabilityImg,
      icon: "bi-calendar4-week",
      link: "service-details.html",
    },
    {
      id:6,
      title: "Data Security and Privacy",
      description: "Safeguard your sensitive data Quantisys commitment to advanced security protocols. Our data protection strategies ensure the confidentiality and integrity of your critical business information.",
      imgSrc: SecurityImg,
      icon: "bi-chat-square-text",
      link: "service-details.html",
    },
  ];

  // export const services = [
  //   {
  //   id: 1,
  //   title: "Capitalize Every Mile Traveled",
  //   description: " Seamless Integration: Struggling with multiple booking systems? Our expert team ensures smooth integration, allowing you to manage diverse platforms effortlessly. Dynamic Pricing Mastery: With our advanced data processing, stay ahead of fluctuating pricing trends for flights, hotels, and packages.",
  //   imgSrc: DistanceImg,
  //   // icon: "bi-broadcast",
  //   link: "service-details.html"
  //   },
  //   {
  //   id: 2,
  //   title: "Finance and Accounting",
  //   description: "Multi-Currency Expertise: Navigating various currencies? We manage transactions and exchange rate nuances with precision.Commission Management: Leave the complex task of tracking commissions to us, ensuring accurate and timely accounting.",
  //   imgSrc: FinanceImg,
  //   // icon: "bi-broadcast",
  //   link: "service-details.html"
  //   },
  //   {
  //     id: 3,
  //     title: "BookKeeping",
  //     description: "Efficient Invoice Reconciliation: Tackle the complexity of vendor invoices with our streamlined reconciliation services.nse Allocation: We ensure every expense is precisely allocated, maintaining financial clarity across your offerings.",
  //     imgSrc: BookkeepingImg,
  //     // icon: "bi-broadcast",
  //     link: "service-details.html"
  //   },
  //   {
  //     id: 4,
  //   title: "AP/AR Management",
  //   description: "Automated Payment Processing: Transform your accounts payable and receivable with our state-of-the-art automation solutions. Experience streamlined handling of customer deposits, vendor advances, and payment collections.",
  //   imgSrc: APARImg,
  //   // icon: "bi-broadcast",
  //   link: "service-details.html"
  //   },
  //   {
  //     id: 5,
  //   title: "Payroll Processing ",
  //   description: "Incentive and Commission Structures: Complex payroll structures? We handle them with ease, including incentives and commissions.International Staff Compliance: Our payroll services ensure full compliance for your international staff, covering taxation and labor laws.",
  //   imgSrc: PayrollImg,
  //   // icon: "bi-broadcast",
  //   link: "service-details.html"
  //   },
  //   {
  //    id: 6,
  //   title: "CFO Service",
  //   description: "Strategic Financial Leadership: Gain access to our team of US-based outsourced CFOs, bringing you top-tier financial expertise and leadership.Informed Investment Decisions: Make strategic investment choices in emerging markets and innovative technologies with insights from our experienced CFOs",
  //   imgSrc: CFOImg,
  //   // icon: "bi-broadcast",
  //   link: "service-details.html"
  //   },
  // ];

  // services
  interface Service {
    id: number;
    title: string;
    icon: React.ElementType;
    description: string;
  }
  
  export const services: Service[] = [
    {
      id: 1,
      title: "Travel Agency",
      icon: MdFlightTakeoff,
      description: "Efficiently manage the full booking and travel experience with intelligent, end-to-end traveler support services to maximize satisfaction and drive long-term loyalty.",
    },
    {
      id: 2,
      title: "Cruise Management",
      icon: GiCruiser,
      description: "Plan and manage cruise experiences with ease, offering tailored itineraries and exceptional onboard support.",
    },
    {
      id: 3,
      title: "Car Rentals",
      icon: FaCarAlt,
      description: "Provide seamless car rental booking services, offering diverse vehicle options and excellent customer support.",
    },
  ];
  
  // Testimonial

  export const testimonialData = [
    {
      name: "Maria Smantha",
      role: "Web Developer",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      stars: 4.5,
    },
    {
      name: "Lisa Cudrow",
      role: "Graphic Designer",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      quote: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
      stars: 5,
    },
    {
      name: "John Smith",
      role: "Marketing Specialist",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
      quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      stars: 4,
    },
  ];


  // services 
  export const sections = [
    {
      title: "Simplify and enhance client setup, bookings, and trip management with a seamless, intuitive process that prioritizes convenience, efficiency.",
      description:
        "Provide exceptional sales and booking support tailored for groups of all sizes. Ensure seamless client experiences with intuitive tools, integrated support channels, and personalized concierge services. Foster long-term client relationships with innovative solutions.",
    },
    {
      title: "Integrate back-office operations to optimize fulfillment, streamline ticketing, and enhance overall efficiency.",
      description:
        "Seamlessly integrate essential front- and back-office functions to deliver consistent, high-quality customer experiences across every interaction and throughout the entire trip management journey. Ensure smooth coordination and elevated.",
    },
  ];

  // Data for stats section
  // export const stats = [
  //   {
  //     value: 40,
  //     unit: "%",
  //     description: "Reduction in agency debit memos (ADM)",
  //   },
  //   {
  //     value: 30,
  //     unit: "%",
  //     description: "Decrease in average handle time (AHT)",
  //   },
  // ];

  export const air = [
    {
    
      title: "Leverage our industry expertise to achieve impactful results.",
      description:
        "At Quantisys, we recognize the challenges airlines face, including high demand, rising service costs, seasonal surges, passenger support complexities, and operational inefficiencies. Discover our proven, industry-tailored solutions.",
    },
    {
     
      title: "Drive operational excellence across the organization, enhancing efficiency and performance at every level.",
      description:
        "Break down silos by digitally unifying front, middle, and back-office functions. Simplify operations and link the entire customer journey to deliver seamless, consistent experiences at every touchpoint.",
    },
  ];

  // Hospitality 
    export const hosp = [
    {
      title: "Streamlined reservations boost booking efficiency for a smoother experience.",
      description:
        "Provide exceptional sales and booking support for groups of all sizes. Foster client loyalty with user-friendly tools, seamless support channels, and top-tier concierge services.",
    },
    {
      title: "Ensure guests return with exceptional service and unforgettable experiences.",
      description:
        " Utilize integrated, digital-first tools to keep guests engaged and connected throughout their stay. Then, encourage future visits with personalized upsell and cross-sell opportunities.",
    },
  ];

  // Data for stats section
  // export const stat = [
  //   {
  //     value: 60,
  //     unit: "%",
  //     description: "Reduction in agency debit memos (ADM)",
  //   },
  //   {
  //     value: 40,
  //     unit: "%",
  //     description: "Decrease in average handle time (AHT)",
  //   },
  // ];

   
  export const car = [
    {
      title: "Empower travelers with user-friendly, self-service tools and seamless customer support options for a smoother experience.",
      description:
        "Provide a seamless travel experience with intuitive booking and support tools while boosting upsell conversions through personalized, intelligent offers delivered via customers preferred channels."

    },
    {
      title: "Break down back-office silos to unlock organization-wide efficiencies and drive streamlined operations across the business.",
      description:
        " Integrating key front- and back-office functions with proven Lean Six Sigma strategies enables companies to achieve end-to-end efficiency through advanced process automation and robust operational practices.",
    },
  ];

  // Data for stats section
  // export const Stats = [
  //   {
  //     value: 60,
  //     unit: "%",
  //     description: "Reduction in agency debit memos (ADM)",
  //   },
  //   {
  //     value: 40,
  //     unit: "%",
  //     description: "Decrease in average handle time (AHT)",
  //   },
  // ];

  //  Cruise line 
  export const CruiseLine = [
    {
      title: "Ensure a hassle-free experience from initial booking to final disembarkation, delivering excellence at every step of the journey.",
      description:
        " Streamline the reservation management process with intuitive self-service options, seamless add-ons for upgrades and excursions, and consistent communication with travelers throughout their journey."

    },
    {
      title: "Boost upsell success rates and drive higher conversion outcomes.",
      description:
        "Maximize up-sell conversions by leveraging advanced predictive modeling, personalized recommendations, and integrated, multi-channel promotional campaigns tailored to customer preferences.",
    },
  ];

  // Data for stats section
  export const Stats = [
    {
      value: 50,
      unit: "%",
      description: "Reduction in agency debit memos (ADM)",
    },
    {
      value: 30,
      unit: "%",
      description: "Decrease in average handle time (AHT)",
    },
  ];
