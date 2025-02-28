import React from "react";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Axa_logo.svg/2560px-Axa_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo_BPCE.svg/2560px-Logo_BPCE.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Renault_2009_logo.svg/2560px-Renault_2009_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_BPI_France.svg/1280px-Logo_BPI_France.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Societe-Generale.svg/2560px-Societe-Generale.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Logo_Cr%C3%A9dit_Agricole.svg/2560px-Logo_Cr%C3%A9dit_Agricole.svg.png",
];

export const LogoSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-transparent">
      <div className="flex animate-scroll">
        {/* First set of logos */}
        <div className="flex space-x-24 items-center px-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="h-8 w-auto object-contain brightness-0 invert opacity-60"
            />
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex space-x-24 items-center px-12">
          {logos.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="h-8 w-auto object-contain brightness-0 invert opacity-60"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
