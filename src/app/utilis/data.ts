import { MdFlightTakeoff } from "react-icons/md";
import {
    OperationImg,
    ComplianceImg,
    CustomerImg,
    TechImg,
    ScalabilityImg,
    SecurityImg,

    // Services Image
    DistanceImg,
    FinanceImg,
    BookkeepingImg,
    APARImg,
    PayrollImg,
    CFOImg,
    
    
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
      title: "Make client setup, bookings, and trip management simple and intuitive",
      description:
        "Deliver world-class sales and bookings support for groups of any size. Keep clients coming back with easy-to-use client tools, integrated support channels, and premium concierge services.",
    },
    {
      title: "Integrate back-office functions to streamline fulfillment, ticketing, and more",
      description:
        "Integrate critical front-and-back-office functions to ensure consistent, high-quality customer engagement across all touchpoints and throughout the trip management process.",
    },
  ];

  // Data for stats section
  export const stats = [
    {
      value: 40,
      unit: "%",
      description: "Reduction in agency debit memos (ADM)",
    },
    {
      value: 30,
      unit: "%",
      description: "Decrease in average handle time (AHT)",
    },
  ];

  export const air = [
    {
    
      title: "Leverage our deep industry knowledge",
      description:
        "At TP, we understand that airlines are facing high volumes, an elevated cost-to-serve, seasonal spikes, challenges with passenger support, and operational inefficiencies. Learn more about our proven, industry-specific tools and best practices.",
    },
    {
     
      title: "Create companywide operational efficiencies",
      description:
        "Eliminate counterproductive silos by digitally integrating the front, middle, and back-office functions. Streamline end-to-end business operations and connect the entire customer journey to ensure consistent experiences across all touchpoints.",
    },
  ];

  // Hospitality 
    export const hosp = [
    {
      title: "Seamless reservations elevate bookings",
      description:
        "Deliver world-class sales and bookings support for groups of any size. Keep clients coming back with easy-to-use client tools, integrated support channels, and premium concierge services.",
    },
    {
      title: "Keep guests coming back with world-class service",
      description:
        "        Use integrated, digital-first tools to keep guests close and connected during their stay. Then, help them plan return visits with upsell and cross-sell offers and options.",
    },
  ];

  // Data for stats section
  export const stat = [
    {
      value: 60,
      unit: "%",
      description: "Reduction in agency debit memos (ADM)",
    },
    {
      value: 40,
      unit: "%",
      description: "Decrease in average handle time (AHT)",
    },
  ];

   
  export const car = [
    {
      title: "Empower travelers through intuitive, self-service tools and integrated customer support options",
      description:
        "Deliver a frictionless travel experience with easy-to-use booking and support tools, and increase upsell conversions with intelligent offers via each customer&props;s preferred channels."

    },
    {
      title: "Eliminate back-office silos to maximize business-wide efficiencies",
      description:
        " By integrating critical front-and-back office functions and applying proven Lean Six Sigma methodologies, companies can drive end-to-end efficiencies through process automation and operational disciplines.",
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
      title: " Deliver a seamless experience from booking to debarkation",
      description:
        " Simplify the reservation management process with  simple, self-service options, offer easy-to-add upgrades and excursions, and maintain close contact with travelers while on-board."

    },
    {
      title: "Increase upsell conversions",
      description:
        "    Increase up-sell conversions with predictive modeling and integrated, cross-channel promotions.",
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
