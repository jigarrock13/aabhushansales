"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Gift,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Tags,
  Wrench
} from "lucide-react";

const categories = [
  {
    name: "Earrings",
    text: "Studs, hoops, drops, and daily wear favourites",
    href: "#handpicked",
    image:
      "https://images.unsplash.com/photo-1640183298005-3a4497cc6a37?auto=format&fit=crop&q=85&w=900"
  },
  {
    name: "Bangles",
    text: "Traditional, festive, and statement styles",
    href: "#handpicked",
    image:
      "https://images.pexels.com/photos/20493839/pexels-photo-20493839.jpeg?auto=compress&cs=tinysrgb&w=900"
  },
  {
    name: "Necklace Sets",
    text: "Complete sets for celebrations and gifting",
    href: "#handpicked",
    image:
      "https://images.pexels.com/photos/12865908/pexels-photo-12865908.jpeg?auto=compress&cs=tinysrgb&w=900"
  },
  {
    name: "Rings",
    text: "Everyday sparkle and occasion-ready pieces",
    href: "#handpicked",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=85&w=900"
  },
  {
    name: "Bridal/Wedding",
    text: "Curated styles for milestone days",
    href: "#visit",
    image:
      "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?auto=format&fit=crop&q=85&w=900"
  },
  {
    name: "Daily Wear",
    text: "Lightweight pieces for routine styling",
    href: "#handpicked",
    image:
      "https://images.unsplash.com/photo-1588444650700-6c11d3f064c5?auto=format&fit=crop&q=85&w=900"
  },
  {
    name: "Gifting",
    text: "Thoughtful jewellery picks by occasion",
    href: "#enquiry",
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=85&w=900"
  }
];

const products = [
  {
    name: "Festive Pearl Drop Earrings",
    sku: "AS-EAR-104",
    price: "Rs. 1,850",
    badge: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=85&w=900"
  },
  {
    name: "Antique Finish Bangle Pair",
    sku: "AS-BAN-221",
    price: "Rs. 2,450",
    badge: "Bestseller",
    image:
      "https://images.pexels.com/photos/20493839/pexels-photo-20493839.jpeg?auto=compress&cs=tinysrgb&w=900"
  },
  {
    name: "Occasion Necklace Set",
    sku: "AS-SET-088",
    price: "Rs. 4,950",
    badge: "Offer",
    image:
      "https://images.pexels.com/photos/12865908/pexels-photo-12865908.jpeg?auto=compress&cs=tinysrgb&w=900"
  },
  {
    name: "Daily Wear Stone Ring",
    sku: "AS-RNG-067",
    price: "Rs. 950",
    badge: "Fast Shipping",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=85&w=900"
  }
];

