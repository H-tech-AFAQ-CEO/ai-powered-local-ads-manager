'use client'

import { useState } from 'react'
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  BookOpen,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  Copy,
  FileText,
  Filter,
  Gauge,
  ImageIcon,
  LayoutDashboard,
  Lightbulb,
  Megaphone,
  Menu,
  MoreHorizontal,
  Plus,
  RefreshCw,
  Search,
  Settings,
  Sparkles,
  Target,
  Users,
  WandSparkles,
  X,
} from 'lucide-react'

const nav = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Campaigns', icon: Megaphone, count: '12' },
  { label: 'Create campaign', icon: Plus },
  { label: 'Creative studio', icon: WandSparkles, beta: true },
  { label: 'Content calendar', icon: CalendarDays },
  { label: 'Audiences', icon: Users },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'AI assistant', icon: Sparkles, active: true },
  { label: 'Reports', icon: FileText },
]

const campaigns = [
  { name: 'Summer launch — NYC', status: 'Active', spend: '$8,420', roas: '4.82x', ctr: '2.84%', trend: '+18.4%', color: 'mint' },
  { name: 'Retargeting — Q3', status: 'Active', spend: '$4,180', roas: '3.91x', ctr: '1.92%', trend: '+6.2%', color: 'blue' },
  { name: 'Brand awareness — US', status: 'Learning', spend: '$2,960', roas: '2.14x', ctr: '1.36%', trend: '-2.8%', color: 'amber' },
]

