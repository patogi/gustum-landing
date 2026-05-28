import cofmosLogo from "@/assets/cofmos-logo.png";
import cofmosPhoto from "@/assets/cofmos.jpg";
import crustumLogo from "@/assets/crustum-logo.svg";
import crustumPhoto from "@/assets/crustum.jpg";
import gustumLogo from "@/assets/gustum-logo.jpg";
import gustumPhoto from "@/assets/gustum.jpg";

const copy = {
  siteTitle: "Gustum UAB — Crustum, COFMOS ir Gustum kepykla",
  nav: { brands: "Prekės ženklai", contact: "Kontaktai" },
  intro: { eyebrow: "Gustum UAB · Vilnius" },
  brands: [
    {
      kicker: "Kepyklėlių tinklas",
      name: "Crustum",
      description:
        "Kepyklėlių ir kavinių tinklas. Šviežia duona, sluoksniuoti kepiniai, tortai ir bandelės bei specialty kava — tiekiama tiesiogiai galutiniam klientui.",
      cta: "Apsilankyti crustum.lt",
    },
    {
      kicker: "Specialty kavos skrudykla",
      name: "COFMOS Coffee Roasters",
      description:
        "Specialty kavos skrudykla. Pagrindinė veikla — didmeniniai B2B užsakymai HoReCa partneriams. Mažomis partijomis Vilniuje skrudinta kava taip pat pasiekia B2C klientus visoje šalyje per el. parduotuvę.",
      cta: "Apsilankyti cofmos.lt",
    },
    {
      kicker: "Didmeninė kepykla · B2B",
      name: "Gustum",
      description:
        "Pramoninių pajėgumų kepykla, vykdanti didmeninius užsakymus B2B klientams — viešbučiams, restoranams, mažmenos tinklams ir įmonėms.",
      cta: "Susisiekti dėl pasiūlymo",
    },
  ],
  contact: {
    eyebrow: "Kontaktai",
    h2: "Bendradarbiavimas ir užklausos.",
    lead: "Dėl partnerysčių, tiekimo, didmeninių užsakymų ar bendrų klausimų — kreipkitės tiesiogiai į Gustum UAB.",
    email: "El. paštas",
    phone: "Telefonas",
    address: "Adresas",
    addressValue: "Dūmų g. 1, LT-11119 Vilnius, Lietuva",
  },
  footer: {
    tagline:
      "Kontroliuojančioji bendrovė, vienijanti Crustum, COFMOS Coffee Roasters ir Gustum kepyklą.",
    brands: "Prekės ženklai",
    contact: "Kontaktai",
    company: "Įmonė",
    regNo: "Įm. kodas",
    vat: "PVM kodas",
    address: "Adresas",
    rights: "Visos teisės saugomos.",
  },
} as const;

