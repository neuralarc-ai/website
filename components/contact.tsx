import { majorMono, k2d } from "@/lib/fonts";

const contacts = [
  { label: "Research Collaboration", email: "research@f-r.co" },
  { label: "Product Inquiries", email: "products@f-r.co" },
  { label: "Press & Media", email: "press@f-r.co" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#212121] text-white px-6 pt-40 pb-60 overflow-hidden"
    >
      {/* Left border rail */}
      {/* <div
        className="absolute left-16 top-0 bottom-0 w-px bg-[#F2F2F2]"
        aria-hidden="true"
      /> */}

      {/* Large section number */}

      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-xl">
          {/* Section label */}
          <p className="text-xs tracking-widest text-white/80 mb-6 font-mono">
            05 // CONTACT
          </p>

          {/* Title */}
          <h2
            className={`${majorMono.className} lowercase leading-none mb-2 text-3xl sm:text-4xl md:text-5xl tracking-normal text-stroke-white text-transparent`}
          >
            work with
            <br />
            the lab
          </h2>

          {/* Subtitle */}
          <p
            className={`${k2d.className} text-zinc-500 mt-6 mb-16 text-base sm:text-lg md:text-xl leading-relaxed`}
          >
            We collaborate with researchers, enterprises, and builders who are
            serious about AI. If you are building something that matters, we
            want to hear from you.
          </p>
        </div>

        {/* Contact rows */}
        <div className="border border-zinc-300 max-w-6xl">
          {contacts.map((item, i) => (
            <a
              key={i}
              href={`mailto:${item.email}`}
              className="flex items-center justify-between px-6 py-5 border-b border-zinc-300 last:border-b-0 group hover:bg-zinc-100 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-24">
                <span
                  className={`${k2d.className} text-xs tracking-widest uppercase text-zinc-400 font-mono whitespace-nowrap shrink-0 w-[220px]`}
                >
                  {item.label}
                </span>
                <span
                  className={`${k2d.className} text-white group-hover:text-zinc-900 font-normal text-lg`}
                >
                  {item.email}
                </span>
              </div>
              <span className="text-zinc-400 group-hover:text-zinc-700 transition-colors text-lg">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
