import { PiCertificateFill } from "react-icons/pi";

export default function Certifications(props) {
  return (
    <section
      id="certifications"
      className={
        props.darkMode ? "bg-[#121212] px-8 sm:px-16" : "bg-white px-8 sm:px-16"
      }
    >
      <div className="flex flex-1 flex-col min-h-screen w-full">
        <div className="mx-auto flex">
          <PiCertificateFill size="35px" color="#7c3aed" className="mr-2" />
          <h1 className="text-3xl lg:text-5xl text-violet-600 font-bold font-poppins">
            Certifications
          </h1>
        </div>
      </div>
    </section>
  );
}
