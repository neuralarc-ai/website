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
      className="relative bg-[#212121] text-white px-6 pt-24 pb-60 min-h-[500px] flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-stretch">
        {/* LEFT — contact rows */}
        <div className="flex-1 w-full min-w-0 flex flex-col border border-zinc-700">
          {contacts.map((item, i) => (
            <a
              key={i}
              href={`mailto:${item.email}`}
              className="flex-1 flex items-center justify-between px-6 py-6 md:py-8 border-b border-zinc-700 last:border-b-0 group hover:bg-zinc-100 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-16">
                <span
                  className={`${k2d.className} text-xs tracking-widest uppercase text-zinc-400 group-hover:text-zinc-700 font-mono whitespace-nowrap shrink-0 w-[200px] transition-colors`}
                >
                  {item.label}
                </span>
                <span
                  className={`${k2d.className} text-white group-hover:text-zinc-900 font-normal text-lg transition-colors`}
                >
                  {item.email}
                </span>
              </div>
              <span className="text-white group-hover:text-zinc-700 transition-colors text-2xl font-bold">
                →
              </span>
            </a>
          ))}
        </div>

        {/* RIGHT — label + title + description */}
        <div className="lg:w-[380px] shrink-0 flex flex-col">
          <p className="text-xs tracking-widest text-white/80 mb-6 font-mono">
            06 // CONTACT
          </p>
          <h2
            className={`${majorMono.className} lowercase text-transparent mb-6 text-3xl sm:text-4xl md:text-5xl leading-none tracking-[0.04em] text-stroke-white`}
          >
            work with
            <br />
            the lab
          </h2>
          <p
            className={`${k2d.className} text-zinc-400 max-w-[320px] text-base sm:text-lg md:text-xl leading-relaxed`}
          >
            We collaborate with researchers, enterprises, and builders who are
            serious about AI. If you are building something that matters, we
            want to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}