const brandMeta = [
  {
    id: "crustum",
    href: "https://www.crustum.lt/",
    photo: crustumPhoto,
    logo: crustumLogo,
    logoClass: "max-h-10 sm:max-h-12 w-auto",
    external: true,
  },
  {
    id: "cofmos",
    href: "https://cofmos.lt/",
    photo: cofmosPhoto,
    logo: cofmosLogo,
    logoClass: "max-h-40 sm:max-h-48 w-auto",
    external: true,
  },
  {
    id: "gustum",
    href: "#contact",
    photo: gustumPhoto,
    logo: gustumLogo,
    logoClass: "max-h-20 sm:max-h-24 w-auto rounded-sm",
    external: false,
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-background/85 border-b border-border">
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <a href="/" className="font-display text-2xl tracking-tight text-espresso leading-none">
          Gustum<span className="text-clay">.</span>
        </a>
        <ul className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground">
          <li>
            <a href="#brands" className="hover:text-espresso transition-colors">
              {copy.nav.brands}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-espresso transition-colors">
              {copy.nav.contact}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Brands() {
  return (
    <section id="brands" className="relative pt-6 sm:pt-8 pb-6 sm:pb-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h1 className="sr-only">{copy.siteTitle}</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {copy.brands.map((brand, i) => {
            const meta = brandMeta[i];

            return (
              <article
                key={meta.id}
                className="group relative bg-card rounded-md overflow-hidden border border-border flex flex-col transition-shadow duration-300 hover:shadow-lg"
              >
                <a
                  href={meta.href}
                  {...(meta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="absolute inset-0 z-10"
                  aria-label={brand.name}
                />
                <div className="h-44 sm:h-52 flex items-center justify-center px-6 border-b border-border bg-card">
                  <img src={meta.logo} alt={`${brand.name} logo`} className={meta.logoClass} />
                </div>
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={meta.photo}
                    alt={brand.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-4">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-clay">
                      {brand.kicker}
                    </span>
                    <span className="text-[11px] text-muted-foreground tabular-nums">
                      0{i + 1}/0{copy.brands.length}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {brand.description}
                  </p>
                  <div className="mt-auto inline-flex items-center justify-between gap-2 self-stretch border-t border-border pt-4 text-sm font-medium text-espresso">
                    <span>{brand.cta}</span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      {meta.external ? "↗" : "→"}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-8 sm:py-10 bg-butter/50 border-y border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-clay mb-4">
            {copy.contact.eyebrow}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-espresso leading-tight">
            {copy.contact.h2}
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">{copy.contact.lead}</p>
        </div>
        <dl className="space-y-6 text-base">
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-clay mb-1">
              {copy.contact.email}
            </dt>
            <dd>
              <a
                href="mailto:info@gustum.lt"
                className="text-espresso hover:text-clay underline-offset-4 hover:underline"
              >
                info@gustum.lt
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-clay mb-1">
              {copy.contact.phone}
            </dt>
            <dd>
              <a
                href="tel:+37063009901"
                className="text-espresso hover:text-clay underline-offset-4 hover:underline"
              >
                +370 630 09901
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-clay mb-1">
              {copy.contact.address}
            </dt>
            <dd className="text-espresso">{copy.contact.addressValue}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-espresso text-cream/90">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-8 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="font-display text-2xl text-cream">
              Gustum<span className="text-clay">.</span>
            </div>
            <p className="mt-3 text-cream/70 max-w-sm leading-relaxed text-sm">
              {copy.footer.tagline}
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-cream/60 mb-3">
              {copy.footer.brands}
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.crustum.lt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-clay transition-colors"
                >
                  crustum.lt ↗
                </a>
              </li>
              <li>
                <a
                  href="https://cofmos.lt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-clay transition-colors"
                >
                  cofmos.lt ↗
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-clay transition-colors">
                  Gustum
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-cream/60 mb-3">
              {copy.footer.contact}
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@gustum.lt" className="hover:text-clay transition-colors">
                  info@gustum.lt
                </a>
              </li>
              <li>
                <a href="tel:+37063009901" className="hover:text-clay transition-colors">
                  +370 630 09901
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 grid gap-6 md:grid-cols-2 text-xs text-cream/60">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3">
            <div>
              <dt className="text-cream/40 uppercase tracking-wider mb-1">{copy.footer.company}</dt>
              <dd className="text-cream/80">Gustum UAB</dd>
            </div>
            <div>
              <dt className="text-cream/40 uppercase tracking-wider mb-1">{copy.footer.regNo}</dt>
              <dd className="text-cream/80">302780146</dd>
            </div>
            <div>
              <dt className="text-cream/40 uppercase tracking-wider mb-1">{copy.footer.vat}</dt>
              <dd className="text-cream/80">LT100006875614</dd>
            </div>
            <div>
              <dt className="text-cream/40 uppercase tracking-wider mb-1">{copy.footer.address}</dt>
              <dd className="text-cream/80">Dūmų g. 1, LT-11119 Vilnius</dd>
            </div>
          </dl>
          <div className="md:text-right self-end">
            © {new Date().getFullYear()} Gustum UAB. {copy.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Brands />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
