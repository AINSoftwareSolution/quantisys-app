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


export const cardData = [
  {
    id: 1,
    quote: "Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.",
    imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg",
    author: "Pelican Steve",
    site: "LittleSnippets.net",
  },
  {
    id: 2,
    quote: "Thank you. Before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder... When a report looks this good, you know it'll get an A. That's a tip kids. Write it down.",
    imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample27.jpg",
    author: "Max Conversion",
    site: "LittleSnippets.net",
  },
  {
    id: 3,
    quote: "My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll accept any responsibility for my actions.",
    imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg",
    author: "Eleanor Faint",
    site: "LittleSnippets.net",
  },
];