const promises = [
  {
    title: "Quality Checked",
    text: "Pieces are checked before handover for finish and condition.",
    icon: BadgeCheck
  },
  {
    title: "Transparent Pricing",
    text: "Clear store assistance on product price and available options.",
    icon: Tags
  },
  {
    title: "Easy Exchange Support",
    text: "Store team can guide eligible exchange requests.",
    icon: ShieldCheck
  },
  {
    title: "Repair Assistance",
    text: "Visit the store for repair guidance and service support.",
    icon: Wrench
  },
  {
    title: "Gift Packing",
    text: "Ask the team for gift-ready packing options.",
    icon: Gift
  },
  {
    title: "Store Assistance",
    text: "Get help choosing by budget, style, and occasion.",
    icon: Store
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

function MotionSection({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-90px" }}
      variants={stagger}
    >
      {children}
    </motion.section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div className="mx-auto mb-9 max-w-3xl text-center" variants={fadeUp}>
      <p className="mb-3 text-xs font-extrabold uppercase text-gold">{eyebrow}</p>
      <h2 className="font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-stone-600">{text}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-50 border-b border-line bg-white/95 px-5 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <a className="flex items-center gap-3" href="#top" aria-label="Aabhushan Sales home">
            <span className="grid size-11 place-items-center rounded-md bg-wine text-sm font-extrabold text-white">
              AS
            </span>
            <span>
              <strong className="block leading-none">Aabhushan Sales</strong>
              <small className="text-stone-500">Rajkot</small>
            </span>
          </a>
          <nav className="flex flex-wrap items-center gap-2 text-sm font-bold">
            <a className="rounded-md px-3 py-2 hover:bg-rose" href="#categories">
              Categories
            </a>
            <a className="rounded-md px-3 py-2 hover:bg-rose" href="#handpicked">
              Catalogue
            </a>
            <a className="rounded-md px-3 py-2 hover:bg-rose" href="#promises">
              Promises
            </a>
            <a className="rounded-md px-3 py-2 hover:bg-rose" href="#visit">
              Visit
            </a>
          </nav>
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-extrabold text-ink"
            href="#enquiry"
          >
            <MessageCircle size={17} />
            Enquire
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-[78vh] overflow-hidden text-white">
        <img
          alt="Jewellery display"
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1640183298005-3a4497cc6a37?auto=format&fit=crop&q=90&w=1800"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,25,23,.92),rgba(28,25,23,.62)_46%,rgba(28,25,23,.2)),linear-gradient(0deg,rgba(28,25,23,.76),rgba(28,25,23,.08)_46%)]" />
        <motion.div
          className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-end px-5 pb-16 pt-28 md:px-10"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-extrabold uppercase text-gold">
              Micro imitation jewellery catalogue
            </p>
            <h1 className="font-serif text-5xl font-bold leading-none md:text-7xl">
              Aabhushan Sales
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              A Malabar-inspired catalogue experience for Rajkot shoppers:
              polished categories, handpicked styles, trust promises, and quick
              store enquiry.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-gold px-5 py-3 font-extrabold text-ink"
                href="#categories"
              >
                Browse Catalogue
                <ArrowRight size={18} />
              </a>
              <a
                className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/60 bg-white/10 px-5 py-3 font-extrabold text-white"
                href="#visit"
              >
                <MapPin size={18} />
                Visit Store
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="grid border-y border-line bg-white md:grid-cols-4">
        {[
          ["Catalogue Shopping", "Browse by product type, occasion, and gifting need."],
          ["Store Assistance", "Ask for help choosing by budget, finish, and style."],
          ["Rajkot Store", "Directions and local enquiry options stay easy to find."],
          ["Gift Ready", "Request gift packing and occasion-ready suggestions."]
        ].map(([title, text]) => (
          <div className="border-line p-6 md:border-r" key={title}>
            <strong className="mb-2 block text-wine">{title}</strong>
            <span className="leading-6 text-stone-600">{text}</span>
          </div>
        ))}
      </section>

      <MotionSection className="px-5 py-20 md:px-10" id="categories">
        <SectionHeading
          eyebrow="Shop by category"
          title="Find jewellery by style"
          text="A category-first layout inspired by premium jewellery catalogues, adapted for micro imitation jewellery and store enquiries."
        />
        <motion.div
          className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7"
          variants={stagger}
        >
          {categories.map((category) => (
            <motion.a
              className="group overflow-hidden rounded-lg border border-line bg-white shadow-soft"
              href={category.href}
              key={category.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-rose">
                <img
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  src={category.image}
                />
              </div>
              <div className="p-4">
                <p className="mb-2 text-xs font-extrabold uppercase text-wine">
                  {category.name}
                </p>
                <h3 className="min-h-14 text-base font-bold leading-snug">
                  {category.text}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-teal">
                  Shop now <ArrowRight size={15} />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </MotionSection>

      <MotionSection className="bg-rose px-5 py-20 md:px-10" id="handpicked">
        <SectionHeading
          eyebrow="Handpicked for you"
          title="Fresh styles from the catalogue"
          text="A product grid with offer/new-arrival labels, SKU details, and price-first browsing for a premium jewellery-store feel."
        />
        <motion.div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4" variants={stagger}>
          {products.map((product) => (
            <motion.article
              className="overflow-hidden rounded-lg border border-line bg-white shadow-soft"
              key={product.sku}
              variants={fadeUp}
              whileHover={{ y: -4 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-paper">
                <span className="absolute left-3 top-3 z-10 rounded-md bg-wine px-3 py-1 text-xs font-extrabold uppercase text-white">
                  {product.badge}
                </span>
                <img
                  alt={product.name}
                  className="h-full w-full object-cover"
                  src={product.image}
                />
              </div>
              <div className="p-5">
                <p className="mb-2 text-xs font-extrabold uppercase text-wine">
                  Aabhushan Sales
                </p>
                <h3 className="min-h-14 text-lg font-bold leading-snug">{product.name}</h3>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <span className="font-extrabold text-teal">{product.price}</span>
                  <small className="text-stone-500">SKU: {product.sku}</small>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </MotionSection>

      <MotionSection className="bg-white px-5 py-20 md:px-10" id="promises">
        <SectionHeading
          eyebrow="Aabhushan Promises"
          title="Reasons to shop with us"
          text="Trust signals written safely for micro imitation jewellery, without unconfirmed gold or diamond claims."
        />
        <motion.div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3 xl:grid-cols-6" variants={stagger}>
          {promises.map((promise) => {
            const Icon = promise.icon;
            return (
              <motion.article
                className="rounded-lg border border-line bg-paper p-5"
                key={promise.title}
                variants={fadeUp}
              >
                <Icon className="mb-4 text-wine" size={24} />
                <strong className="mb-2 block">{promise.title}</strong>
                <p className="text-sm leading-6 text-stone-600">{promise.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </MotionSection>

      <MotionSection className="bg-ink px-5 py-20 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.15fr] md:items-center">
          <motion.div variants={fadeUp}>
            <p className="mb-3 text-xs font-extrabold uppercase text-gold">
              Store services
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
              Browse online. Finalize with store guidance.
            </h2>
            <p className="mt-5 leading-7 text-white/70">
              Use the site like a digital catalogue: discover styles, prepare a
              useful enquiry, and visit or message the store with clearer intent.
            </p>
          </motion.div>
          <motion.div className="grid gap-4 md:grid-cols-3" variants={stagger}>
            {[
              ["Store Visit", "Use the map link to plan a visit to Arya Nagar.", Store],
              ["Bulk & Gifting", "Ask for family function and gifting options.", PackageCheck],
              ["New Arrivals", "Highlight fresh pieces in the catalogue.", Sparkles]
            ].map(([title, text, Icon]) => {
              const ServiceIcon = Icon as typeof Store;
              return (
                <motion.article
                  className="rounded-lg border border-white/15 bg-white p-5 text-ink"
                  key={title as string}
                  variants={fadeUp}
                >
                  <ServiceIcon className="mb-4 text-wine" size={24} />
                  <h3 className="mb-2 font-bold">{title as string}</h3>
                  <p className="text-sm leading-6 text-stone-600">{text as string}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 py-20 md:px-10" id="enquiry">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <motion.div variants={fadeUp}>
            <p className="mb-3 text-xs font-extrabold uppercase text-gold">
              Need help choosing?
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
              Create a quick store enquiry
            </h2>
            <p className="mt-5 leading-7 text-stone-600">
              Choose a category, budget, and occasion so the team can guide you
              with better options.
            </p>
          </motion.div>
          <motion.form
            className="grid gap-4 rounded-lg border border-line bg-white p-6 shadow-soft"
            variants={fadeUp}
          >
            <label className="grid gap-2 text-sm font-extrabold text-stone-600">
              I am looking for
              <select className="min-h-12 rounded-md border border-line bg-paper px-3">
                <option>Earrings</option>
                <option>Bangles</option>
                <option>Necklace sets</option>
                <option>Rings</option>
                <option>Gift options</option>
                <option>Bridal or wedding pieces</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-extrabold text-stone-600">
              Budget range
              <select className="min-h-12 rounded-md border border-line bg-paper px-3">
                <option>Under Rs. 2,000</option>
                <option>Rs. 2,000 - Rs. 5,000</option>
                <option>Rs. 5,000 - Rs. 10,000</option>
                <option>Rs. 10,000+</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-extrabold text-stone-600">
              Occasion
              <input
                className="min-h-12 rounded-md border border-line bg-paper px-3"
                placeholder="Wedding, daily use, gift, festival"
              />
            </label>
            <button
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 font-extrabold text-ink"
              type="button"
            >
              <Search size={18} />
              Prepare Enquiry
            </button>
          </motion.form>
        </div>
      </MotionSection>

      <section className="bg-wine px-5 py-14 text-white md:px-10" id="visit">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase text-gold">
              Visit the store
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight">
              Aabhushan Sales, Arya Nagar
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-white/80">
              Shop No. 3, Sant Kabir Rd, beside Kuber Hotel, Ranchod Nagar
              Society, Randhir Nagar, Arya Nagar, Rajkot.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-12 items-center gap-2 rounded-md bg-gold px-5 py-3 font-extrabold text-ink"
              href="https://www.google.com/maps/search/?api=1&query=Aabhushan%20Sales%20Shop%20No.%203%20Sant%20Kabir%20Rd%20Arya%20Nagar%20Rajkot"
            >
              <MapPin size={18} />
              Directions
            </a>
            <a
              className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/60 px-5 py-3 font-extrabold text-white"
              href="#enquiry"
            >
              <Phone size={18} />
              Enquire
            </a>
          </div>
        </div>
      </section>

      <footer className="grid gap-8 border-t border-line bg-white px-5 py-10 text-stone-600 md:grid-cols-[0.9fr_1.6fr] md:px-10">
        <div>
          <strong className="mb-2 block text-ink">Aabhushan Sales</strong>
          <span className="block leading-7">
            Micro imitation jewellery catalogue for Rajkot shoppers.
          </span>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["Shop", "Earrings", "Bangles", "Necklace Sets", "Rings"],
            ["Occasions", "Bridal/Wedding", "Daily Wear", "Gifting", "Latest Arrivals"],
            ["Help", "Contact", "About Us", "Shipping Policy", "Refund Policy"],
            ["Store", "Directions", "WhatsApp", "Instagram", "Rajkot"]
          ].map(([heading, ...links]) => (
            <div key={heading}>
              <h2 className="mb-2 text-sm font-extrabold uppercase text-wine">
                {heading}
              </h2>
              {links.map((link) => (
                <a className="block py-1 text-sm" href="#top" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}
