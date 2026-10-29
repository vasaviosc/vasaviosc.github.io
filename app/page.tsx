import Link from "next/link";
import EventCard from "@/components/event-card";
import AnnouncementCard from "@/components/announcement-card";
import announcements from "@/data/announcements.json";
import events from "@/data/events.json";

export default function Home() {
  const ongoingEvents = events.filter(
    (event) => event.status === "ongoing"
  );

  const upcomingEvents = events.filter(
    (event) => event.status === "upcoming"
  );

  const pastEvents = events
    .filter((event) => event.status === "past")
    .slice(-4)
    .reverse();

  const latestAnnouncements = [...announcements].slice(0, 3).reverse();

  return (
    <main className="overflow-hidden bg-[#03111f] text-[#eafbf2]">
      {/* HERO SECTION */}
      <section className="vosc-hero relative flex min-h-[calc(100svh-6rem)] scroll-mt-24 items-center justify-center overflow-hidden border-b border-[#64ff9a]/60 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:pt-36">
        {/* BACKGROUND GRID */}
        <div className="vosc-grid pointer-events-none absolute inset-0 opacity-25" />

        {/* ATMOSPHERIC LIGHT */}
        <div className="vosc-atmosphere pointer-events-none absolute inset-0" />

        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#00e5c3]/10 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#64ff9a]/10 blur-[120px]" />

        {/* SUBTLE STARS — NO BACKGROUND WAVES */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          aria-hidden="true"
        >
          {[
            [95, 170],
            [190, 235],
            [310, 130],
            [420, 220],
            [570, 165],
            [850, 145],
            [1030, 210],
            [1190, 155],
            [1330, 245],
            [120, 560],
            [330, 680],
            [1080, 700],
            [1320, 590],
          ].map(([cx, cy], index) => (
            <circle
              key={index}
              cx={cx}
              cy={cy}
              r={index % 3 === 0 ? 1.8 : 1.2}
              fill="#64ff9a"
              className="vosc-star"
              style={{ animationDelay: `${index * 0.37}s` }}
            />
          ))}
        </svg>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto grid w-full max-w-[1500px] items-center gap-10 lg:grid-cols-[0.8fr_2fr_0.8fr] lg:gap-6">
          {/* LEFT STATEMENT */}
          <div className="hidden lg:block">
            <p className="mb-5 font-mono text-sm text-[#64ff9a]">
              &gt; OUR PHILOSOPHY
            </p>

            <p className="max-w-xs font-mono text-lg leading-relaxed text-[#d1e9da]">
              Open source
              <br />
              is not just code,
              <br />
              it&apos;s a community.
            </p>

            <div className="mt-6 h-px w-24 bg-gradient-to-r from-[#64ff9a] to-transparent" />
          </div>

          {/* CENTER BRANDING */}
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#64ff9a]/30 bg-[#64ff9a]/5 px-4 py-2 font-mono text-[10px] tracking-[0.22em] text-[#8abca1] sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#64ff9a] shadow-[0_0_10px_rgba(100,255,154,0.7)]" />
              BUILD. SHARE. INNOVATE.
            </div>

            <h1 className="vosc-gradient-text vosc-hero-title mb-4 font-mono text-7xl font-black leading-none tracking-[-0.08em] sm:text-8xl md:text-9xl lg:text-[clamp(6rem,10vw,10rem)]">
              VOSC
            </h1>

            <p className="mx-auto max-w-xl font-mono text-sm tracking-wide text-[#b8d9c5] sm:text-lg">
              Vasavi Open Source Community
            </p>

            {/* ANIMATED OPEN BOOK */}
            <div className="vosc-book-scene relative mx-auto my-5 flex h-[280px] w-full max-w-[560px] items-center justify-center sm:my-7 sm:h-[340px] lg:h-[360px]">
              {/* SOFT BOOK GLOW */}
              <div className="vosc-book-glow pointer-events-none absolute left-1/2 top-[78%] h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#64ff9a]/15 blur-[50px] sm:h-40 sm:w-80" />

              <svg
                viewBox="0 0 560 380"
                className="vosc-book-svg relative z-10 h-full w-full overflow-visible"
                fill="none"
                role="img"
                aria-label="An illuminated open book with animated circuit connections to code, community, settings, terminal, and Git icons"
              >
                <defs>
                  {/* PAGE GRADIENTS */}
                  <linearGradient
                    id="bookPageLeft"
                    x1="125"
                    y1="215"
                    x2="280"
                    y2="310"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#eafff0" />
                    <stop offset="0.4" stopColor="#64ff9a" />
                    <stop offset="1" stopColor="#0b8d79" />
                  </linearGradient>

                  <linearGradient
                    id="bookPageRight"
                    x1="280"
                    y1="215"
                    x2="435"
                    y2="310"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0b8d79" />
                    <stop offset="0.6" stopColor="#64ff9a" />
                    <stop offset="1" stopColor="#eafff0" />
                  </linearGradient>

                  <linearGradient
                    id="bookCover"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop stopColor="#123e49" />
                    <stop offset="1" stopColor="#03111f" />
                  </linearGradient>

                  <linearGradient
                    id="bookPageEdge"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop stopColor="#00e5c3" />
                    <stop offset="0.5" stopColor="#eafff0" />
                    <stop offset="1" stopColor="#64ff9a" />
                  </linearGradient>

                  {/* CIRCUIT GLOW */}
                  <filter
                    id="circuitGlow"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                  >
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* SOFT BOOK SHADOW */}
                  <filter
                    id="softBookGlow"
                    x="-50%"
                    y="-100%"
                    width="200%"
                    height="300%"
                  >
                    <feGaussianBlur stdDeviation="5" />
                  </filter>
                </defs>

                {/* FLOATING ILLUSTRATION */}
                <g className="vosc-book-float">
                  {/* CIRCUIT WIRES */}
                  <g
                    stroke="#64ff9a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M280 266 V190 L244 154 V119" />
                    <path d="M280 266 V174 V98 V57" />
                    <path d="M280 266 V190 L316 154 V119" />

                    <path d="M258 270 V216 L192 160 V135" />
                    <path d="M302 270 V216 L368 160 V135" />

                    <path d="M235 275 V242 L132 206 V181" />
                    <path d="M325 275 V242 L428 206 V181" />
                  </g>

                  {/* ANIMATED LIGHT TRAVELLING ALONG WIRES */}
                  <g
                    stroke="#eafff0"
                    strokeWidth="3"
                    strokeLinecap="round"
                    filter="url(#circuitGlow)"
                  >
                    <path
                      d="M280 266 V190 L244 154 V119"
                      strokeDasharray="10 190"
                      className="vosc-circuit-flow"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="200"
                        to="0"
                        dur="2.8s"
                        repeatCount="indefinite"
                      />
                    </path>

                    <path
                      d="M280 266 V174 V98 V57"
                      strokeDasharray="10 200"
                      className="vosc-circuit-flow"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="210"
                        to="0"
                        dur="3.2s"
                        repeatCount="indefinite"
                      />
                    </path>

                    <path
                      d="M280 266 V190 L316 154 V119"
                      strokeDasharray="10 190"
                      className="vosc-circuit-flow"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="190"
                        to="0"
                        dur="2.6s"
                        repeatCount="indefinite"
                      />
                    </path>

                    <path
                      d="M258 270 V216 L192 160 V135"
                      strokeDasharray="10 190"
                      className="vosc-circuit-flow"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="190"
                        to="0"
                        dur="3.6s"
                        repeatCount="indefinite"
                      />
                    </path>

                    <path
                      d="M302 270 V216 L368 160 V135"
                      strokeDasharray="10 190"
                      className="vosc-circuit-flow"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="190"
                        to="0"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </path>

                    <path
                      d="M235 275 V242 L132 206 V181"
                      strokeDasharray="10 180"
                      className="vosc-circuit-flow"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="180"
                        to="0"
                        dur="3.4s"
                        repeatCount="indefinite"
                      />
                    </path>

                    <path
                      d="M325 275 V242 L428 206 V181"
                      strokeDasharray="10 180"
                      className="vosc-circuit-flow"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="180"
                        to="0"
                        dur="3.8s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>

                  {/* CIRCUIT NODES */}
                  <g
                    fill="#03111f"
                    stroke="#eafff0"
                    strokeWidth="3"
                    filter="url(#circuitGlow)"
                  >
                    <circle cx="244" cy="119" r="5" />
                    <circle cx="280" cy="57" r="5" />
                    <circle cx="316" cy="119" r="5" />
                    <circle cx="192" cy="135" r="5" />
                    <circle cx="368" cy="135" r="5" />
                    <circle cx="132" cy="181" r="5" />
                    <circle cx="428" cy="181" r="5" />
                  </g>

                  {/* TERMINAL ICON */}
                  <g className="vosc-icon-terminal">
                    <rect
                      x="75"
                      y="145"
                      width="92"
                      height="60"
                      rx="5"
                      fill="#061b30"
                      stroke="#64ff9a"
                      strokeWidth="2.5"
                    />

                    <path
                      d="M75 159 H167"
                      stroke="#64ff9a"
                      strokeWidth="2"
                    />

                    <g fill="#64ff9a">
                      <circle cx="84" cy="152" r="1.8" />
                      <circle cx="91" cy="152" r="1.8" />
                      <circle cx="98" cy="152" r="1.8" />
                    </g>

                    <path
                      d="M92 175 L101 183 L92 191 M105 191 H119"
                      stroke="#64ff9a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>

                  {/* COMMUNITY ICON */}
                  <g className="vosc-icon-community">
                    <rect
                      x="145"
                      y="89"
                      width="92"
                      height="54"
                      rx="5"
                      fill="#061b30"
                      stroke="#64ff9a"
                      strokeWidth="2.5"
                    />

                    <path
                      d="M145 103 H237"
                      stroke="#64ff9a"
                      strokeWidth="2"
                    />

                    <g fill="#64ff9a">
                      <circle cx="154" cy="96" r="1.8" />
                      <circle cx="161" cy="96" r="1.8" />
                      <circle cx="168" cy="96" r="1.8" />

                      <circle cx="180" cy="115" r="5" />
                      <circle cx="202" cy="115" r="5" />
                      <circle cx="191" cy="110" r="5" />

                      <path d="M170 132 Q170 119 180 119 Q190 119 190 132 Z" />
                      <path d="M192 132 Q192 119 202 119 Q212 119 212 132 Z" />
                      <path d="M179 132 Q179 115 191 115 Q203 115 203 132 Z" />
                    </g>
                  </g>

                  {/* CODE ICON */}
                  <g className="vosc-icon-code">
                    <rect
                      x="234"
                      y="20"
                      width="92"
                      height="65"
                      rx="6"
                      fill="#061b30"
                      stroke="#64ff9a"
                      strokeWidth="2.5"
                    />

                    <path
                      d="M234 35 H326"
                      stroke="#64ff9a"
                      strokeWidth="2"
                    />

                    <g fill="#64ff9a">
                      <circle cx="243" cy="27" r="1.8" />
                      <circle cx="250" cy="27" r="1.8" />
                      <circle cx="257" cy="27" r="1.8" />
                    </g>

                    <text
                      x="280"
                      y="65"
                      fill="#64ff9a"
                      fontSize="25"
                      fontFamily="monospace"
                      textAnchor="middle"
                    >
                      {"</>"}
                    </text>
                  </g>

                  {/* SETTINGS ICON */}
                  <g className="vosc-icon-settings">
                    <rect
                      x="323"
                      y="89"
                      width="92"
                      height="54"
                      rx="5"
                      fill="#061b30"
                      stroke="#00e5c3"
                      strokeWidth="2.5"
                    />

                    <path
                      d="M323 103 H415"
                      stroke="#00e5c3"
                      strokeWidth="2"
                    />

                    <g fill="#00e5c3">
                      <circle cx="332" cy="96" r="1.8" />
                      <circle cx="339" cy="96" r="1.8" />
                      <circle cx="346" cy="96" r="1.8" />
                    </g>

                    <g
                      transform="translate(369 120)"
                      stroke="#00e5c3"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    >
                      <circle r="10" />
                      <circle r="3.5" />
                      <path d="M0 -15 V-11 M0 11 V15 M-15 0 H-11 M11 0 H15 M-11 -11 L-8 -8 M8 8 L11 11 M-11 11 L-8 8 M8 -8 L11 -11" />
                    </g>
                  </g>

                  {/* GIT ICON */}
                  <g className="vosc-icon-git">
                    <rect
                      x="393"
                      y="145"
                      width="92"
                      height="60"
                      rx="5"
                      fill="#061b30"
                      stroke="#64ff9a"
                      strokeWidth="2.5"
                    />

                    <path
                      d="M393 159 H485"
                      stroke="#64ff9a"
                      strokeWidth="2"
                    />

                    <g fill="#64ff9a">
                      <circle cx="402" cy="152" r="1.8" />
                      <circle cx="409" cy="152" r="1.8" />
                      <circle cx="416" cy="152" r="1.8" />
                    </g>

                    <path
                      d="M428 170 L446 183 L428 197 L414 183 Z"
                      fill="#64ff9a"
                      opacity="0.95"
                    />

                    <path
                      d="M425 178 L433 186 M433 180 V190"
                      stroke="#03111f"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    <circle cx="425" cy="178" r="2.5" fill="#03111f" />
                    <circle cx="433" cy="190" r="2.5" fill="#03111f" />
                  </g>

                  {/* BOOK SHADOW */}
                  <ellipse
                    cx="280"
                    cy="323"
                    rx="166"
                    ry="12"
                    fill="#64ff9a"
                    opacity="0.15"
                    filter="url(#softBookGlow)"
                  />

                  {/* BOOK COVER — CURVED SILHOUETTE */}
                  <g
                    stroke="#64ff9a"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  >
                    <path
                      d="M280 283
                         C236 253 165 238 99 248
                         C112 267 121 289 128 305
                         C185 298 236 313 280 333 Z"
                      fill="url(#bookCover)"
                    />

                    <path
                      d="M280 283
                         C324 253 395 238 461 248
                         C448 267 439 289 432 305
                         C375 298 324 313 280 333 Z"
                      fill="url(#bookCover)"
                    />
                  </g>

                  {/* REALISTIC LAYERED BOOK PAGES */}
                  <g
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  >
                    {/* LEFT OUTER PAGE */}
                    <path
                      d="M280 288
                         C244 266 190 243 116 250
                         C131 267 142 285 151 302
                         C198 295 243 309 280 330 Z"
                      fill="#0a2938"
                      stroke="#64ff9a"
                    />

                    {/* RIGHT OUTER PAGE */}
                    <path
                      d="M280 288
                         C316 266 370 243 444 250
                         C429 267 418 285 409 302
                         C362 295 317 309 280 330 Z"
                      fill="#0a2938"
                      stroke="#64ff9a"
                    />

                    {/* LEFT BOTTOM PAGE */}
                    <path
                      d="M280 286
                         C241 261 181 242 111 245
                         C145 262 181 286 224 302
                         C246 310 265 320 280 330 Z"
                      fill="#0b3b43"
                      stroke="#00e5c3"
                    />

                    {/* RIGHT BOTTOM PAGE */}
                    <path
                      d="M280 286
                         C319 261 379 242 449 245
                         C415 262 379 286 336 302
                         C314 310 295 320 280 330 Z"
                      fill="#0b3b43"
                      stroke="#00e5c3"
                    />

                    {/* LEFT MIDDLE PAGE */}
                    <path
                      d="M280 283
                         C244 253 190 221 126 225
                         C165 248 207 274 280 307 Z"
                      fill="#123b43"
                      stroke="#64ff9a"
                    />

                    {/* RIGHT MIDDLE PAGE */}
                    <path
                      d="M280 283
                         C316 253 370 221 434 225
                         C395 248 353 274 280 307 Z"
                      fill="#123b43"
                      stroke="#64ff9a"
                    />

                    {/* LEFT TOP PAGE */}
                    <path
                      d="M280 280
                         C248 244 203 205 143 213
                         C176 238 221 267 280 295 Z"
                      fill="url(#bookPageLeft)"
                      stroke="#eafff0"
                    />

                    {/* RIGHT TOP PAGE */}
                    <path
                      d="M280 280
                         C312 244 357 205 417 213
                         C384 238 339 267 280 295 Z"
                      fill="url(#bookPageRight)"
                      stroke="#eafff0"
                    />

                    {/* CURVED PAGE EDGES */}
                    <path
                      d="M143 213 C190 217 241 248 280 280"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      filter="url(#circuitGlow)"
                    />

                    <path
                      d="M417 213 C370 217 319 248 280 280"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      filter="url(#circuitGlow)"
                    />

                    {/* PAGE DETAIL */}
                    <path
                      d="M153 226 C194 233 237 258 265 280"
                      stroke="#d8ffeb"
                      strokeWidth="1.3"
                      opacity="0.75"
                    />

                    <path
                      d="M407 226 C366 233 323 258 295 280"
                      stroke="#d8ffeb"
                      strokeWidth="1.3"
                      opacity="0.75"
                    />

                    <path
                      d="M164 239 C204 246 241 270 265 290"
                      stroke="#00e5c3"
                      strokeWidth="1.2"
                      opacity="0.8"
                    />

                    <path
                      d="M396 239 C356 246 319 270 295 290"
                      stroke="#00e5c3"
                      strokeWidth="1.2"
                      opacity="0.8"
                    />

                    {/* CENTRAL SPINE */}
                    <path
                      d="M280 280 C279 295 280 313 280 330"
                      stroke="#eafff0"
                      strokeWidth="3"
                      filter="url(#circuitGlow)"
                    />

                    {/* LOWER PAGE EDGES */}
                    <path
                      d="M111 245 C169 243 230 274 280 307"
                      stroke="#eafff0"
                      strokeWidth="2"
                    />

                    <path
                      d="M449 245 C391 243 330 274 280 307"
                      stroke="#eafff0"
                      strokeWidth="2"
                    />

                    {/* PAGE THICKNESS */}
                    <path
                      d="M151 302 C201 296 245 313 280 330"
                      stroke="#64ff9a"
                      strokeWidth="2"
                    />

                    <path
                      d="M409 302 C359 296 315 313 280 330"
                      stroke="#64ff9a"
                      strokeWidth="2"
                    />
                  </g>

                  {/* PAGE LIGHT PARTICLES */}
                  <g fill="#64ff9a">
                    <circle
                      cx="105"
                      cy="225"
                      r="2.5"
                      className="vosc-book-particle"
                    />

                    <circle
                      cx="450"
                      cy="224"
                      r="2"
                      className="vosc-book-particle vosc-delay-2"
                    />

                    <circle
                      cx="178"
                      cy="193"
                      r="2"
                      className="vosc-book-particle vosc-delay-3"
                    />

                    <circle
                      cx="380"
                      cy="193"
                      r="2.5"
                      className="vosc-book-particle vosc-delay-2"
                    />
                  </g>
                </g>
              </svg>
            </div>

            {/* PRIMARY ACTIONS */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/events"
                className="vosc-button min-w-40 font-mono text-sm tracking-wide"
              >
                Explore Events <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/blog"
                className="vosc-button vosc-button-outline min-w-40 font-mono text-sm tracking-wide"
              >
                Explore Resources
              </Link>
            </div>
          </div>

          {/* RIGHT STATEMENT */}
          <div className="hidden lg:block lg:justify-self-end">
            <p className="mb-5 font-mono text-sm text-[#64ff9a]">
              &gt; GET INVOLVED
            </p>

            <ul className="space-y-4 font-mono text-sm text-[#b8d9c5]">
              <li className="transition-colors hover:text-[#64ff9a]">
                <span className="mr-2 text-[#64ff9a]">[</span>
                Learn
                <span className="ml-2 text-[#64ff9a]">]</span>
              </li>

              <li className="transition-colors hover:text-[#64ff9a]">
                <span className="mr-2 text-[#64ff9a]">[</span>
                Contribute
                <span className="ml-2 text-[#64ff9a]">]</span>
              </li>

              <li className="transition-colors hover:text-[#64ff9a]">
                <span className="mr-2 text-[#64ff9a]">[</span>
                Make an Impact
                <span className="ml-2 text-[#64ff9a]">]</span>
              </li>
            </ul>

            <div className="mt-6 h-px w-24 bg-gradient-to-l from-[#64ff9a] to-transparent" />
          </div>

          {/* MOBILE PHILOSOPHY */}
          <div className="text-center lg:hidden">
            <p className="font-mono text-xs leading-6 text-[#8abca1]">
              Open source is not just code.
              <br />
              It&apos;s a community.
            </p>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section
        id="announcements"
        className="relative border-b border-[#64ff9a]/30 bg-[#061b30] px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="vosc-grid pointer-events-none absolute inset-0 opacity-20" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-3 font-mono text-xs tracking-[0.25em] text-[#64ff9a]">
                01 / WHAT&apos;S HAPPENING
              </p>

              <h2 className="font-mono text-3xl font-bold tracking-tight text-[#eafbf2] sm:text-5xl">
                Latest <span className="vosc-gradient-text">Announcements</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#8abca1]">
                Stay updated with community news, opportunities, and upcoming
                initiatives.
              </p>
            </div>

            <Link
              href="/announcements"
              className="group font-mono text-sm text-[#64ff9a] transition-colors hover:text-[#00e5c3]"
            >
              View all announcements
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {latestAnnouncements.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
              />
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section
        id="events"
        className="relative bg-[#03111f] px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-[#00e5c3]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-3 font-mono text-xs tracking-[0.25em] text-[#64ff9a]">
                02 / BUILD SOMETHING
              </p>

              <h2 className="font-mono text-3xl font-bold tracking-tight text-[#eafbf2] sm:text-5xl">
                Community <span className="vosc-gradient-text">Events</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#8abca1]">
                Join workshops, contribute to projects, and meet people who
                love building with open source.
              </p>
            </div>

            <Link
              href="/events"
              className="group font-mono text-sm text-[#64ff9a] transition-colors hover:text-[#00e5c3]"
            >
              Explore all events
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* ONGOING EVENTS */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#64ff9a] shadow-[0_0_12px_#64ff9a]" />

              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#64ff9a]">
                Ongoing
              </h3>
            </div>

            {ongoingEvents.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {ongoingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="vosc-panel rounded-xl p-8">
                <p className="font-mono text-sm text-[#8abca1]">
                  No ongoing events right now. Stay tuned!
                </p>
              </div>
            )}
          </div>

          {/* UPCOMING EVENTS */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#00e5c3]" />

              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#00e5c3]">
                Upcoming
              </h3>
            </div>

            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[...upcomingEvents].reverse().map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="vosc-panel rounded-xl p-8">
                <p className="font-mono text-sm text-[#8abca1]">
                  No upcoming events right now.
                </p>
              </div>
            )}
          </div>

          {/* PAST EVENTS */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#668b78]" />

              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#8abca1]">
                Past Events
              </h3>
            </div>

            {pastEvents.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="vosc-panel rounded-xl p-8">
                <p className="font-mono text-sm text-[#8abca1]">
                  No past events yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COMMUNITY CTA */}
      <section className="border-t border-[#64ff9a]/30 bg-[#061b30] px-5 py-20 sm:px-8 sm:py-24">
        <div className="vosc-panel relative mx-auto max-w-6xl overflow-hidden rounded-2xl px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#64ff9a]/10 blur-[90px]" />

          <div className="relative">
            <p className="mb-4 font-mono text-xs tracking-[0.25em] text-[#64ff9a]">
              YOUR NEXT COMMIT STARTS HERE
            </p>

            <h2 className="mx-auto max-w-3xl font-mono text-3xl font-bold leading-tight text-[#eafbf2] sm:text-5xl">
              Don&apos;t just use open source.
              <span className="vosc-gradient-text mt-2 block">
                Be part of it.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#8abca1]">
              Learn together, build together, and make an impact with the VOSC
              community.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/events" className="vosc-button font-mono text-sm">
                Find an Event <span aria-hidden="true">→</span>
              </Link>

              <a
                href="https://github.com/vasavi-osc"
                target="_blank"
                rel="noopener noreferrer"
                className="vosc-button vosc-button-outline font-mono text-sm"
              >
                Explore GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}