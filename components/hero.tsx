import { majorMono, k2d } from "@/lib/fonts";
import { PixelFloat } from "./PixelFloat";
import { GlitchImage } from "./GlitchImage";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#f0efed] px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-40 sm:pb-56 md:pb-72 text-center overflow-hidden">
      {/* Left border rail */}
      <GlitchImage
        src="/images/pixels-1.png"
        className="absolute bottom-0 right-0 w-full"
        alt=""
      />
      <PixelFloat count={40} color="#202020" />
      {/* <div
        className="absolute left-16 top-0 bottom-0 w-px bg-[#202020]"
        aria-hidden="true"
      /> */}
      {/* Wordmark */}
      <img
        src="/images/logo-black.svg"
        alt="Fahrenheit Research logo"
        className="relative z-10 mb-10 sm:mb-14 md:mb-18 w-14 sm:w-16 md:w-20 h-auto"
      />
      <h1
        className={`${majorMono.className} relative z-10 lowercase text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-[0.06em] text-stroke-black`}
        style={{ color: "#202020" }}
      >
        Fahrenheit
        <br />
        Research
      </h1>

      {/* Tagline */}
      <p
        className={`${k2d.className} relative z-10 mt-5 sm:mt-6 md:mt-8 text-center text-zinc-500 font-thin text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-none tracking-normal px-2`}
      >
        We build intelligence at the edge of what is known.
        <br />
        Our research becomes product.
      </p>
    </section>
  );
}

function LogoMark() {
  return (
    <svg
      width="48"
      height="32"
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Fahrenheit Research logo mark"
    >
      {/* Three stacked horizontal bars, offset like the screenshot */}
      <rect x="0" y="0" width="48" height="4" rx="2" fill="#2a2a2a" />
      <rect x="6" y="12" width="42" height="4" rx="2" fill="#2a2a2a" />
      <rect x="0" y="24" width="36" height="4" rx="2" fill="#2a2a2a" />
    </svg>
  );
}
