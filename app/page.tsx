import Image from "next/image";

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 68 68"
      fill="none"
      className="w-16 h-16 drop-shadow-lg"
    >
      <circle cx="34" cy="34" r="34" fill="rgba(0,0,0,0.55)" />
      <polygon points="26,20 52,34 26,48" fill="white" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/IMG_6231.webp"
          alt="Group photo with local community in India"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] mb-4 opacity-80 font-medium">
            India &middot; November 2026
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Family Missions Trip
          </h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-xl mx-auto">
            An invitation to step into what God is doing — together, as families.
          </p>
          <a
            href="#story"
            className="inline-block mt-10 px-8 py-3 border border-white/40 rounded-full text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-6">
            Our Heart
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            Why India? Why Families?
          </h2>
          <div className="space-y-6 text-muted leading-relaxed text-lg">
            <p>
              We&apos;ve felt called to make a family missions trip an annual
              tradition — and we want to invite other families to step into what
              God is doing overseas and be part of it together.
            </p>
            <p>
              We&apos;re starting in India because Ben traveled there last year
              and knows the area, the people, and the ministry well. That trip
              transformed his prayer life, deepened his relationship with Jesus,
              and broke his heart for the nations and the lost.
            </p>
            <p className="font-medium text-foreground">
              He met people whose faith will challenge yours. We believe God
              wants to do the same work in every family that comes.
            </p>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {[
          { src: "/images/IMG_6123.webp", alt: "Ben with a child at school" },
          { src: "/images/IMG_6432.webp", alt: "Selfie with local youth" },
          { src: "/images/IMG_6446.webp", alt: "Woman in prayer" },
          { src: "/images/IMG_6457.webp", alt: "Ben with smiling children" },
        ].map((img) => (
          <div key={img.src} className="relative aspect-square overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </section>

      {/* Video section */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-6">
            See It for Yourself
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Watch the Journey
          </h2>
          <p className="text-white/60 mb-10 text-lg">
            When Ben went last year, the team captured the experience. This is a
            glimpse of what&apos;s waiting for your family.
          </p>
          <a
            href="https://www.youtube.com/watch?v=Uc9nMylmQiY"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block max-w-2xl mx-auto rounded-2xl overflow-hidden group"
          >
            <Image
              src="/images/IMG_6239.webp"
              alt="Watch the missions trip video"
              width={960}
              height={540}
              className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <PlayIcon />
            </div>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm tracking-wide">
              Watch on YouTube
            </span>
          </a>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-6">
              The Details
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              What to Know
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "When",
                body: "Early November 2026 — approximately 10 days, potentially up to 2 weeks. Exact dates to be confirmed.",
              },
              {
                title: "Where",
                body: "India. We'll be based in a village setting, embedded in the local community, with a short trip to a nearby hill station for rest.",
              },
              {
                title: "Who",
                body: "Families welcome. Suggested minimum age for children is 3–4 years old. If you have younger kids, talk to us and we'll figure it out together.",
              },
              {
                title: "Travel",
                body: "Expect 18–24 hours of flight time with 1–2 layovers from Atlanta. It's long — but absolutely worth it. The adventure starts the moment you leave.",
              },
              {
                title: "Pace",
                body: "Structured but family-friendly. Shorter ministry days with built-in rest so families with young children can be fully present.",
              },
              {
                title: "Weather",
                body: "Pleasant and cool. Daytime highs around 20–26°C (68–79°F) at base; cooler 10–18°C (50–65°F) in the hills. Ideal travel season.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-muted leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry */}
      <section className="py-24 px-6 bg-[#f3ede6]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-6">
              On the Ground
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              What We&apos;ll Be Doing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto">
            {[
              "Serving alongside a local ministry and living within the community day to day",
              "Visiting a local school and investing time in the children there",
              "Organizing activities for kids — games, group prayer time",
              "Prayer walks through the village and surrounding areas",
              "Worshiping and fellowshipping with local believers",
              "A short trip to a nearby hill station for rest and reflection",
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-accent text-2xl leading-none mt-1">
                  &bull;
                </span>
                <p className="text-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More photos */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-1">
        {[
          { src: "/images/IMG_6135.webp", alt: "Adventure on the road" },
          { src: "/images/IMG_6409.webp", alt: "Selfie with local youth" },
          { src: "/images/IMG_6163.webp", alt: "Children in the village" },
          { src: "/images/IMG_6848.webp", alt: "Ben with a boy" },
          { src: "/images/IMG_6971.webp", alt: "Family on a motorcycle" },
          { src: "/images/IMG_6976.webp", alt: "Tuk-tuk selfie" },
        ].map((img) => (
          <div
            key={img.src}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </section>

      {/* Costs */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-6">
              Investment
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Estimated Costs
            </h2>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 border-b border-border">
              <div className="p-6 md:p-8 font-bold">Adults</div>
              <div className="p-6 md:p-8 text-muted">
                ~$2,500–$3,000 per person
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-border">
              <div className="p-6 md:p-8 font-bold">Children (3–4+)</div>
              <div className="p-6 md:p-8 text-muted">
                Lower — child flight discounts &amp; reduced costs
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="p-6 md:p-8 font-bold">Includes</div>
              <div className="p-6 md:p-8 text-muted">
                Flights, transport, meals, lodging, activities, visa &amp;
                insurance
              </div>
            </div>
          </div>

          <div className="mt-8 bg-accent/10 rounded-2xl p-8 text-center">
            <p className="text-foreground font-medium mb-2">
              We will help every family fundraise.
            </p>
            <p className="text-muted leading-relaxed">
              Ben will set up a fundraising platform and shareable page so each
              family can raise support through their personal network. We&apos;ll
              also hold a fundraising training call early in the process.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-6">
            Ready?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight">
            Next Steps
          </h2>

          <div className="space-y-8 text-left max-w-lg mx-auto">
            {[
              {
                num: "01",
                title: "Pray about it",
                body: "Ask God if this is something He's calling your family to.",
              },
              {
                num: "02",
                title: "Reach out to us",
                body: "With questions or to express interest. No commitment required.",
              },
              {
                num: "03",
                title: "Start passports",
                body: "If you don't already have valid ones, start the process now.",
              },
              {
                num: "04",
                title: "Watch for updates",
                body: "We'll share more details as dates and costs are finalized.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <span className="text-accent font-mono text-sm mt-1">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-6">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-2">Ben Valentin</h3>
              <p className="text-muted">
                <a
                  href="mailto:bjoel.valentin@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  bjoel.valentin@gmail.com
                </a>
              </p>
              <p className="text-muted">
                <a
                  href="tel:+16787086066"
                  className="hover:text-accent transition-colors"
                >
                  678-708-6066
                </a>
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-2">Celine Valentin</h3>
              <p className="text-muted">
                <a
                  href="mailto:celineevalentin@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  celineevalentin@gmail.com
                </a>
              </p>
              <p className="text-muted">
                <a
                  href="tel:+14079238468"
                  className="hover:text-accent transition-colors"
                >
                  407-923-8468
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-border">
        <p className="text-muted italic text-lg">
          &ldquo;Apart from Me you can do nothing.&rdquo;
        </p>
        <p className="text-muted/60 text-sm mt-2">— John 15:5</p>
        <p className="text-muted/40 text-xs mt-8">
          Hosted by Ben &amp; Celine Valentin &middot; 2026
        </p>
      </footer>
    </main>
  );
}
