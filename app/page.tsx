'use client'

import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Bot,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  ClipboardList,
  FileText,
  Filter,
  FolderKanban,
  Gauge,
  Globe2,
  ImageIcon,
  Camera,
  LayoutDashboard,
  Lightbulb,
  Megaphone,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Sparkles,
  Target,
  Users,
  WandSparkles,
  X,
  Zap,
} from 'lucide-react'

type NavItem = { label: string; icon: typeof LayoutDashboard; active?: boolean; count?: string; badge?: string }

type NavGroup = { label: string; items: NavItem[] }

const navGroups: NavGroup[] = [
  {
    label: 'Workspace',
    items: [
      { label: 'Overview', icon: LayoutDashboard, active: true },
      { label: 'Campaigns', icon: Megaphone, count: '12' },
      { label: 'Create campaign', icon: Plus },
      { label: 'Creative studio', icon: ImageIcon },
      { label: 'Content calendar', icon: CalendarDays },
    ],
  },
  {
    label: 'Insights',
    items: [
      { label: 'Audiences', icon: Users },
      { label: 'Analytics', icon: BarChart3 },
      { label: 'AI assistant', icon: Bot, badge: 'Beta' },
      { label: 'Reports', icon: FileText },
    ],
  },
]

const metrics = [
  { label: 'Total spend', value: '$48,290', change: '+12.8%', note: 'vs. previous period', icon: Zap, tone: 'coral' },
  { label: 'Revenue', value: '$186,420', change: '+24.5%', note: 'vs. previous period', icon: Gauge, tone: 'mint' },
  { label: 'ROAS', value: '3.86x', change: '+0.42x', note: 'vs. previous period', icon: Target, tone: 'lavender' },
  { label: 'Conversions', value: '1,284', change: '+18.2%', note: 'vs. previous period', icon: ArrowUpRight, tone: 'sand' },
]

const campaigns = [
  { name: 'Summer collection — Prospecting', platform: 'Meta', status: 'Active', spend: '$18,420', conversions: '482', roas: '4.21x', color: 'bg-[#f16f5b]' },
  { name: 'Retargeting — Add to cart', platform: 'Instagram', status: 'Active', spend: '$9,840', conversions: '318', roas: '5.08x', color: 'bg-[#8d7af3]' },
  { name: 'New customer offer', platform: 'Meta', status: 'Learning', spend: '$7,290', conversions: '184', roas: '2.94x', color: 'bg-[#e8b45b]' },
  { name: 'Brand awareness — Q3', platform: 'Instagram', status: 'Paused', spend: '$4,680', conversions: '96', roas: '1.86x', color: 'bg-[#79b8a8]' },
]

const chartData = [48, 56, 44, 68, 61, 76, 71, 84, 65, 79, 88, 74, 92, 86, 96, 78, 89, 94, 83, 98, 91, 100, 87, 95, 99, 92, 100, 96, 100, 98]

