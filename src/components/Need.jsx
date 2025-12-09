import React from "react";

const Need = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-8 lg:px-20 xl:px-40">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-gray-900">
            Why You Need a{" "}
            <span className="font-serif italic font-medium relative inline-block text-gray-800">
              Revamp?
            </span>
          </h1>
        </div>
        <ul className="space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed list-disc list-inside">
          <li>
            <span className="font-bold text-gray-900">
              Your product is amazing –
            </span>{" "}
            but does your design reflect that? A great product deserves a design
            that not only looks good but also converts.
          </li>

          <li>
            <span className="font-bold text-gray-900">You're busy –</span>{" "}
            figuring out what works and what doesn’t can be overwhelming. We
            take that off your plate.
          </li>

          <li>
            <span className="font-bold text-gray-900">We handle everything –</span>{" "}
            just send us your website, hero section, app screens, or pitch deck,
            and we’ll do the rest.
          </li>

          <li>
            <span className="font-bold text-gray-900">
              Deep analysis & redesign –
            </span>{" "}
            we identify what’s holding your design back visually and
            conversion-wise, then craft 1 to 3 improved variations.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Need;
