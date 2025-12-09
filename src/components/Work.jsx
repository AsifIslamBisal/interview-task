import React from "react";

const Work = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-8 lg:px-20 xl:px-40">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-gray-900">
            How We Work?
          </h1>
        </div>
        <ul className="space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed list-disc list-inside">
          <li>
            Send us your{" "}
            <span className="font-bold text-gray-900">
              logo, website link (for hero & landing page revamp), app
              screenshots, or pitch deck PDF —
            </span>{" "}
            whatever you need refreshed.
          </li>
          <li>
            We{" "}
            <span className="font-bold text-gray-900">
              analyze, brainstorm, and identify
            </span>{" "}
            what’s holding your design back, both aesthetically and in terms of
            conversions.
          </li>
          <li>
            We create{" "}
            <span className="font-bold text-gray-900">1 to 3 design variations,</span>{" "}
            refine them, and send you the final files (along with other
            iterations).
          </li>
          <li>
            If you love it, awesome! 🎉 We might even share it on our socials{" "}
            <span className="font-normal text-gray-700">(with your permission)</span>.
            If not, no worries — we’ll{" "}
            <span className="font-bold text-gray-900">revise</span> it based on the
            number of revisions listed in our package.
          </li>
          <li>
            That’s it! You get{" "}
            <span className="font-bold text-gray-900">
              full commercial and personal rights
            </span>{" "}
            to use your new design however you like. 🚀
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