function Sparkline({ down = false }: { down?: boolean }) {
  return (
    <svg viewBox="0 0 96 28" className="h-7 w-24" aria-hidden="true" preserveAspectRatio="none">
      <path d={down ? 'M1 4 C16 8, 18 3, 29 10 S43 18, 55 12 S73 20, 95 25' : 'M1 23 C12 20, 18 21, 27 16 S40 18, 52 11 S72 14, 95 3'} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function TrendChart() {
  const bars = [38, 48, 36, 62, 54, 70, 58, 78, 68, 86, 74, 92, 88, 100]
  return (
    <div className="relative h-48 w-full pt-3">
      <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-muted-foreground/70">
        {['$12k', '$8k', '$4k', '$0'].map((item) => <div key={item} className="flex items-center gap-3"><span className="w-7 text-right">{item}</span><span className="h-px flex-1 bg-border/70" /></div>)}
      </div>
      <div className="absolute inset-x-10 bottom-5 top-2 flex items-end justify-between gap-2">
        {bars.map((height, index) => <div key={index} className="group relative flex h-full flex-1 items-end"><div style={{ height: `${height}%` }} className={`w-full rounded-t-sm transition-colors ${index > 10 ? 'bg-primary' : 'bg-primary/15 group-hover:bg-primary/40'}`} /></div>)}
      </div>
      <div className="absolute bottom-0 left-10 right-0 flex justify-between text-[10px] text-muted-foreground"><span>Sep 1</span><span>Sep 8</span><span>Sep 15</span><span>Sep 22</span></div>
    </div>
  )
}

function MetricCard({ label, value, change, icon: Icon, down = false, color = 'text-primary' }: { label: string; value: string; change: string; icon: typeof Activity; down?: boolean; color?: string }) {
  return <div className="rounded-xl border bg-card p-4 shadow-sm shadow-black/[0.02]">
    <div className="flex items-center justify-between"><span className="text-xs font-medium text-muted-foreground">{label}</span><Icon className={`size-4 ${color}`} /></div>
    <div className="mt-3 flex items-end justify-between gap-2"><span className="text-2xl font-semibold tracking-tight">{value}</span><span className={`flex items-center gap-0.5 text-xs font-semibold ${down ? 'text-rose-600' : 'text-emerald-600'}`}>{down ? <ArrowDownRight className="size-3" /> : <ArrowUpRight className="size-3" />}{change}</span></div>
    <div className={`mt-2 ${down ? 'text-rose-500' : 'text-emerald-500'}`}><Sparkline down={down} /></div>
  </div>
}

export default function AdsDashboard() {
  const [active, setActive] = useState('Overview')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [range, setRange] = useState('Last 30 days')
  const [recommendations, setRecommendations] = useState(2)

  return <div className="min-h-screen bg-background text-foreground">
    <aside className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r bg-sidebar transition-transform lg:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex h-16 items-center justify-between border-b px-5"><div className="flex items-center gap-2.5"><div className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground"><Target className="size-4" /></div><span className="text-sm font-bold tracking-tight">orbit<span className="text-primary">.</span></span></div><button onClick={() => setMobileOpen(false)} className="rounded-md p-1 text-muted-foreground lg:hidden" aria-label="Close navigation"><X className="size-4" /></button></div>
      <div className="border-b p-3"><button className="flex w-full items-center gap-3 rounded-lg border bg-background/70 p-2.5 text-left"><div className="grid size-8 place-items-center rounded-md bg-[#1877f2] text-xs font-bold text-white">AC</div><div className="min-w-0 flex-1"><div className="truncate text-xs font-semibold">Acme Co.</div><div className="text-[10px] text-muted-foreground">Growth workspace</div></div><ChevronDown className="size-3.5 text-muted-foreground" /></button></div>
      <nav className="flex-1 overflow-y-auto p-3"><div className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">Workspace</div><div className="flex flex-col gap-0.5">{nav.map(({ label, icon: Icon, count, beta }) => <button key={label} onClick={() => { setActive(label); setMobileOpen(false) }} className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs font-medium transition-colors ${active === label ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-accent hover:text-foreground'}`}><Icon className="size-4 shrink-0" /><span className="flex-1">{label}</span>{count && <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${active === label ? 'bg-primary-foreground/15 text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>{count}</span>}{beta && <span className={`text-[9px] font-bold uppercase tracking-wider ${active === label ? 'text-primary-foreground/70' : 'text-primary'}`}>new</span>}</button>)}</div><div className="mb-2 mt-7 px-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">Manage</div><button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground"><Settings className="size-4" />Settings</button><button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground"><CircleHelp className="size-4" />Help center</button></nav>
      <div className="border-t p-3"><div className="flex items-center gap-3 rounded-lg p-2"><div className="grid size-8 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">JD</div><div className="min-w-0 flex-1"><div className="truncate text-xs font-semibold">Jordan Davis</div><div className="truncate text-[10px] text-muted-foreground">jordan@acme.co</div></div><MoreHorizontal className="size-4 text-muted-foreground" /></div></div>
    </aside>
    {mobileOpen && <button className="fixed inset-0 z-20 bg-foreground/20 lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Close navigation overlay" />}
    <div className="lg:pl-64"><header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/90 px-4 backdrop-blur-md sm:px-6 lg:px-8"><div className="flex items-center gap-3"><button onClick={() => setMobileOpen(true)} className="rounded-md p-1.5 text-muted-foreground lg:hidden" aria-label="Open navigation"><Menu className="size-5" /></button><div><p className="text-xs text-muted-foreground">Wednesday, September 24, 2026</p><h1 className="text-sm font-semibold">Good morning, Jordan</h1></div></div><div className="flex items-center gap-2"><button className="hidden items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-accent sm:flex"><Search className="size-3.5" />Search<span className="rounded border bg-muted px-1.5 py-0.5 text-[9px]">⌘ K</span></button><button className="relative rounded-lg p-2 text-muted-foreground hover:bg-accent" aria-label="Notifications"><Bell className="size-4" /><span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-primary" /></button><div className="ml-1 grid size-8 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">JD</div></div></header>
      <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8"><div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground"><span>Workspace</span><ChevronRight className="size-3" /><span className="text-foreground">Overview</span></div><h2 className="text-2xl font-semibold tracking-tight">Performance overview</h2><p className="mt-1 text-sm text-muted-foreground">Your campaigns are trending above benchmark this month.</p></div><div className="flex items-center gap-2"><button className="hidden items-center gap-2 rounded-lg border bg-card px-3 py-2 text-xs font-medium sm:flex"><RefreshCw className="size-3.5 text-muted-foreground" />Synced 4m ago</button><select value={range} onChange={(e) => setRange(e.target.value)} className="h-9 rounded-lg border bg-card px-3 text-xs font-medium outline-none focus:ring-2 focus:ring-ring"><option>Today</option><option>Last 7 days</option><option>Last 30 days</option><option>Custom range</option></select></div></div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><MetricCard label="Total spend" value="$15,560" change="12.8%" icon={Activity} /><MetricCard label="Revenue" value="$68,240" change="24.6%" icon={Gauge} color="text-emerald-600" /><MetricCard label="Conversions" value="1,284" change="18.2%" icon={Target} color="text-violet-500" /><MetricCard label="ROAS" value="4.38x" change="2.4%" icon={BarChart3} down color="text-amber-500" /></div>
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.55fr_1fr]"><section className="rounded-xl border bg-card p-5 shadow-sm shadow-black/[0.02]"><div className="flex flex-wrap items-start justify-between gap-3"><div><h3 className="text-sm font-semibold">Spend & revenue</h3><p className="mt-1 text-xs text-muted-foreground">Performance across all connected ad accounts</p></div><div className="flex items-center gap-4 text-[11px] text-muted-foreground"><span className="flex items-center gap-1.5"><i className="size-2 rounded-full bg-primary" />Revenue</span><span className="flex items-center gap-1.5"><i className="size-2 rounded-full bg-primary/20" />Spend</span></div></div><TrendChart /><div className="mt-4 flex items-center justify-between border-t pt-4"><div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">Avg. daily revenue</div><div className="mt-1 text-lg font-semibold">$2,274.67</div></div><div className="text-right"><div className="text-[10px] uppercase tracking-wider text-muted-foreground">Profit margin</div><div className="mt-1 text-lg font-semibold text-emerald-600">76.4%</div></div></div></section>
          <section className="rounded-xl border bg-primary p-5 text-primary-foreground shadow-sm"><div className="flex items-start justify-between"><div className="grid size-9 place-items-center rounded-lg bg-primary-foreground/10"><Sparkles className="size-4" /></div><span className="rounded-full bg-primary-foreground/10 px-2 py-1 text-[10px] font-medium">AI INSIGHT</span></div><h3 className="mt-5 text-lg font-semibold tracking-tight">One quick win for your account</h3><p className="mt-2 text-sm leading-6 text-primary-foreground/75">Your Summer launch campaign is converting <strong className="text-primary-foreground">32% better</strong> on Reels than Feed. Shift $240/day to Reels to capture an estimated $1.8k in incremental revenue.</p><button onClick={() => setRecommendations(0)} className="mt-5 flex items-center gap-2 rounded-lg bg-primary-foreground px-3 py-2 text-xs font-semibold text-primary hover:bg-primary-foreground/90">Review recommendation <ChevronRight className="size-3.5" /></button><div className="mt-6 flex items-center gap-1.5 text-[10px] text-primary-foreground/55"><Clock3 className="size-3" />Generated 14 minutes ago</div></section></div>
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]"><section className="rounded-xl border bg-card shadow-sm shadow-black/[0.02]"><div className="flex items-center justify-between border-b p-5"><div><h3 className="text-sm font-semibold">Top campaigns</h3><p className="mt-1 text-xs text-muted-foreground">Ranked by return on ad spend</p></div><button onClick={() => setActive('Campaigns')} className="flex items-center gap-1 text-xs font-semibold text-primary">View all <ChevronRight className="size-3.5" /></button></div><div className="overflow-x-auto"><table className="w-full min-w-[560px] text-left text-xs"><thead className="bg-muted/40 text-[10px] uppercase tracking-wider text-muted-foreground"><tr><th className="px-5 py-3 font-medium">Campaign</th><th className="px-3 py-3 font-medium">Status</th><th className="px-3 py-3 font-medium">Spend</th><th className="px-3 py-3 font-medium">ROAS</th><th className="px-3 py-3 font-medium">CTR</th><th className="px-5 py-3 font-medium">Trend</th></tr></thead><tbody className="divide-y">{campaigns.map((campaign) => <tr key={campaign.name} className="transition-colors hover:bg-muted/30"><td className="px-5 py-4 font-medium">{campaign.name}</td><td className="px-3 py-4"><span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-medium ${campaign.status === 'Active' ? 'bg-emerald-500/10 text-emerald-700' : 'bg-amber-500/10 text-amber-700'}`}><i className="size-1.5 rounded-full bg-current" />{campaign.status}</span></td><td className="px-3 py-4 text-muted-foreground">{campaign.spend}</td><td className="px-3 py-4 font-semibold">{campaign.roas}</td><td className="px-3 py-4 text-muted-foreground">{campaign.ctr}</td><td className={`px-5 py-4 font-semibold ${campaign.trend.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>{campaign.trend}</td></tr>)}</tbody></table></div></section>
          <section className="rounded-xl border bg-card shadow-sm shadow-black/[0.02]"><div className="flex items-center justify-between border-b p-5"><div><h3 className="text-sm font-semibold">AI recommendations</h3><p className="mt-1 text-xs text-muted-foreground">Based on the last 7 days</p></div><span className="grid size-6 place-items-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">{recommendations}</span></div><div className="flex flex-col divide-y">{recommendations > 0 ? <><div className="p-5"><div className="flex gap-3"><div className="grid size-8 shrink-0 place-items-center rounded-lg bg-amber-500/10 text-amber-600"><Lightbulb className="size-4" /></div><div><p className="text-xs font-semibold">Shift budget to Reels</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Move $240/day from Feed to Reels in Summer launch.</p><div className="mt-3 flex gap-2"><button onClick={() => setRecommendations(1)} className="rounded-md bg-primary px-2.5 py-1.5 text-[10px] font-semibold text-primary-foreground">Review</button><button className="rounded-md border px-2.5 py-1.5 text-[10px] font-medium">Dismiss</button></div></div></div></div><div className="p-5"><div className="flex gap-3"><div className="grid size-8 shrink-0 place-items-center rounded-lg bg-violet-500/10 text-violet-600"><WandSparkles className="size-4" /></div><div><p className="text-xs font-semibold">Refresh ad creative</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Creative fatigue detected in Retargeting — Q3.</p><button className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-primary">Open creative studio <ChevronRight className="size-3" /></button></div></div></div></> : <div className="p-5 text-center"><div className="mx-auto grid size-9 place-items-center rounded-full bg-emerald-500/10 text-emerald-600"><Sparkles className="size-4" /></div><p className="mt-3 text-xs font-semibold">You're all caught up</p><p className="mt-1 text-xs text-muted-foreground">No pending recommendations to review.</p></div>}</div></section></div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-dashed bg-card/50 p-4"><div className="flex items-center gap-3"><div className="grid size-9 place-items-center rounded-lg bg-[#1877f2]/10 text-[#1877f2]"><Megaphone className="size-4" /></div><div><p className="text-xs font-semibold">Meta account connected</p><p className="text-[11px] text-muted-foreground">Acme Co. Business Manager · Synced 4 minutes ago</p></div></div><button className="flex items-center gap-1 text-xs font-semibold text-primary">Manage connection <ChevronRight className="size-3.5" /></button></div>
      </main></div>
  </div>
}

export { Copy, Filter, BookOpen, ImageIcon }
