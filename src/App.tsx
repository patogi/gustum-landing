import { createContext, useContext, useEffect, useState } from "react";

import cofmosLogo from "@/assets/cofmos-logo.png";
import cofmosPhoto from "@/assets/cofmos.jpg";
import crustumLogo from "@/assets/crustum-logo.svg";
import crustumPhoto from "@/assets/crustum.jpg";
import gustumLogo from "@/assets/gustum-logo.jpg";
import gustumPhoto from "@/assets/gustum.jpg";

type Lang = "lt" | "en";

const translations = {
  lt: {
    htmlLang: "lt",
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
  },
  en: {
    htmlLang: "en",
    siteTitle: "Gustum UAB — Crustum, COFMOS & Gustum Bakery",
    nav: { brands: "Brands", contact: "Contact" },
    intro: { eyebrow: "Gustum UAB · Vilnius" },
    brands: [
      {
        kicker: "Bakery-café chain",
        name: "Crustum",
        description:
          "A chain of coffee shops. Fresh bread, pastries, cakes and buns paired with specialty coffee — sold directly to the end customer.",
        cta: "Visit crustum.lt",
      },
      {
        kicker: "Specialty coffee roastery",
        name: "COFMOS Coffee Roasters",
        description:
          "Specialty coffee roastery. Core business — wholesale B2B orders for HoReCa partners. Small-batch coffee roasted in Vilnius also reaches B2C customers nationwide through the e-shop.",
        cta: "Visit cofmos.lt",
      },
      {
        kicker: "Wholesale bakery · B2B",
        name: "Gustum",
        description:
          "Industrial-scale bakery fulfilling wholesale orders for B2B clients — hotels, restaurants, retail chains and corporate customers.",
        cta: "Request a quote",
      },
    ],
    contact: {
      eyebrow: "Contact",
      h2: "Partnerships and enquiries.",
      lead: "For partnerships, supply, wholesale orders or general enquiries, get in touch with Gustum UAB directly.",
      email: "Email",
      phone: "Phone",
      address: "Address",
      addressValue: "Dūmų g. 1, LT-11119 Vilnius, Lithuania",
    },
    footer: {
      tagline: "The holding company behind Crustum, COFMOS Coffee Roasters and Gustum bakery.",
      brands: "Brands",
      contact: "Contact",
      company: "Company",
      regNo: "Reg. No.",
      vat: "VAT",
      address: "Address",
      rights: "All rights reserved.",
    },
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

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void } | null>(null);

function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("LangContext missing");
  return ctx;
}

function useT() {
  return translations[useLang().lang];
}

function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="inline-flex items-center rounded-sm border border-border bg-card p-0.5 text-xs font-medium">
      {(["lt", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1 rounded-sm transition-colors uppercase tracking-wider ${
            lang === l ? "bg-espresso text-cream" : "text-muted-foreground hover:text-espresso"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function Header() {
  const t = useT();

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-background/85 border-b border-border">
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="font-display text-2xl tracking-tight text-espresso leading-none">
          Gustum<span className="text-clay">.</span>
        </a>
        <div className="flex items-center gap-6 sm:gap-8">
          <ul className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground">
            <li>
              <a href="#brands" className="hover:text-espresso transition-colors">
                {t.nav.brands}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-espresso transition-colors">
                {t.nav.contact}
              </a>
            </li>
          </ul>
          <LangToggle />
        </div>
      </nav>
    </header>
  );
}

function Brands() {
  const t = useT();

  return (
    <section id="brands" className="relative pt-6 sm:pt-8 pb-6 sm:pb-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div id="top" className="max-w-3xl mb-6 sm:mb-8">
          <div className="text-xs uppercase tracking-[0.2em] text-clay">{t.intro.eyebrow}</div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.brands.map((b, i) => {
            const meta = brandMeta[i];

            return (
              <article
                key={meta.id}
                className="group relative bg-card rounded-md overflow-hidden border border-border flex flex-col"
              >
                <div className="h-44 sm:h-52 flex items-center justify-center px-6 border-b border-border bg-card">
                  <img src={meta.logo} alt={`${b.name} logo`} className={meta.logoClass} />
                </div>
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={meta.photo}
                    alt={b.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-4">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-clay">
                      {b.kicker}
                    </span>
                    <span className="text-[11px] text-muted-foreground tabular-nums">
                      0{i + 1}/0{t.brands.length}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {b.description}
                  </p>
                  <a
                    href={meta.href}
                    {...(meta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="mt-auto inline-flex items-center justify-between gap-2 self-stretch border-t border-border pt-4 text-sm font-medium text-espresso hover:text-clay transition-colors"
                  >
                    <span>{b.cta}</span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      {meta.external ? "↗" : "→"}
                    </span>
                  </a>
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
  const t = useT();

  return (
    <section id="contact" className="py-8 sm:py-10 bg-butter/50 border-y border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-clay mb-4">
            {t.contact.eyebrow}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-espresso leading-tight">
            {t.contact.h2}
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">{t.contact.lead}</p>
        </div>
        <dl className="space-y-6 text-base">
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-clay mb-1">{t.contact.email}</dt>
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
            <dt className="text-xs uppercase tracking-[0.2em] text-clay mb-1">{t.contact.phone}</dt>
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
              {t.contact.address}
            </dt>
            <dd className="text-espresso">{t.contact.addressValue}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Footer() {
  const t = useT();

  return (
    <footer className="bg-espresso text-cream/90">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-8 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="font-display text-2xl text-cream">
              Gustum<span className="text-clay">.</span>
            </div>
            <p className="mt-3 text-cream/70 max-w-sm leading-relaxed text-sm">
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-cream/60 mb-3">
              {t.footer.brands}
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
              {t.footer.contact}
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
              <dt className="text-cream/40 uppercase tracking-wider mb-1">{t.footer.company}</dt>
              <dd className="text-cream/80">Gustum UAB</dd>
            </div>
            <div>
              <dt className="text-cream/40 uppercase tracking-wider mb-1">{t.footer.regNo}</dt>
              <dd className="text-cream/80">302780146</dd>
            </div>
            <div>
              <dt className="text-cream/40 uppercase tracking-wider mb-1">{t.footer.vat}</dt>
              <dd className="text-cream/80">LT100006875614</dd>
            </div>
            <div>
              <dt className="text-cream/40 uppercase tracking-wider mb-1">{t.footer.address}</dt>
              <dd className="text-cream/80">Dūmų g. 1, LT-11119 Vilnius</dd>
            </div>
          </dl>
          <div className="md:text-right self-end">
            © {new Date().getFullYear()} Gustum UAB. {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLangState] = useState<Lang>("lt");

  useEffect(() => {
    const stored = localStorage.getItem("gustum-lang") as Lang | null;
    if (stored === "lt" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("gustum-lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = translations[lang].htmlLang;
    document.title = translations[lang].siteTitle;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Brands />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangContext.Provider>
  );
}
