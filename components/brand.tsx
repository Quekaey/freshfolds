import Link from "next/link";
import { cn } from "@/lib/utils";

export function FoldMark({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={cn("relative grid h-9 w-9 place-items-center rounded-full bg-current", className)}>
    <span className="absolute left-[9px] top-[8px] h-4 w-4 rounded-tl-full rounded-br-full bg-white/95" />
    <span className="absolute bottom-[7px] right-[7px] h-3 w-3 rounded-tl-full rounded-br-full border-2 border-white/90" />
  </span>;
}

export function Brand({ href = "/", light = false, compact = false }: { href?: string; light?: boolean; compact?: boolean }) {
  return <Link href={href} className={cn("inline-flex items-center gap-2.5 font-bold tracking-[-.04em]", light ? "text-white" : "text-current")} aria-label="FreshFold home">
    <FoldMark /> <span className={cn("text-xl", compact && "hidden sm:inline")}>fresh<span className="font-normal italic">fold</span></span>
  </Link>;
}
