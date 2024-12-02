import React from "react";
import Image from "next/image";
import { TermsAndConditionsImage } from "../utilis/Images";

const TermsAndConditions = () => {
  return (
    <div className="overflow-hidden">
      {/* Header Section */}
      <div className="relative bg-gray-900 mb-8 h-60 w-full">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-2">
            Terms And Conditions
          </h2>
        </div>

        <div className="absolute inset-0 opacity-40">
          <Image
            src={TermsAndConditionsImage}
            alt="About Banner"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
      </div>
      <div className="container mx-auto p-6 text-gray-700" data-ios="fade-up">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center text-[#213b52]  mb-4">
            Terms & Conditions
          </h1>
          <p className="text-center text-md text-gray-900">
            Please read the following terms carefully before booking your
            tickets.
          </p>
        </div>

        {/* Section 1: Flight Tickets */}
        <section className="mb-6 pl-5">
          <h2 className="text-2xl font-semibold text-[#213b52] mb-3 ">
            1. Flight Tickets
          </h2>
          <h3 className="text-2xl font-medium text-[#213b52]  mb-2">
            Terms of the Airlines
          </h3>
          <ul className="space-y-4 text-md list-disc list-inside pl-5">
            <li>
              The airline tickets available through the Website are subject to
              the terms & conditions of the concerned airline, including
              cancellation and refund policies.
            </li>
            <li>
              Quantisys merely acts as a facilitator for booking flight tickets.
              The contract of service is between the User and the concerned
              airline.
            </li>
            <li>
              Airlines may reschedule or cancel flights without prior notice.
              Quantisys has no control over such changes and is not liable for
              any associated losses.
            </li>
            <li>
              Ticket restrictions, services, and prices may vary depending on
              the fare type.
            </li>
            <li>
              Baggage allowance is governed by the airline&apos;s policies. Some
              fares may not include free check-in baggage.
            </li>
          </ul>
        </section>

        {/* Section 2: Code Share */}
        <section className="mb-6 pl-5">
          <h3 className="text-2xl font-medium text-[#213b52]  mb-2">
            Code Share
          </h3>
          <ul className="space-y-4 text-md list-disc list-inside pl-5">
            <li>
              Some airlines enter into &quot;code share&quot; agreements with
              other Airlines. This means that on certain routes, the airline
              carrier selling or marketing the flight ticker does not fly its
              own aircraft to that destination. Instead, it contracts or
              partners with another airline to fly to that destination. The
              partner airline is listed as &quot;operated by&quot; in the
              booking flow.
            </li>
            <li>
              If your flight is a code share, it will be disclosed to you in the
              booking process and prior to payment.
            </li>
            <li>
              Quantisys will disclose any such code-share arrangements to the
              User, only when the ticketing airline discloses it to Quantisys in
              the first place.
            </li>
          </ul>
        </section>

        {/* Section 3: Pricing */}
        <section className="mb-6 pl-5">
          <h3 className="text-2xl font-medium text-[#213b52]  mb-2">Pricing</h3>
          <ul className="space-y-4 text-md list-disc list-inside pl-5">
            <li>
              Prices displayed include base fare, applicable taxes, and
              convenience fees. Users must pay the full amount for booking
              confirmation.
            </li>
            <li>
              Infant fares apply only if the infant is under 24 months for the
              entire itinerary. Infants and children must travel with an adult.
            </li>
          </ul>
        </section>

        {/* Section 4: Travel Documents */}
        <section className="mb-6 pl-5">
          <h3 className="text-2xl font-medium text-[#213b52] mb-2">
            Travel Documents
          </h3>
          <ul className="space-y-4  text-md list-disc list-inside pl-5">
            <li>
              Users must carry valid documents such as identity proof, passport,
              visa, etc. Quantisys is not liable for issues arising from missing
              documents.
            </li>
            <li>
              Travel document requirements may vary by jurisdiction. Users
              should verify requirements with respective airlines or embassies.
            </li>
          </ul>
        </section>

        {/* Section 5: Check-in Terms */}
        <section className="mb-6 pl-5">
          <h3 className="text-2xl font-medium text-[#213b52]  mb-2">
            Check-in Terms
          </h3>
          <ul className="space-y-4 text-md list-disc list-inside pl-5">
            <li>
              Check-in typically starts 2 hours before domestic flights and 3
              hours before international flights. Verify timing with the
              airline.
            </li>
            <li>
              Valid ID proof, passport, and age proofs must be carried as per
              airline requirements.
            </li>
          </ul>
        </section>

        {/* Section 6: Changes to Booking */}
        <section className="mb-6 pl-5">
          <h3 className="text-2xl font-medium text-[#213b52]  mb-2">
            Changes to Booking
          </h3>
          <ul className="space-y-4 text-md list-disc list-inside pl-5">
            <li>
              Any changes that are made to any existing booking shall be subject
              to certain charges levied by the respective airline, apart from
              the service fee charged by Quantisys.
            </li>
            <li>
              The User shall be obligated to pay applicable charges in the event
              of any alteration or modification to an existing booking. However,
              depending on the airline&apos;s policy and fare className, charges
              for changes or modifications to existing bookings may vary.
            </li>
          </ul>
        </section>

        {/* Section 7: Refund */}
        <section className="mb-6 pl-5">
          <h3 className="text-2xl font-medium text-[#213b52] mb-2">Refund</h3>
          <ul className="space-y-4 text-md list-disc list-inside pl-5">
            <li>
              Refunds will be processed as per the airline fare rules and
              cancellation policy. Such refunds shall be subject to Quantisys
              receiving the same from the airlines. However, the convenience fee
              paid to Quantisys paid at the time of booking is a non-refundable
              fee.
            </li>
            <li>
              All cancellations made directly with the airline need to be
              intimated to Quantisys, in order to initiate the process of
              refund. The processing time for refunds may vary depending on the
              mode of payment, bank etc. The refund shall be processed after
              deducting the Quantisys service fee which is independent of the
              convenience fee as mentioned above.
            </li>
            <li>
              The refund will be credited to the same account from which the
              payment was made. For example, if the User used a credit card,
              Quantisys will make an appropriate charge reversal to the same
              credit card; likewise, if the User used a debit card,
              ReservatinKart will credit the money to the same debit card.
            </li>
            <li>
              In the event of cancellation and refund of partially utilized
              tickets, upfront discount and promo code discount availed at the
              time of booking would be deducted from the refund amount.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
