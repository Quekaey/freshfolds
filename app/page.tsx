import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/brand";

const previews = [
  { href: "/template-a", eyebrow: "Strategy 01 · Lifestyle", title: "FreshFold Living", copy: "An editorial experience that turns laundry outsourcing into time reclaimed.", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85", className: "bg-[#dfe7da] text-[#173f32]", tag: "Desire → Trust → Enquire" },
  { href: "/template-b", eyebrow: "Strategy 02 · Utility", title: "FreshFold Express", copy: "A practical booking platform that moves urgent visitors from postcode to pickup.", image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1400&q=85", className: "bg-[#dbe9ff] text-[#092c6b]", tag: "Check → Estimate → Book" }
];

export default function Showcase() {
  return <main className="min-h-screen bg-[#f5f2ea] px-5 py-6 text-[#17241e] sm:px-8 lg:px-12">
    <nav className="mx-auto flex max-w-[1500px] items-center justify-between"><Brand /><span className="rounded-full border border-black/10 bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em]">Episode 02</span></nav>
    <header className="mx-auto max-w-[1500px] py-16 sm:py-24 lg:flex lg:items-end lg:justify-between">
      <div><p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-[#9b5b44]">One brand. Two websites.</p><h1 className="serif max-w-4xl text-balance text-5xl leading-[.96] tracking-[-.055em] sm:text-7xl lg:text-[104px]">Same service.<br /><em className="font-light">Different intent.</em></h1></div>
      <p className="mt-8 max-w-md text-base leading-7 text-black/60 lg:mb-2">FreshFold serves one audience in two different moments: when they dream of getting time back, and when they need the laundry gone today.</p>
    </header>
    <section className="mx-auto grid max-w-[1500px] gap-5 pb-12 lg:grid-cols-2">
      {previews.map((item, index) => <Link key={item.href} href={item.href} className={`group overflow-hidden rounded-[2rem] p-3 transition-transform duration-500 hover:-translate-y-1 ${item.className}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]"><Image src={item.image} alt={index === 0 ? "Sunlit modern living room" : "Neatly folded laundry in a modern laundrette"} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" sizes="(min-width:1024px) 50vw, 100vw" priority /></div>
        <div className="p-5 sm:p-7"><div className="flex items-center justify-between gap-3"><p className="text-[11px] font-bold uppercase tracking-[.2em] opacity-60">{item.eyebrow}</p><ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><h2 className="serif mt-7 text-4xl tracking-[-.04em] sm:text-5xl">{item.title}</h2><p className="mt-3 max-w-lg leading-7 opacity-70">{item.copy}</p><span className="mt-7 inline-flex rounded-full border border-current/20 px-4 py-2 text-sm font-semibold">{item.tag}</span></div>
      </Link>)}
    </section>
  </main>;
}
