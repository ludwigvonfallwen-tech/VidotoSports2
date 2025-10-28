import { cn } from "@/lib/utils";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

const logos = [
  {
    src: "public/ABCLogo.png",
    alt: "Hotel Escola ABX",
  },
  {
    src: "public/ColibriLogo.webp",
    alt: "Escola Colibri",
  },
  {
    src: "public/AdventistaLogo.png",
    alt: "Colégio Adventista",
  },
  {
    src: "public/PacqueLogo.png",
    alt: "Colégio Pacque",
  },
  {
    src: "public/PDGLogo.png",
    alt: "Colégio Pingo de Gente",
  },
  {
    src: "public/pirlimpimpimLogo.webp",
    alt: "Colégio Pirlimpimpim",
  },
  {
    src: "public/TalentosLOGO.png",
    alt: "Colégio Talentos",
  },
];

export default function TrustedBy() {
  return (
    <div className="w-full place-content-center bg-gradient-to-b from-white to-gray-50 py-16 relative">
      <div
        aria-hidden="true"
        className={cn(
          "-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,rgba(33,51,185,0.05),transparent_50%)]",
          "blur-[30px]"
        )}
      />

      <section className="relative mx-auto max-w-5xl px-6">
        <h2 className="mb-5 text-center font-medium text-gray-600 text-xl tracking-tight md:text-3xl">
          <span className="text-gray-500">Parceiros de confiança.</span>
          <br />
          <span className="font-semibold text-[#2133B9]">Excelência reconhecida.</span>
        </h2>
        <div className="mx-auto my-5 h-px max-w-sm bg-gray-200 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={logos} />

        <div className="mt-5 h-px bg-gray-200 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </section>
    </div>
  );
}
