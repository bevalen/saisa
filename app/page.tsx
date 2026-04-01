import Image from "next/image";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ParallaxImage,
} from "@/components/Motion";
import { ImageGallery } from "@/components/ImageGallery";
import { SiteNav } from "@/components/SiteNav";
import { VideoLightbox } from "@/components/VideoLightbox";

export default function Home() {
  const youtubeThumbnail =
    "https://i.ytimg.com/vi/Uc9nMylmQiY/maxresdefault.jpg";

  const logisticsItems = [
    {
      title: "When",
      desc: "Fall 2026 — likely October or early November. Roughly 10 days, maybe closer to two weeks once we nail things down. We're targeting fall on purpose — the weather is ideal (no monsoon, no summer heat), air quality is at its best, flights are more affordable, and the tourist crowds thin out. It's genuinely one of the best windows to visit.",
    },
    {
      title: "Where",
      desc: "India. Mostly in a village with friends we already know, plus a breather in a nearby hill town.",
    },
    {
      title: "Who",
      desc: "Families, including yours. Our daughter is four, so we're learning this trip alongside you. Kids about 3 to 4 and up tend to be easiest, but if you have littles, just ask us and we'll figure it out together.",
    },
    {
      title: "Pace",
      desc: "Full, but not frantic. Room for rest, meals, being with your kids, and simple everyday moments, not a sprint.",
    },
    {
      title: "Weather",
      desc: "Pretty comfortable. Think roughly high 60s to high 70s where we’ll stay, cooler in the hills (50s to mid 60s).",
    },
  ];

  const tripActivities = [
    {
      title: "Village welcome day",
      desc: "Meet the local church family, walk the tea gardens, visit a neighborhood cafe, and share a meal together. Easy first day to settle in.",
    },
    {
      title: "VBS with local kids",
      desc: "Two days of games, songs, and crafts with around 80 children from the community. Your kids will be right in the mix.",
    },
    {
      title: "Soccer tournament",
      desc: "A full day outside with village youth. One of the highlights of the last trip — expect a lot of energy and laughter.",
    },
    {
      title: "School visit",
      desc: "Spend time with students at a local school: playing, reading, praying, whatever feels natural.",
    },
    {
      title: "Wildlife safari",
      desc: "A jeep ride through the forest at a nearby park to see tigers, bison, and maybe even an elephant ride. About 45 minutes from the village.",
    },
    {
      title: "Hill station getaway",
      desc: "Two days up in the mountains — scenic views, a historic mountaineering museum, shopping, and a nice dinner out. Time to catch your breath.",
    },
    {
      title: "Worship & music night",
      desc: "An evening of worship at a local cafe with friends from the area. Low-key and meaningful.",
    },
    {
      title: "Testimony dinners",
      desc: "Most evenings back at the house, local friends join for dinner and share what God is doing in their lives and communities.",
    },
    {
      title: "Prayer walks",
      desc: "Slow evening walks through the village to pray quietly and notice the place. No agenda, no special training.",
    },
    {
      title: "Taj Mahal day trip",
      desc: "A possible add-on from Delhi — about two hours by train. Not guaranteed, but we’d love to squeeze it in if timing allows.",
    },
    {
      title: "Delhi exploring",
      desc: "A day to shop, eat incredible food, and take in the city before heading home.",
    },
  ];

  const galleryImages = [
    {
      src: "/images/IMG_6123.webp",
      alt: "Ben with a child at school",
    },
    {
      src: "/images/IMG_6446.webp",
      alt: "Woman in prayer",
    },
    {
      src: "/images/IMG_6135.webp",
      alt: "Roadside travel moment during the trip",
    },
    {
      src: "/images/IMG_6432.webp",
      alt: "Selfie with local youth",
    },
    {
      src: "/images/IMG_6457.webp",
      alt: "Ben with smiling children",
    },
    {
      src: "/images/IMG_6409.webp",
      alt: "Shared moment with local youth",
    },
    {
      src: "/images/IMG_6163.webp",
      alt: "Children in the village",
    },
    {
      src: "/images/IMG_6848.webp",
      alt: "Ben with a boy",
    },
    {
      src: "/images/IMG_6971.webp",
      alt: "Family on a motorcycle",
    },
    {
      src: "/images/IMG_6976.webp",
      alt: "Tuk-tuk selfie",
      imageClassName: "rotate-180",
    },
  ];

  const nextSteps = [
    {
      step: "01",
      title: "Sit with it",
      desc: "Pray if you like, talk with each other, and don’t rush. Wondering out loud is enough for now.",
    },
    {
      step: "02",
      title: "Text or call us",
      desc: "Ask anything: logistics, kids, nerves, “is this crazy?” We’re family (or close to it). Zero pressure to commit.",
    },
    {
      step: "03",
      title: "Passports, if you get curious",
      desc: "If you might come, peek at passport dates. Renewals take time; we can point you to the boring-but-useful links.",
    },
  ];

  return (
    <main className="flex flex-col bg-[#fcfcfc] text-zinc-950 selection:bg-zinc-900 selection:text-white">
      <SiteNav />

      <section className="relative min-h-[100dvh] pt-32 pb-16 px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="lg:col-span-6 z-10 pb-8 lg:pb-16 flex flex-col justify-end items-center text-center lg:items-start lg:text-left">
            <FadeIn className="w-full flex flex-col items-center lg:items-start">
              <div className="flex flex-col items-center lg:items-start gap-3 mb-8 w-full">
                <div className="flex items-center justify-center lg:justify-start gap-4 w-full">
                  <div className="hidden lg:block h-[1px] w-12 bg-zinc-950 shrink-0" />
                  <p className="text-sm uppercase tracking-[0.2em] font-medium">
                    From Ben &amp; Celine
                  </p>
                </div>
                <p className="text-base md:text-lg text-zinc-600 font-medium tracking-tight max-w-[40ch] mx-auto lg:mx-0 lg:pl-16">
                  You're Invited!
                </p>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-[6.5rem] font-medium tracking-tighter leading-[0.95] mb-8 text-balance">
                <em className="font-serif italic pr-2">India</em>
                <br />
                with the people
                <br />
                we love
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-[50ch] mb-12 mx-auto lg:mx-0">
                We&apos;re taking our family to India this fall, and
                before we tell anyone else, we wanted to tell you. This is a
                trip for parents and their children to experience ministry
                side by side. Our daughter is four, and we can&apos;t wait to
                bring her. You don&apos;t need mission-trip experience. If
                you&apos;ve never done anything like this, you&apos;re exactly
                who we had in mind.
              </p>
              <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start w-full">
                <a
                  href="#heart"
                  className="px-8 py-4 bg-zinc-950 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors active:scale-95 flex items-center justify-center"
                >
                  Why we&apos;re going
                </a>
                <a
                  href="#details"
                  className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
                >
                  Dates, cost &amp; details
                </a>
              </div>
            </FadeIn>
          </div>

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

      <section
        id="heart"
        className="scroll-mt-28 py-32 px-6 md:px-12 bg-white"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <div className="lg:col-span-4 flex flex-col gap-10 items-center text-center lg:items-start lg:text-left">
            <FadeIn className="w-full">
              <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest lg:sticky lg:top-32">
                Our heart
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
          <div className="lg:col-span-8 lg:col-start-5 text-center lg:text-left">
            <StaggerContainer>
              <StaggerItem>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-12 text-balance mx-auto lg:mx-0">
                  Why India,
                  <br />
                  and why tell you?
                </h2>
              </StaggerItem>
              <StaggerItem>
                <div className="space-y-8 text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-[55ch] mx-auto lg:mx-0">
                  <p>
                    We want our kids to grow up knowing the world is bigger than
                    our neighborhood, and we want to do that with people we trust,
                    including family. This isn&apos;t about being “missionary
                    material.” It&apos;s about showing up together, being stretched,
                    and letting God meet us there.
                  </p>
                  <p>
                    India isn&apos;t a pin on a map for us. Ben was there last year,
                    made real friends, and came home different. We&apos;re going
                    back to people and a place we already love, not a program we
                    barely know.
                  </p>
                  <p className="text-zinc-950 font-medium">
                    If this sounds like a lot, we get it. We&apos;re not experts
                    either. Scroll for photos and a short video when you want a
                    feel for it; the nuts and bolts are further down whenever
                    you&apos;re ready.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem className="pt-12 border-t border-zinc-200 mt-12">
                <p className="text-sm font-mono uppercase tracking-[0.24em] text-zinc-400 mb-3">
                  Last year
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed max-w-[50ch] mx-auto lg:mx-0">
                  The faces in these photos aren&apos;t strangers to us anymore.
                  We&apos;re inviting you into something personal, because you&apos;re
                  personal to us.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn className="max-w-3xl mb-16 mx-auto text-center">
            <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-6">
              Photos &amp; a short video
            </p>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6 text-balance">
              So you can picture
              <br />
              what we&apos;re talking about
            </h2>
            <p className="text-xl text-zinc-600 max-w-[52ch] leading-relaxed mx-auto">
              No homework, just look when you want. This is what Ben saw and who
              he spent time with. If you&apos;ve never been overseas for something
              like this, these might help it feel less abstract.
            </p>
          </FadeIn>

          <div
            id="video"
            className="scroll-mt-28 w-full max-w-5xl mx-auto mb-10"
          >
            <FadeIn className="w-full">
              <VideoLightbox
                videoId="Uc9nMylmQiY"
                thumbnailSrc={youtubeThumbnail}
                title="Ben&apos;s time there (a few minutes)"
                eyebrow="When you have time"
              />
            </FadeIn>
          </div>

          <div id="gallery" className="scroll-mt-28">
            <ImageGallery images={galleryImages} />
          </div>
        </div>
      </section>

      <section
        id="homebase"
        className="scroll-mt-28 py-32 px-6 md:px-12 bg-white"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <div className="lg:col-span-4 flex flex-col gap-10 items-center text-center lg:items-start lg:text-left">
            <FadeIn className="w-full">
              <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest lg:sticky lg:top-32">
                Where we&apos;ll stay
              </p>
            </FadeIn>
            <FadeIn className="w-full">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/homebase.webp"
                  alt="Our homebase — a large family home in South Asia"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover object-[center_45%]"
                />
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-8 lg:col-start-5 text-center lg:text-left">
            <StaggerContainer>
              <StaggerItem>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-12 text-balance mx-auto lg:mx-0">
                  Your home
                  <br />
                  away from home
                </h2>
              </StaggerItem>
              <StaggerItem>
                <div className="space-y-8 text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-[55ch] mx-auto lg:mx-0">
                  <p>
                    We&apos;ll be staying together in a large family home that belongs
                    to dear friends of ours. This is homebase, where we&apos;ll
                    sleep, eat, gather, and do life together for the majority of
                    the trip.
                  </p>
                  <p>
                    Mornings start with worship together. Evenings wind down over
                    dinner with testimony time, hearing stories from local friends
                    about what God is doing in their communities. Those moments
                    around the table are some of the most powerful parts of a trip
                    like this.
                  </p>
                  <p>
                    When Ben was there last year, he walked into this house and
                    literally felt at home. A sense of peace. Comfort. By the end
                    of the trip, it wasn&apos;t someone else&apos;s house anymore. It
                    was home. It really is a special place, and we can&apos;t wait to
                    share it with you.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section
        id="details"
        className="scroll-mt-28 py-32 px-6 md:px-12 bg-zinc-50"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn className="mb-16 lg:mb-20">
              <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-6">
                The practical stuff
              </p>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-6 text-balance">
                Dates, dollars,
                <br />
                and what to expect
              </h2>
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-[42ch] mx-auto">
                We put it all in one spot so you don&apos;t have to hunt. Skim,
                ignore, or come back later, whatever helps.
              </p>
            </FadeIn>

            <div className="space-y-20">
              <div>
                <FadeIn className="mb-8">
                  <p className="text-sm font-mono uppercase tracking-[0.24em] text-zinc-400 mb-3">
                    Quick snapshot
                  </p>
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                    The basics
                  </h3>
                </FadeIn>
                <FadeIn className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[min(100%,520px)] border-collapse text-left">
                      <caption className="sr-only">
                        Trip logistics at a glance: timing, location, who it is
                        for, pace, and weather.
                      </caption>
                      <tbody>
                        {logisticsItems.map((item) => (
                          <tr
                            key={item.title}
                            className="border-b border-zinc-200 last:border-b-0"
                          >
                            <th
                              scope="row"
                              className="w-[1%] whitespace-nowrap align-top py-5 pl-5 pr-4 text-base font-medium text-zinc-950 md:pl-8 md:pr-6 md:text-lg"
                            >
                              {item.title}
                            </th>
                            <td className="align-top py-5 pr-5 text-base leading-relaxed text-zinc-600 md:pr-8 md:text-lg">
                              {item.desc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </FadeIn>
              </div>

              <div>
                <FadeIn className="mb-8">
                  <p className="text-sm font-mono uppercase tracking-[0.24em] text-zinc-400 mb-3">
                    Activities we&apos;re planning
                  </p>
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                    What we might do together
                  </h3>
                </FadeIn>
                <FadeIn className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[min(100%,520px)] border-collapse text-left">
                      <caption className="sr-only">
                        Potential activities and experiences during the trip.
                      </caption>
                      <tbody>
                        {tripActivities.map((item) => (
                          <tr
                            key={item.title}
                            className="border-b border-zinc-200 last:border-b-0"
                          >
                            <th
                              scope="row"
                              className="w-[1%] whitespace-nowrap align-top py-5 pl-5 pr-4 text-base font-medium text-zinc-950 md:pl-8 md:pr-6 md:text-lg"
                            >
                              {item.title}
                            </th>
                            <td className="align-top py-5 pr-5 text-base leading-relaxed text-zinc-600 md:pr-8 md:text-lg">
                              {item.desc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </FadeIn>
              </div>

              <div>
                <FadeIn className="mb-8">
                  <p className="text-sm font-mono uppercase tracking-[0.24em] text-zinc-400 mb-3">
                    Fundraising
                  </p>
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                    Rough idea of cost
                  </h3>
                </FadeIn>
                <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
                    <div className="flex flex-col justify-center border-b border-zinc-200 p-8 md:p-10 lg:border-b-0 lg:border-r lg:border-zinc-200">
                      <div className="divide-y divide-zinc-200">
                        <div className="flex flex-col gap-2 py-5 text-left sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                          <span className="text-xl font-medium shrink-0">
                            Adults
                          </span>
                          <span className="text-xl text-zinc-600 sm:text-right">
                            ~$2,800 / person
                          </span>
                        </div>
                        <div className="flex flex-col gap-2 py-5 text-left sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                          <span className="text-xl font-medium shrink-0">
                            Children (3-4+)
                          </span>
                          <span className="text-xl text-zinc-600 sm:max-w-[min(100%,14rem)] sm:text-right">
                            Discounted flights and rates
                          </span>
                        </div>
                        <div className="flex flex-col gap-2 py-5 text-left sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                          <span className="text-xl font-medium shrink-0">
                            Includes
                          </span>
                          <span className="text-xl text-zinc-600 sm:max-w-[min(100%,18rem)] sm:text-right">
                            Flights, transport, meals, lodging, activities, and
                            visa
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center bg-zinc-50 p-8 md:p-10 text-center">
                      <h4 className="text-2xl font-medium mb-4">
                        We&apos;ll help with fundraising, seriously.
                      </h4>
                      <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                        Ben will set up a simple page for each family so you can
                        share with friends and church if you want. We&apos;ll do a
                        relaxed walkthrough call early on so nobody has to Google
                        their way through it alone.
                      </p>
                      <div className="h-[1px] w-12 bg-zinc-300 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>

              <div id="next-steps" className="scroll-mt-28">
                <FadeIn className="mb-12">
                  <p className="text-sm font-mono uppercase tracking-[0.24em] text-zinc-400 mb-3">
                    From here
                  </p>
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                    Curious? Uneasy? Both?
                  </h3>
                  <p className="mt-4 text-lg text-zinc-600 leading-relaxed max-w-[50ch] mx-auto">
                    We&apos;d rather hear an honest &quot;probably not&quot; than have you
                    wonder in silence. Reach out the way you already talk to us.
                  </p>
                </FadeIn>

                <StaggerContainer className="mx-auto w-full max-w-2xl space-y-0 text-center">
                  {nextSteps.map((step) => (
                    <StaggerItem
                      key={step.step}
                      className="border-t border-zinc-200 py-10 first:border-t-0 first:pt-0"
                    >
                      <span className="font-mono text-sm text-zinc-400">
                        {step.step}
                      </span>
                      <h4 className="mt-3 text-2xl font-medium tracking-tight">
                        {step.title}
                      </h4>
                      <p className="mt-3 text-lg leading-relaxed text-zinc-600">
                        {step.desc}
                      </p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <FadeIn className="mx-auto mt-16 w-full max-w-3xl">
                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 md:p-10">
                    <p className="text-center text-sm font-mono uppercase tracking-[0.24em] text-zinc-400 mb-8">
                      Reach us
                    </p>
                    <div className="flex w-full flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-around sm:gap-8">
                      <div className="flex min-w-0 max-w-full flex-col gap-2 text-center sm:max-w-[min(100%,19rem)] sm:text-left">
                        <h4 className="text-xl font-medium">Ben Valentin</h4>
                        <a
                          href="mailto:bjoel.valentin@gmail.com"
                          className="text-zinc-600 transition-colors hover:text-zinc-950 break-all"
                        >
                          bjoel.valentin@gmail.com
                        </a>
                        <a
                          href="tel:+16787086066"
                          className="text-zinc-600 transition-colors hover:text-zinc-950"
                        >
                          678-708-6066
                        </a>
                      </div>
                      <div className="flex min-w-0 max-w-full flex-col gap-2 text-center sm:max-w-[min(100%,19rem)] sm:text-left">
                        <h4 className="text-xl font-medium">Celine Valentin</h4>
                        <a
                          href="mailto:celineevalentin@gmail.com"
                          className="text-zinc-600 transition-colors hover:text-zinc-950 break-all"
                        >
                          celineevalentin@gmail.com
                        </a>
                        <a
                          href="tel:+14079238468"
                          className="text-zinc-600 transition-colors hover:text-zinc-950"
                        >
                          407-923-8468
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-16 mt-16 border-t border-zinc-200 text-zinc-500 text-sm max-w-5xl mx-auto text-center">
            <p>© 2026 With love, Ben &amp; Celine</p>
            <p className="mt-4 md:mt-0 font-medium italic">
              &quot;Apart from Me you can do nothing.&quot; (John 15:5)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}