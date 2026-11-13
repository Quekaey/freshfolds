import Link from "next/link";
import { cn } from "@/lib/utils";

export function FoldMark({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={cn("relative grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-current", className)}>
    <span className="absolute left-[8px] top-[7px] h-4 w-4 rounded-tl-full rounded-br-full bg-current" />
    <span className="absolute bottom-[6px] right-[6px] h-3 w-3 rounded-tl-full rounded-br-full border-2 border-current" />
  </span>;
}

export function Brand({ href = "/", light = false, compact = false }: { href?: string; light?: boolean; compact?: boolean }) {
  return <Link href={href} className={cn("inline-flex items-center gap-2.5 font-bold tracking-[-.04em]", light ? "text-white" : "text-current")} aria-label="FreshFold home">
    <FoldMark /> <span className={cn("text-xl", compact && "hidden sm:inline")}>fresh<span className="font-normal italic">fold</span></span>
  </Link>;
}
