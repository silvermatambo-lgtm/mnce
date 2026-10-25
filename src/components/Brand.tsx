import { site } from '../config/site';
export default function Brand({ compact = false }: { compact?: boolean }) {
 return <div className="flex items-center gap-3 min-w-0"><img src={site.brand.logo} alt={`${site.brand.name} logo`} className="h-12 w-12 rounded-xl object-cover object-left bg-slate-950 border border-white/15" /><span className="min-w-0"><span className="block font-display text-white font-bold text-base leading-tight truncate">{site.brand.name}</span>{!compact && <span className="block text-accent text-[11px] leading-tight mt-1 tracking-wider uppercase truncate">{site.brand.tagline}</span>}</span></div>;
}
