import Image from "next/image";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ParallaxImage,
} from "@/components/Motion";
import { SiteNav } from "@/components/SiteNav";
import { VideoLightbox } from "@/components/VideoLightbox";

export default function Home() {
  const youtubeThumbnail =
    "https://i.ytimg.com/vi/Uc9nMylmQiY/maxresdefault.jpg";

  return (
    <main className="flex flex-col bg-[#fcfcfc] text-zinc-950 selection:bg-zinc-900 selection:text-white">
      <SiteNav />

      {/* Hero: Asymmetric layout, no centered text over dark image */}
      <section className="relative min-h-[100dvh] pt-32 pb-16 px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Left Typography */}
          <div className="lg:col-span-6 z-10 pb-8 lg:pb-16 flex flex-col justify-end">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-zinc-950"></div>
                <p className="text-sm uppercase tracking-[0.2em] font-medium">
                  An Invitation
                </p>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-[6.5rem] font-medium tracking-tighter leading-[0.95] mb-8 text-balance">
                Family
                <br />
                Missions
                <br />
                Trip
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-[45ch] mb-12">
                Step into what God is doing overseas. An intentional journey to
                India for families to serve, pray, and experience global
                ministry together.
              </p>
              <div className="flex gap-6 items-center">
                <a
                  href="#story"
                  className="px-8 py-4 bg-zinc-950 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors active:scale-95 flex items-center justify-center"
                >
                  Read the Vision
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Imagery */}
          <div className="lg:col-span-6 h-[50vh] lg:h-[80vh] relative rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
            <ParallaxImage
              src="/images/IMG_6231.webp"
              alt="Group photo with local community in India"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* The Story — image in left rail on large screens so it reads with the section, not tacked under copy */}
      <section id="story" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <div className="lg:col-span-4 flex flex-col gap-10">
            <FadeIn>
              <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest lg:sticky lg:top-32">
                01 / Our Heart
              </p>
            </FadeIn>
            <FadeIn className="w-full">
              <div className="relative aspect-[4/5] max-h-[min(72vh,640px)] overflow-hidden rounded-2xl">
                <Image
                  src="/images/IMG_6239.webp"
                  alt="A moment from the previous India trip"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <StaggerContainer>
              <StaggerItem>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-12 text-balance">
                  Why India? <br />
                  Why Families?
                </h2>
              </StaggerItem>
              <StaggerItem>
                <div className="space-y-8 text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-[55ch]">
                  <p>
                    We&apos;ve felt called to make a family missions trip an annual
                    tradition. We want to invite other families to step out of
                    their routine, witness what God is doing overseas, and be a
                    part of it.
                  </p>
                  <p>
                    We&apos;re starting in India because Ben traveled there last year
                    and knows the area, the people, and the ministry well. That
                    trip transformed his prayer life, deepened his relationship
                    with Jesus, and broke his heart for the nations and the lost.
                  </p>
                  <p className="text-zinc-950 font-medium">
                    He met people whose faith will challenge yours. We believe
                    God wants to do the same transformative work in every family
                    that comes.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem className="pt-12 border-t border-zinc-200 mt-12">
                <p className="text-sm font-mono uppercase tracking-[0.24em] text-zinc-400 mb-3">
                  Last Year
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed max-w-[50ch]">
                  This trip is personal for us. These aren&apos;t stock moments or
                  abstract ideas, but real faces, real friendships, and a real
                  place we&apos;re inviting families into.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Asymmetric Gallery */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          <div className="md:col-span-5 h-[400px] md:h-[600px] mt-0 md:mt-24 rounded-2xl overflow-hidden">
            <ParallaxImage
              src="/images/IMG_6123.webp"
              alt="Ben with a child at school"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="md:col-span-7 h-[400px] md:h-[700px] rounded-2xl overflow-hidden">
            <ParallaxImage
              src="/images/IMG_6446.webp"
              alt="Woman in prayer"
              sizes="(min-width: 768px) 56vw, 100vw"
            />
          </div>
          <div className="md:col-span-4 h-[320px] md:h-[420px] rounded-2xl overflow-hidden">
            <ParallaxImage
              src="/images/IMG_6135.webp"
              alt="Roadside travel moment during the trip"
              sizes="(min-width: 768px) 32vw, 100vw"
            />
          </div>
          <div className="md:col-span-3 h-[320px] md:h-[420px] rounded-2xl overflow-hidden">
            <ParallaxImage
              src="/images/IMG_6432.webp"
              alt="Selfie with local youth"
              sizes="(min-width: 768px) 24vw, 100vw"
            />
          </div>
          <div className="md:col-span-5 h-[320px] md:h-[420px] rounded-2xl overflow-hidden">
            <ParallaxImage
              src="/images/IMG_6457.webp"
              alt="Ben with smiling children"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="md:col-span-12 h-[340px] md:h-[520px] rounded-2xl overflow-hidden">
            <ParallaxImage
              src="/images/IMG_6409.webp"
              alt="Shared moment with local youth"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-32 px-6 md:px-12 bg-zinc-950 text-white selection:bg-white selection:text-zinc-950">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <FadeIn className="text-center mb-16">
            <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">
              02 / The Journey
            </p>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6">
              See It for Yourself
            </h2>
            <p className="text-xl text-zinc-400 max-w-[50ch] mx-auto">
              When Ben went last year, the team captured the experience. This is
              a glimpse of what&apos;s waiting for your family.
            </p>
          </FadeIn>

          <FadeIn className="w-full max-w-5xl">
            <VideoLightbox
              videoId="Uc9nMylmQiY"
              thumbnailSrc={youtubeThumbnail}
              title="Watch the Journey"
              eyebrow="See the Trip"
            />
          </FadeIn>
        </div>
      </section>

      {/* The Details (No Cards, Dashboard Hardened) */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 lg:col-span-3">
            <FadeIn>
              <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest sticky top-32">
                03 / Logistics
              </p>
              <h2 className="text-4xl font-medium tracking-tight leading-tight mt-6">
                What to Know
              </h2>
            </FadeIn>
          </div>

          <div className="md:col-span-8 lg:col-span-9">
            <StaggerContainer className="flex flex-col border-t border-zinc-200">
              {[
                {
                  title: "When",
                  desc: "Early November 2026. Approximately 10 days, potentially up to 2 weeks. Exact dates to be confirmed.",
                },
                {
                  title: "Where",
                  desc: "India. Based in a village setting embedded in the local community, with a short trip to a nearby hill station for rest.",
                },
                {
                  title: "Who",
                  desc: "Families welcome. Suggested minimum age for children is 3–4 years old. If you have younger kids, talk to us.",
                },
                {
                  title: "Pace",
                  desc: "Structured but family-friendly. Shorter ministry days with built-in rest so families with young children can be fully present.",
                },
                {
                  title: "Weather",
                  desc: "Pleasant and cool. Daytime highs around 20–26°C (68–79°F) at base; cooler 10–18°C (50–65°F) in the hills.",
                },
              ].map((item, idx) => (
                <StaggerItem
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 border-b border-zinc-200"
                >
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="md:col-span-2 text-lg text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* On The Ground */}
      <section className="py-32 px-6 md:px-12 bg-zinc-100">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 lg:col-span-3">
            <FadeIn>
              <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest sticky top-32">
                04 / The Work
              </p>
              <h2 className="text-4xl font-medium tracking-tight leading-tight mt-6">
                On the Ground
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-8 lg:col-span-9">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {[
                "Serving alongside a local ministry and living within the community day to day.",
                "Visiting a local school and investing time in the children there.",
                "Organizing activities for kids — games, group prayer time.",
                "Prayer walks through the village and surrounding areas.",
                "Worshiping and fellowshipping with local believers.",
                "A short trip to a nearby hill station for rest and reflection.",
              ].map((item, i) => (
                <StaggerItem key={i} className="flex gap-6 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-950 mt-2.5 shrink-0" />
                  <p className="text-xl text-zinc-600 leading-relaxed">
                    {item}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Closing Gallery */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          <div className="md:col-span-7 h-[360px] md:h-[680px] rounded-2xl overflow-hidden">
            <ParallaxImage
              src="/images/IMG_6163.webp"
              alt="Children in the village"
              sizes="(min-width: 768px) 56vw, 100vw"
            />
          </div>
          <div className="md:col-span-5 grid grid-cols-1 gap-4 md:gap-8">
            <div className="h-[260px] md:h-[320px] rounded-2xl overflow-hidden">
              <ParallaxImage
                src="/images/IMG_6848.webp"
                alt="Ben with a boy"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
            <div className="h-[260px] md:h-[320px] rounded-2xl overflow-hidden">
              <ParallaxImage
                src="/images/IMG_6971.webp"
                alt="Family on a motorcycle"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </div>
          <div className="md:col-span-12 h-[320px] md:h-[460px] rounded-2xl overflow-hidden">
            <ParallaxImage
              src="/images/IMG_6976.webp"
              alt="Tuk-tuk selfie"
              sizes="100vw"
              className="rotate-180"
            />
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn className="mb-16">
            <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-6">
              05 / Investment
            </p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight max-w-2xl">
              Estimated Fundraising
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col border-t border-zinc-200">
              <div className="flex justify-between py-6 border-b border-zinc-200">
                <span className="text-xl font-medium">Adults</span>
                <span className="text-xl text-zinc-600">
                  ~$2,500–$3,000 / person
                </span>
              </div>
              <div className="flex justify-between py-6 border-b border-zinc-200">
                <span className="text-xl font-medium">Children (3–4+)</span>
                <span className="text-xl text-zinc-600 text-right max-w-[200px] md:max-w-none">
                  Discounted flights & rates
                </span>
              </div>
              <div className="flex justify-between py-6 border-b border-zinc-200">
                <span className="text-xl font-medium">Includes</span>
                <span className="text-xl text-zinc-600 text-right max-w-[250px] md:max-w-none">
                  Flights, transport, meals, lodging, activities, visa
                </span>
              </div>
            </div>

            <div className="bg-zinc-50 p-8 md:p-12 rounded-3xl border border-zinc-200/60">
              <h3 className="text-2xl font-medium mb-4">
                We will help every family fundraise.
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                Ben will set up a fundraising platform and shareable page so each
                family can raise support through their personal network. We&apos;ll
                also hold a fundraising training call early in the process to
                equip you.
              </p>
              <div className="h-[1px] w-12 bg-zinc-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps & Footer */}
      <section
        id="next-steps"
        className="scroll-mt-24 pt-32 pb-16 px-6 md:px-12 bg-zinc-950 text-white selection:bg-white selection:text-zinc-950 rounded-t-[3rem] md:rounded-t-[5rem]"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
            <div>
              <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">
                06 / Ready?
              </p>
              <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-12">
                Next
                <br /> Steps
              </h2>
              <div className="space-y-8 max-w-md">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-medium">Ben Valentin</h3>
                  <a
                    href="mailto:bjoel.valentin@gmail.com"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    bjoel.valentin@gmail.com
                  </a>
                  <a
                    href="tel:+16787086066"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    678-708-6066
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-medium">Celine Valentin</h3>
                  <a
                    href="mailto:celineevalentin@gmail.com"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    celineevalentin@gmail.com
                  </a>
                  <a
                    href="tel:+14079238468"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    407-923-8468
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <StaggerContainer className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Pray",
                    desc: "Ask God if this is something He's calling your family to step into.",
                  },
                  {
                    step: "02",
                    title: "Reach out",
                    desc: "Contact us with questions or to express interest. No commitment required yet.",
                  },
                  {
                    step: "03",
                    title: "Passports",
                    desc: "If you don't already have valid ones, begin the application process now.",
                  },
                ].map((s) => (
                  <StaggerItem
                    key={s.step}
                    className="flex gap-6 pb-8 border-b border-white/10"
                  >
                    <span className="font-mono text-zinc-500 mt-1">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="text-2xl font-medium mb-2">{s.title}</h4>
                      <p className="text-zinc-400 text-lg leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-zinc-500 text-sm">
            <p>© 2026 Ben & Celine Valentin</p>
            <p className="mt-4 md:mt-0 font-medium italic">
              &quot;Apart from Me you can do nothing.&quot; — John 15:5
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
