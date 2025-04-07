import { CircleCheck, Microscope } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import imagenDeTest from "../assets/imagen-de-test.svg";
import logoTest from "../assets/Logo-Test.svg";

const sections = [1, 2, 3, 4];

const MarketingAuditoria: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const sectionElements = container?.querySelectorAll("section");

    const handleScroll = () => {
      if (!container || !sectionElements) return;

      let index = 0;
      sectionElements.forEach((section, i) => {
        const offsetTop = (section as HTMLElement).offsetTop;
        if (container.scrollTop >= offsetTop - 100) {
          index = i;
        }
      });
      setActiveSection(index);
    };

    container?.addEventListener("scroll", handleScroll);
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const progressHeight = ((activeSection + 1) / sections.length) * 100;

  return (
    <div
      ref={containerRef}
      className="w-full h-screen overflow-y-scroll bg-[#01443a] relative"
    >
      {/* Navbar */}
      <div className="w-full bg-[#eef5f4] py-2 flex justify-center">
        <img src={logoTest} alt="Logo" className="h-[90px]" />
      </div>

      {sections.map((section, index) => (
        <section
          key={index}
          className="w-full min-h-screen flex flex-col justify-center items-center px-6 relative z-0"
        >
          {/* Solo mostrar el título en la sección 1 */}
          {index === 0 && (
  <div className="w-full max-w-[1200px] mt-8 text-center px-4 z-10">
    <h1 className="text-white text-[24px] sm:text-[28px] md:text-[32px] font-medium font-[Lexend] leading-snug flex flex-col items-center justify-center">
      {/* Línea 1 (siempre visible) */}
      <span className="text-center">Aprende de Nuestro Metodo Especializado</span>

      {/* Línea 2 con ícono al final (siempre visible, ícono alineado) */}
      <span className="inline-flex items-center justify-center gap-x-2">
        de Marketing Dental
        <Microscope className="w-[1.2em] h-[1.2em] text-[#5ab4a2]" />
      </span>
    </h1>
  </div>
)}



          {/* Contenido por sección */}
          <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-[1.1fr_80px_1.1fr] gap-6 items-center mt-12 md:mt-0 px-2 md:px-4">
            {/* Imagen - Solo escritorio */}
            <div className="hidden md:flex justify-end">
              <img
                src={imagenDeTest}
                alt="Imagen mujer y niño"
                className="w-full max-w-[700px] h-auto object-contain"
              />
            </div>

            {/* Mobile versión: Número + Barra + Contenido juntos en fila */}
            <div className="md:hidden flex gap-6 items-start">
              {/* Número + barra */}
              <div className="flex flex-col items-center">
                <div className="text-white text-[28px] font-bold font-[DM Sans] mb-2">
                  0{section}
                </div>
                <div className="h-[150px] w-[5px] bg-[#1e1512] rounded-full relative overflow-hidden">
                  <div
                    className="absolute left-0 top-0 w-full bg-[#5ab4a2] transition-all duration-500"
                    style={{ height: `${progressHeight}%` }}
                  />
                </div>
              </div>

              {/* Texto principal y tarjetas */}
              <div className="text-white flex flex-col gap-4">
                <h3 className="text-[20px] font-medium font-[Lexend]">
                  Recibe una auditoría <br /> de marketing gratuita
                </h3>

                <p className="text-[16px] font-medium font-[Lexend] leading-relaxed">
                  Aprende más sobre nuestro{" "}
                  <strong>programa de 180 días</strong> y cómo puede cambiar tu{" "}
                  <strong>práctica dental</strong>
                </p>

                <div className="flex flex-col gap-3">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="bg-[#8fc29f]/40 rounded-lg px-4 py-3 flex items-center gap-3 w-full"
                      >
                        <CircleCheck className="text-green-400 w-6 h-6" />
                        <span className="text-[16px] font-medium font-[Lexend]">
                          Puedes ponerte en contacto con nosotros por correo
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Versión escritorio (barra separada) */}
            <React.Fragment>
              <div className="hidden md:flex flex-col items-center">
                <div className="text-white text-[42px] font-bold font-[DM Sans] mb-2">
                  0{section}
                </div>
                <div className="h-[300px] w-[6px] bg-[#1e1512] rounded-full relative overflow-hidden">
                  <div
                    className="absolute left-0 top-0 w-full bg-[#5ab4a2] transition-all duration-500"
                    style={{ height: `${progressHeight}%` }}
                  />
                </div>
              </div>

              <div className="hidden md:flex text-white flex-col gap-4 pl-4">
                <h3 className="text-[28px] font-medium font-[Lexend]">
                  Recibe una auditoría <br /> de marketing gratuita
                </h3>

                <p className="text-[18px] font-medium font-[Lexend] leading-relaxed max-w-[500px]">
                  Aprende más sobre nuestro{" "}
                  <strong>programa de 180 días</strong> y cómo puede cambiar tu{" "}
                  <strong>práctica dental</strong>
                </p>

                <div className="flex flex-col gap-3">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="bg-[#8fc29f]/40 rounded-lg px-4 py-3 flex items-center gap-3 w-full"
                      >
                        <CircleCheck className="text-green-400 w-6 h-6" />
                        <span className="text-[18px] font-medium font-[Lexend]">
                          Puedes ponerte en contacto con nosotros por correo
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </React.Fragment>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MarketingAuditoria;