export default function Page() {
  const [range, setRange] = useState('Last 30 days')
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#18202b] selection:bg-[#f16f5b]/20">
      <div className="flex min-h-screen">
        <aside className={`fixed inset-y-0 left-0 z-40 flex w-[252px] flex-col border-r border-[#e7e9ed] bg-[#fbfcfd] transition-transform lg:static lg:translate-x-0 ${mobileNav ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex h-[76px] items-center justify-between border-b border-[#e7e9ed] px-6">
            <div className="flex items-center gap-2.5">
              <div className="grid size-8 place-items-center rounded-[10px] bg-[#f16f5b] text-white shadow-sm"><Sparkles size={17} strokeWidth={2.5} /></div>
              <span className="text-[17px] font-semibold tracking-[-0.03em]">adwise<span className="text-[#f16f5b]">.</span></span>
            </div>
            <button onClick={() => setMobileNav(false)} className="rounded-lg p-1 text-[#7c8695] lg:hidden" aria-label="Close navigation"><X size={18} /></button>
          </div>
          <div className="flex-1 overflow-y-auto px-3 py-6">
            {navGroups.map((group) => <div key={group.label} className="mb-7">
              <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#a0a8b4]">{group.label}</p>
              <nav className="flex flex-col gap-1">
                {group.items.map(({ label, icon: Icon, active, count, badge }) => <button key={label} className={`group flex h-10 items-center gap-3 rounded-[9px] px-3 text-left text-[13px] font-medium transition-colors ${active ? 'bg-[#f16f5b]/10 text-[#dc5c4a]' : 'text-[#667182] hover:bg-[#f1f3f5] hover:text-[#222b38]'}`}>
                  <Icon size={17} strokeWidth={active ? 2.3 : 1.8} />
                  <span className="flex-1">{label}</span>
                  {count && <span className="rounded-md bg-[#eef0f3] px-1.5 py-0.5 text-[10px] text-[#8a93a0]">{count}</span>}
                  {badge && <span className="rounded bg-[#e5e0ff] px-1.5 py-0.5 text-[9px] font-semibold text-[#7263d9]">{badge}</span>}
                </button>)}
              </nav>
            </div>)}
            <div className="rounded-xl border border-[#e8e2dc] bg-[#fffaf5] p-4">
              <div className="mb-3 flex size-8 items-center justify-center rounded-lg bg-[#f8dfcc] text-[#d4754e]"><WandSparkles size={16} /></div>
              <p className="mb-1 text-[12px] font-semibold text-[#42434b]">Your AI co-pilot is ready</p>
              <p className="mb-3 text-[11px] leading-[1.5] text-[#949097]">Get smarter recommendations based on your latest campaign data.</p>
              <button className="text-[11px] font-semibold text-[#d36c4d]">Ask adwise <ArrowUpRight className="ml-1 inline" size={12} /></button>
            </div>
          </div>
          <div className="border-t border-[#e7e9ed] p-3">
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left hover:bg-[#f1f3f5]">
              <div className="grid size-8 place-items-center rounded-full bg-[#d8e5df] text-[11px] font-semibold text-[#45685b]">AM</div>
              <div className="flex-1"><p className="text-[12px] font-semibold text-[#34404e]">Alex Morgan</p><p className="text-[10px] text-[#929ba8]">Acme Studio</p></div><MoreHorizontal size={17} className="text-[#a4acb7]" />
            </button>
          </div>
        </aside>
        {mobileNav && <button aria-label="Close navigation overlay" className="fixed inset-0 z-30 bg-[#18202b]/20 lg:hidden" onClick={() => setMobileNav(false)} />}
        <section className="min-w-0 flex-1">
          <header className="flex h-[76px] items-center justify-between border-b border-[#e7e9ed] bg-[#fbfcfd] px-5 sm:px-8 lg:px-10">
            <div className="flex items-center gap-3"><button className="rounded-lg p-2 text-[#667182] lg:hidden" onClick={() => setMobileNav(true)} aria-label="Open navigation"><Menu size={20} /></button><div className="hidden items-center gap-2 text-[12px] text-[#929aa6] sm:flex"><span>Workspace</span><ChevronRight size={13} /><span className="font-medium text-[#475364]">Overview</span></div><div className="relative sm:hidden"><Search className="absolute left-2.5 top-2.5 text-[#9ca5b1]" size={16} /><input className="h-9 w-36 rounded-lg border border-[#e4e7eb] bg-white pl-9 text-xs outline-none" placeholder="Search" /></div></div>
            <div className="flex items-center gap-2 sm:gap-4"><button className="hidden items-center gap-2 rounded-lg border border-[#e2e5e9] bg-white px-3 py-2 text-[12px] font-medium text-[#596576] shadow-sm sm:flex"><Globe2 size={14} /> Acme Studio <ChevronDown size={13} /></button><button className="rounded-lg p-2 text-[#7d8793] hover:bg-[#f0f2f4]" aria-label="Help"><CircleHelp size={18} /></button><button className="relative rounded-lg p-2 text-[#7d8793] hover:bg-[#f0f2f4]" aria-label="Notifications"><Bell size={18} /><span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-[#f16f5b]" /></button><div className="hidden size-8 place-items-center rounded-full bg-[#d8e5df] text-[10px] font-semibold text-[#45685b] sm:grid">AM</div></div>
          </header>
          <div className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 text-[12px] font-medium text-[#a0a8b3]">Tuesday, September 24, 2026</p><h1 className="text-[28px] font-semibold tracking-[-0.04em] text-[#202936] sm:text-[31px]">Good morning, Alex <span className="text-[#f16f5b]">!</span></h1><p className="mt-1.5 text-[13px] text-[#7d8794]">Here&apos;s how your advertising is performing.</p></div><div className="flex items-center gap-2"><button className="flex h-9 items-center gap-2 rounded-lg border border-[#e1e4e8] bg-white px-3 text-[12px] font-medium text-[#627080] shadow-sm"><CalendarDays size={14} /> <span>{range}</span><ChevronDown size={13} /></button><button className="flex h-9 items-center gap-2 rounded-lg bg-[#f16f5b] px-3.5 text-[12px] font-semibold text-white shadow-sm shadow-[#f16f5b]/20 hover:bg-[#dc5e4d]"><Plus size={15} /> New campaign</button></div></div>
            <div className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">{metrics.map((metric) => <div key={metric.label} className="rounded-xl border border-[#e7e9ed] bg-white p-5 shadow-[0_1px_2px_rgba(20,30,40,0.02)]"><div className="mb-5 flex items-center justify-between"><p className="text-[12px] font-medium text-[#8993a0]">{metric.label}</p><div className={`grid size-8 place-items-center rounded-lg ${metric.tone === 'coral' ? 'bg-[#fff0ed] text-[#ee715e]' : metric.tone === 'mint' ? 'bg-[#e8f5f0] text-[#58a188]' : metric.tone === 'lavender' ? 'bg-[#efedff] text-[#8172e3]' : 'bg-[#fff5df] text-[#d6a24a]'}`}><metric.icon size={16} /></div></div><div className="flex items-end justify-between"><p className="text-[24px] font-semibold tracking-[-0.04em] text-[#263140]">{metric.value}</p><span className="mb-1 flex items-center gap-0.5 text-[11px] font-semibold text-[#4ea17d]"><ArrowUpRight size={13} />{metric.change}</span></div><p className="mt-1 text-[10px] text-[#a6adb7]">{metric.note}</p></div>)}</div>
            <div className="mb-7 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.6fr)_minmax(300px,0.8fr)]">
              <div className="rounded-xl border border-[#e7e9ed] bg-white p-5 sm:p-6"><div className="mb-6 flex items-start justify-between"><div><div className="flex items-center gap-2"><h2 className="text-[15px] font-semibold text-[#2b3543]">Performance overview</h2><button aria-label="Performance info" className="text-[#a6afb9]"><CircleHelp size={14} /></button></div><p className="mt-1 text-[11px] text-[#9ca5b0]">Revenue and spend over time</p></div><button className="flex items-center gap-1 rounded-md border border-[#e7e9ed] px-2 py-1 text-[10px] font-medium text-[#7b8694]">Revenue <ChevronDown size={12} /></button></div><div className="mb-5 flex items-center gap-4 text-[10px] text-[#84909e]"><span className="flex items-center gap-1.5"><i className="size-2 rounded-full bg-[#f16f5b]" />Revenue</span><span className="flex items-center gap-1.5"><i className="size-2 rounded-full bg-[#b9c0ca]" />Spend</span></div><div className="relative h-[205px] pl-8"><div className="absolute inset-x-0 top-0 flex justify-between border-b border-dashed border-[#edf0f2] pb-[15px] text-[9px] text-[#aab2bc]"><span>$50k</span><span>$40k</span><span>$30k</span><span>$20k</span><span>$10k</span><span>$0</span></div><div className="absolute inset-x-0 bottom-6 top-7 flex items-end gap-[5px] sm:gap-2">{chartData.map((height, i) => <div key={i} className="group relative flex h-full flex-1 items-end"><div className="w-full rounded-t-[3px] bg-[#f7b1a4]/55 transition-all group-hover:bg-[#f16f5b]" style={{ height: `${height * 0.8}%` }} /><div className="absolute bottom-0 left-[28%] h-[30%] w-[44%] rounded-t-[2px] bg-[#dfe3e8]" /></div>)}</div><div className="absolute inset-x-0 bottom-0 flex justify-between text-[9px] text-[#aab2bc]"><span>Aug 26</span><span>Aug 31</span><span>Sep 05</span><span>Sep 10</span><span>Sep 15</span><span>Sep 20</span><span>Sep 24</span></div></div></div>
              <div className="rounded-xl border border-[#e7e9ed] bg-white p-5 sm:p-6"><div className="mb-5 flex items-start justify-between"><div><h2 className="text-[15px] font-semibold text-[#2b3543]">AI recommendations</h2><p className="mt-1 text-[11px] text-[#9ca5b0]">Based on your latest data</p></div><div className="grid size-8 place-items-center rounded-lg bg-[#fff0ed] text-[#ed735f]"><Lightbulb size={16} /></div></div><div className="flex flex-col gap-3"><div className="rounded-lg border border-[#f0e4df] bg-[#fffaf7] p-3.5"><div className="mb-2 flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#f16f5b]" /><p className="text-[11px] font-semibold text-[#4b4c54]">Increase budget on Summer collection</p></div><p className="text-[11px] leading-[1.55] text-[#929098]">This campaign is delivering 38% more conversions at a lower CPA.</p><button className="mt-2.5 text-[10px] font-semibold text-[#df6d55]">Review recommendation <ChevronRight className="ml-0.5 inline" size={12} /></button></div><div className="rounded-lg border border-[#e4e9f3] bg-[#f9fbff] p-3.5"><div className="mb-2 flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#8d7af3]" /><p className="text-[11px] font-semibold text-[#4b4c54]">Refresh your retargeting creative</p></div><p className="text-[11px] leading-[1.55] text-[#929098]">Frequency is up 24% this week. Test a new hook to keep things fresh.</p><button className="mt-2.5 text-[10px] font-semibold text-[#7364d6]">Create a variation <ChevronRight className="ml-0.5 inline" size={12} /></button></div></div><button className="mt-4 flex w-full items-center justify-center gap-1.5 text-[11px] font-semibold text-[#7a8491] hover:text-[#f16f5b]">View all recommendations <ArrowUpRight size={13} /></button></div>
            </div>
            <div className="rounded-xl border border-[#e7e9ed] bg-white"><div className="flex flex-col gap-4 border-b border-[#eef0f2] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"><div><h2 className="text-[15px] font-semibold text-[#2b3543]">Campaign performance</h2><p className="mt-1 text-[11px] text-[#9ca5b0]">Your active campaigns at a glance</p></div><div className="flex items-center gap-2"><button className="flex h-8 items-center gap-1.5 rounded-md border border-[#e5e8eb] px-2.5 text-[11px] font-medium text-[#7b8592]"><Filter size={13} /> Filter</button><button className="flex h-8 items-center gap-1.5 rounded-md border border-[#e5e8eb] px-2.5 text-[11px] font-medium text-[#7b8592]">View all <ArrowUpRight size={13} /></button></div></div><div className="overflow-x-auto"><table className="w-full min-w-[700px] text-left"><thead><tr className="border-b border-[#f0f1f3] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#a0a8b3]"><th className="px-6 py-3 font-semibold">Campaign</th><th className="px-4 py-3 font-semibold">Status</th><th className="px-4 py-3 font-semibold">Spend</th><th className="px-4 py-3 font-semibold">Conversions</th><th className="px-4 py-3 font-semibold">ROAS</th><th className="px-6 py-3 text-right font-semibold"> </th></tr></thead><tbody>{campaigns.map((campaign) => <tr key={campaign.name} className="border-b border-[#f2f3f4] last:border-0 hover:bg-[#fbfcfd]"><td className="px-6 py-4"><div className="flex items-center gap-3"><div className={`size-2 rounded-full ${campaign.color}`} /><div><p className="text-[12px] font-semibold text-[#35404e]">{campaign.name}</p><p className="mt-0.5 flex items-center gap-1 text-[10px] text-[#a1a9b3]"><Camera size={10} /> {campaign.platform} <span className="mx-0.5">·</span> Last updated 2h ago</p></div></div></td><td className="px-4 py-4"><span className={`rounded-full px-2 py-1 text-[10px] font-medium ${campaign.status === 'Active' ? 'bg-[#e7f5ed] text-[#4d9d79]' : campaign.status === 'Learning' ? 'bg-[#fff5df] text-[#b28432]' : 'bg-[#eff1f3] text-[#8c96a2]'}`}>{campaign.status}</span></td><td className="px-4 py-4 text-[12px] font-medium text-[#586474]">{campaign.spend}</td><td className="px-4 py-4 text-[12px] font-medium text-[#586474]">{campaign.conversions}</td><td className="px-4 py-4 text-[12px] font-semibold text-[#4d9d79]">{campaign.roas}</td><td className="px-6 py-4 text-right"><button aria-label={`More options for ${campaign.name}`} className="rounded-md p-1 text-[#a2abb6] hover:bg-[#f0f2f4]"><MoreHorizontal size={16} /></button></td></tr>)}</tbody></table></div><div className="flex items-center justify-between px-6 py-4"><p className="text-[10px] text-[#a2abb4]">Showing 4 of 12 campaigns</p><button className="flex items-center gap-1 text-[10px] font-semibold text-[#e06b55]">See all campaigns <ChevronRight size={12} /></button></div></div>
          </div>
        </section>
      </div>
    </main>
  )
}
