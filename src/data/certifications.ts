export type Certification = {
  title: string;
  image: string;
  text: string;
};

export const certifications: Certification[] = [
  {
    title: "FDA",
    image: "/assets/images/accreditation/fda.png",
    text: "FDA is a federal agency of the United States Department of Health and Human Services. The systems provided for the U.S market have been registered and hold an FDA 510(K) when applicable.",
  },
  {
    title: "Cofepris",
    image: "/assets/images/accreditation/cofepris.png",
    text: "Cofepris is a regulatory body of the Mexican government that is responsible for regulating a variety of health related topics in Mexico, including medical devices.",
  },
  {
    title: "ISO 13485",
    image: "/assets/images/accreditation/iso.png",
    text: "ISO 13485 is a quality management system for the design and manufacture of medical devices. We have been assessed and found in compliance with ISO 13485:2016. As a result, our facility proudly has this certificate hanging in our front lobby.",
  },
];
