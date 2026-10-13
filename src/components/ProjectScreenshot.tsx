import React, { useState } from 'react';
import {
  Globe,
  Lock,
  ExternalLink,
  Cpu,
  Layers,
  Code2,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
  BarChart3,
  Terminal,
  Calendar,
  MessageSquare,
  DollarSign,
  Heart,
  Activity,
  Play,
  Maximize2,
  X,
  ZoomIn
} from 'lucide-react';
import { Project } from '../types';

interface ProjectScreenshotProps {
  project: Project;
  onOpenDetails: () => void;
}

export const ProjectScreenshot: React.FC<ProjectScreenshotProps> = ({ project, onOpenDetails }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'arch' | 'metrics'>('preview');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  // URL display cleanly
  const displayUrl = project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');

  const renderProjectPreview = () => {
    // Priority: Display real screenshot image if provided (Cake & Crumb, Kinetic Fitness, FlowTrack, etc.)
    if (project.image && !imgError) {
      return (
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="relative w-full h-full overflow-hidden bg-[var(--surface-sunken)] group/shot cursor-zoom-in select-none flex items-center justify-center"
          title="Click to view full-size high-res screenshot"
        >
          <img
            src={project.image}
            alt={`${project.title} live production screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/shot:scale-[1.02]"
            onError={() => {
              if (project.fallbackImage && project.fallbackImage !== project.image) {
                setImgError(false);
              } else {
                setImgError(true);
              }
            }}
            loading="lazy"
          />

          {/* Verified Screenshot Badge */}
          <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white flex items-center gap-1.5 shadow-md pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold tracking-wide">Live UI Screenshot</span>
          </div>

          <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white opacity-0 group-hover/shot:opacity-100 transition-opacity flex items-center gap-1.5 shadow-md pointer-events-none">
            <ZoomIn className="w-3.5 h-3.5 text-amber-300" />
            <span>Click to zoom in</span>
          </div>

          {/* Hover bar at bottom */}
          <div className="absolute inset-x-0 bottom-0 py-2 px-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover/shot:opacity-100 transition-opacity pointer-events-none flex items-center justify-between text-white text-[11px] font-mono">
            <span>High-res 2560×1600 capture</span>
            <span className="text-emerald-300 flex items-center gap-1">
              <ZoomIn className="w-3 h-3" />
              <span>Click to view full size</span>
            </span>
          </div>
        </div>
      );
    }

    switch (project.id) {
      case 'sitepulse':
        return (
          <div className="p-4 sm:p-5 bg-[#0b1120] text-[#f8fafc] font-sans h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider text-sky-400">
                  SITEPULSE · LIVE AUDIT ENGINE
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                SSRF GUARD: ACTIVE
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-3">
              <div className="p-2.5 rounded-lg bg-[#0f172a] border border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-400 block">HEALTH SCORE</span>
                <span className="text-xl font-bold font-mono text-sky-400">98/100</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0f172a] border border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-400 block">SSL SECURITY</span>
                <span className="text-xl font-bold font-mono text-emerald-400">A+ GRADE</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0f172a] border border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-400 block">SCRAPE SPEED</span>
                <span className="text-xl font-bold font-mono text-amber-400">34ms</span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#0f172a] border border-slate-800 text-xs font-mono space-y-1.5">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">Target Inspection:</span>
                <span className="text-sky-400">https://production-target.io</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">Security Headers:</span>
                <span className="text-emerald-400">CSP, HSTS, X-Frame Validated</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">Rate Limit Filter:</span>
                <span className="text-amber-400">Token Bucket (100 req/min)</span>
              </div>
            </div>
          </div>
        );

      case 'asalps':
        return (
          <div className="p-4 sm:p-5 bg-[#0f1722] text-[#e2e8f0] font-sans h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-[#1e293b]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="text-xs font-mono font-bold tracking-wider text-cyan-300">
                  ASALPS · SKILL AUDIT & PATH
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                ADAPTIVE V2
              </span>
            </div>

            <div className="space-y-2.5 my-3">
              <div>
                <div className="flex justify-between text-[11px] font-mono mb-1">
                  <span>Backend Competency (Django / ORM)</span>
                  <span className="text-cyan-400 font-bold">92%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full w-[92%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] font-mono mb-1">
                  <span>Database Normalization (SQL)</span>
                  <span className="text-cyan-400 font-bold">88%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full w-[88%]" />
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#162234] border border-[#1e293b] text-xs">
              <span className="text-[10px] font-mono text-cyan-400 block mb-0.5">
                GENERATED LEARNING ROADMAP
              </span>
              <p className="text-[11px] text-gray-300">
                Adaptive Tier 4 Unlocked: Async Tasks & Postgres Index Optimization
              </p>
            </div>
          </div>
        );

      case 'tuko':
        return (
          <div className="p-4 sm:p-5 bg-[#0d131a] text-[#f1f5f9] font-sans h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-[#1e293b]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono font-bold tracking-wider text-emerald-400">
                  TUKO · WEBSOCKET CHATROOM
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                LATENCY: 38ms
              </span>
            </div>

            <div className="space-y-2 my-2 text-xs">
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-[10px] flex items-center justify-center font-bold">
                  U
                </span>
                <div className="bg-[#1a2332] px-3 py-1.5 rounded-xl rounded-tl-none border border-gray-800">
                  <p className="text-[11px]">How do we prevent dead sockets on disconnect?</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-[10px] flex items-center justify-center font-bold">
                  AI
                </span>
                <div className="bg-[#13281e] px-3 py-1.5 rounded-xl rounded-tl-none border border-emerald-800/60 text-emerald-200">
                  <p className="text-[11px]">
                    FastAPI handles heartbeat pings; dead clients are pruned automatically!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-[#16202c] border border-gray-800 flex items-center justify-between text-[11px] text-gray-400">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-emerald-400" />
                <span>12 Active Peers Connected</span>
              </span>
              <span className="font-mono text-emerald-400">Sub-50ms</span>
            </div>
          </div>
        );

      case 'cake-and-crumb':
        return (
          <div className="bg-[#fff6f8] text-[#3e2723] font-sans h-full flex flex-col justify-between overflow-hidden select-none p-3 sm:p-4 text-left">
            {/* Top Brand Bar */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-rose-100/80">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-rose-500 text-white flex items-center justify-center text-xs shadow-xs">
                  🎂
                </span>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif font-bold text-xs sm:text-sm text-[#3e2723]">Cake & Crumb</span>
                    <span className="text-[8px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-rose-100 text-rose-600">
                      HOME BAKERY
                    </span>
                  </div>
                  <span className="text-[9px] text-[#8d6e63] hidden sm:block">Artisanal · Cute · 100% Eggless Options</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center gap-2 text-[10px] text-[#6d4c41] font-medium">
                  <span>Cake Menu</span>
                  <span>Custom Builder</span>
                  <span>Reviews</span>
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-rose-500 text-white shadow-xs">
                  Design Cake
                </span>
              </div>
            </div>

            {/* Main Hero Showcase */}
            <div className="grid grid-cols-12 gap-3 items-center flex-1 my-1">
              {/* Left Column: Headline & Action */}
              <div className="col-span-7 sm:col-span-8 space-y-1.5">
                <span className="inline-block px-2 py-0.5 rounded-full bg-rose-100/70 text-rose-700 text-[9px] font-mono font-medium">
                  Freshly Baked In Hazaribagh • 100% Eggless Specialty
                </span>
                <h3 className="text-sm sm:text-base md:text-lg font-serif font-bold text-[#2d1b18] leading-tight">
                  Handcrafted With Love,<br />
                  <span className="text-rose-500 italic">Frosted To Perfection ✨</span>
                </h3>
                <p className="text-[10px] sm:text-[11px] text-[#6d4c41] leading-relaxed line-clamp-2">
                  Celebrate every joyful milestone with delicate Korean bento cakes, vintage Lambeth frills, and Belgian chocolate creations.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-1 pt-0.5">
                  <span className="text-[9px] px-2 py-0.5 rounded-md bg-white border border-rose-100 text-[#5d4037] shadow-xs">
                    🌱 Pure Eggless
                  </span>
                  <span className="text-[9px] px-2 py-0.5 rounded-md bg-white border border-rose-100 text-[#5d4037] shadow-xs">
                    🧁 Fresh Ingredients
                  </span>
                  <span className="text-[9px] px-2 py-0.5 rounded-md bg-white border border-rose-100 text-[#5d4037] shadow-xs hidden sm:inline-block">
                    🎀 Custom Lettering
                  </span>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="px-3 py-1 rounded-lg bg-rose-500 text-white font-medium text-[10px] shadow-xs">
                    Explore Cake Menu
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-rose-200 text-[#5d4037] font-medium text-[10px]">
                    Build Custom
                  </span>
                </div>
              </div>

              {/* Right Column: Floating Bento Cake Card */}
              <div className="col-span-5 sm:col-span-4 flex justify-center">
                <div className="w-full max-w-[170px] p-2.5 rounded-2xl bg-white border border-rose-100 shadow-md flex flex-col items-center text-center space-y-1.5">
                  <span className="text-[8px] font-mono px-1.5 py-0.2 rounded-full bg-rose-50 text-rose-600 border border-rose-100">
                    🍓 Baked Fresh Daily
                  </span>
                  
                  {/* Bento Cake Visual (Artisanal Handcrafted Bento Cake) */}
                  <div className="w-20 h-16 sm:w-24 sm:h-20 rounded-xl bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50 flex items-center justify-center relative overflow-hidden border border-rose-100/60 shadow-inner">
                    <div className="relative flex flex-col items-center">
                      <span className="text-base sm:text-xl">🍓</span>
                      <div className="w-12 h-6 sm:w-14 sm:h-7 rounded-t-lg bg-rose-200 border border-rose-300 shadow-xs flex items-center justify-center">
                        <span className="text-[8px] font-serif font-bold text-rose-700">Tanu Bakes</span>
                      </div>
                      <div className="w-14 h-4 sm:w-16 sm:h-5 rounded-b-md bg-amber-100 border-x border-b border-amber-200" />
                    </div>
                  </div>

                  <div>
                    <span className="font-serif font-bold text-[10px] sm:text-[11px] text-[#2d1b18] block leading-tight">
                      Korean Minimalist Bento Cake
                    </span>
                    <span className="text-[9px] text-gray-400 block">Belgian Truffle</span>
                  </div>

                  <span className="w-full py-1 rounded-lg bg-rose-500 text-white font-bold text-[10px] shadow-xs block">
                    Quick Order ₹499
                  </span>
                </div>
              </div>
            </div>

            {/* Social Proof Footer */}
            <div className="pt-2 border-t border-rose-100/70 flex items-center justify-between text-[9px] text-[#8d6e63]">
              <span className="flex items-center gap-1 font-medium text-amber-600">
                <span>★★★★★</span>
                <span>5.0 Rating</span>
              </span>
              <span>500+ celebrations sweetened in Hazaribagh</span>
            </div>
          </div>
        );

      case 'flow-track':
        return (
          <div className="bg-[#170e19] text-[#f7eef9] font-sans h-full flex flex-col justify-between overflow-hidden select-none p-3 sm:p-4 text-left relative">
            {/* Top FlowTrack Bar */}
            <div className="flex items-center justify-between pb-2 mb-1 border-b border-pink-900/40 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-rose-400/20 text-rose-300 flex items-center justify-center text-[10px]">
                  🌸
                </span>
                <span className="font-outfit font-bold text-sm text-pink-100">FlowTrack</span>
              </div>

              <div className="flex items-center gap-2 text-[9px] font-mono text-pink-200/70">
                <span className="px-1.5 py-0.5 rounded bg-pink-950/80 border border-pink-800/40">English ▾</span>
                <span className="hidden sm:inline">☀️ Theme</span>
                <span className="hidden sm:inline">🔔 Reminders</span>
                <span className="hidden sm:inline">📄 Report</span>
              </div>
            </div>

            {/* Main Cycle Initialized Card */}
            <div className="grid grid-cols-12 gap-2 my-1 items-center">
              {/* Left stats */}
              <div className="col-span-7 sm:col-span-8 p-2.5 rounded-xl bg-[#221526] border border-pink-900/40 space-y-1.5">
                <span className="text-[9px] font-mono uppercase tracking-wider text-rose-400 font-semibold block">
                  CURRENT RHYTHM
                </span>
                <h4 className="text-sm sm:text-base font-bold font-outfit text-white">
                  Cycle Initialized
                </h4>
                <div className="text-[10px] text-pink-200/80 font-mono space-y-0.5">
                  <div>Estimated Ovulation: <span className="text-rose-400 font-bold">Estimated Day 14</span></div>
                  <div>Fertile Window: <span className="text-pink-300">Calculating...</span></div>
                </div>

                <div className="grid grid-cols-3 gap-1.5 pt-1 text-center">
                  <div className="p-1 rounded bg-[#2c1b30] border border-pink-900/30">
                    <span className="text-[8px] font-mono text-pink-300/70 block uppercase">Avg Cycle</span>
                    <span className="text-xs font-bold text-white">28 d</span>
                  </div>
                  <div className="p-1 rounded bg-[#2c1b30] border border-pink-900/30">
                    <span className="text-[8px] font-mono text-pink-300/70 block uppercase">Avg Period</span>
                    <span className="text-xs font-bold text-white">5 d</span>
                  </div>
                  <div className="p-1 rounded bg-[#2c1b30] border border-pink-900/30">
                    <span className="text-[8px] font-mono text-pink-300/70 block uppercase">Recorded</span>
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                </div>
              </div>

              {/* Right Floral Illustration */}
              <div className="col-span-5 sm:col-span-4 p-2 rounded-xl bg-[#221526] border border-pink-900/40 flex flex-col items-center justify-center text-center space-y-1">
                <div className="w-full aspect-[4/3] rounded-lg bg-gradient-to-br from-pink-300 via-rose-200 to-amber-100 flex items-center justify-center shadow-inner relative overflow-hidden">
                  <span className="text-2xl sm:text-3xl">💐</span>
                  <div className="absolute inset-x-0 bottom-0 py-0.5 bg-black/40 text-[7px] text-white italic truncate px-1">
                    "Flowers expressing rhythm"
                  </div>
                </div>
                <span className="text-[8px] font-mono text-pink-300/80 italic line-clamp-1">
                  Gentle daily wellness
                </span>
              </div>
            </div>

            {/* Bottom Analytics Chart */}
            <div className="p-2 sm:p-2.5 rounded-xl bg-[#221526] border border-pink-900/40 space-y-1">
              <div className="flex items-center justify-between text-[9px] font-mono">
                <span className="font-bold text-pink-100">Advanced Cycle Analytics</span>
                <span className="text-rose-400">Sinusoidal History</span>
              </div>

              {/* Sine Wave Curve */}
              <div className="h-9 w-full flex items-center justify-center relative">
                <svg className="w-full h-8" viewBox="0 0 300 40" fill="none">
                  <path
                    d="M 10 35 Q 150 -5 290 35"
                    stroke="#f43f5e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="10" cy="35" r="3.5" fill="#f43f5e" />
                  <circle cx="150" cy="15" r="3.5" fill="#f43f5e" />
                  <circle cx="290" cy="35" r="3.5" fill="#f43f5e" />
                </svg>
                <div className="absolute inset-x-0 bottom-0 flex justify-between text-[7px] font-mono text-pink-300/60 px-2">
                  <span>C1 (28.0d)</span>
                  <span>C2 (Peak 29.0d)</span>
                  <span>C3 (28.0d)</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 text-[8px] font-mono text-pink-300/70 border-t border-pink-900/30">
                <span>Symptoms: Cramps, Headache, Bloating</span>
                <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1 font-bold">
                  ✨ FlowAI Assistant
                </span>
              </div>
            </div>
          </div>
        );

      case 'expense-splitter':
        return (
          <div className="p-4 sm:p-5 bg-[#121915] text-[#ebf5ef] font-sans h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-[#23352a]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono font-bold tracking-wider text-emerald-300">
                  EXPENSE SPLITTER · TAB SOLVER
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                GREEDY GRAPH
              </span>
            </div>

            <div className="space-y-1.5 my-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2 rounded bg-[#18231d] border border-[#23352a]">
                <span>Alice owes Bob:</span>
                <span className="text-emerald-400 font-bold">$42.50</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-[#18231d] border border-[#23352a]">
                <span>Charlie owes Alice:</span>
                <span className="text-emerald-400 font-bold">$18.00</span>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-[#1a2820] border border-emerald-800/60 text-[11px] text-emerald-200">
              <span className="block text-[10px] font-mono text-emerald-400">DEBT SIMPLIFICATION</span>
              <span>Reduced 6 separate multi-party transfers to 2 net payments</span>
            </div>
          </div>
        );

      case 'ai-monk':
        return (
          <div className="p-4 sm:p-5 bg-[#161715] text-[#eaebe6] font-sans h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-[#292a27]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="text-xs font-mono font-bold tracking-wider text-amber-300">
                  AI MONK · MINDFUL DIALOGUE
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                STATEFUL CONTEXT
              </span>
            </div>

            <div className="my-2 p-2.5 rounded-lg bg-[#1f201d] border border-[#292a27] text-xs space-y-1 text-gray-300 italic">
              <p className="text-[11px] text-amber-300 font-sans not-italic font-medium">Prompt: "How do I maintain calm during production incidents?"</p>
              <p className="text-[11px]">"Treat every system state as data, not drama. What can be observed can be stabilized."</p>
            </div>

            <div className="p-2 rounded-lg bg-[#1f201d] border border-[#292a27] text-[11px] text-gray-400 flex items-center justify-between">
              <span>Flask Secure Gateway</span>
              <span className="text-amber-400 font-mono">Multi-turn session retained</span>
            </div>
          </div>
        );

      case 'kinetic-fitness':
        return (
          <div className="bg-[#0b0c0f] text-white font-sans h-full flex flex-col justify-between overflow-hidden select-none p-3 sm:p-4 text-left relative">
            {/* Gym Interior Background Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0f] via-[#0b0c0f]/80 to-[#14161d] pointer-events-none" />

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between pb-2 mb-1 border-b border-white/10">
              <span className="font-outfit font-black tracking-wider text-sm sm:text-base text-white flex items-center gap-0.5">
                KINETIC<span className="text-[#a3e635]">.FIT</span>
              </span>

              <div className="hidden sm:flex items-center gap-3 text-[10px] font-mono tracking-wider text-gray-400 uppercase">
                <span>Programs</span>
                <span>Plans</span>
                <span>Coaches</span>
                <span>Schedule</span>
              </div>

              <span className="text-[10px] font-mono font-bold px-3 py-1 rounded bg-blue-600 text-white shadow-xs uppercase">
                Free Trial
              </span>
            </div>

            {/* Main Kinetic Hero */}
            <div className="relative z-10 space-y-1.5 my-auto py-1">
              <span className="inline-block px-2.5 py-0.5 rounded-sm bg-[#a3e635] text-black font-outfit font-black text-[9px] tracking-widest uppercase">
                GYM & FITNESS STUDIO
              </span>

              <div className="space-y-0">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-outfit uppercase tracking-tight text-white leading-none">
                  KINETIC<br />
                  <span
                    className="text-transparent font-black"
                    style={{ WebkitTextStroke: '1.2px #ffffff' }}
                  >
                    FITNESS
                  </span>
                </h3>
              </div>

              <p className="text-[10px] sm:text-[11px] text-gray-300 max-w-md font-sans line-clamp-2">
                Strength training, HIIT, yoga and personal coaching under one roof. Small classes, certified coaches, real results.
              </p>

              <div className="flex items-center gap-2 pt-1">
                <span className="px-3.5 py-1.5 rounded bg-blue-600 text-white font-outfit font-bold text-[10px] uppercase tracking-wider shadow-xs">
                  Book Free Trial
                </span>
                <span className="px-3 py-1.5 rounded border border-white/40 text-white font-outfit font-bold text-[10px] uppercase tracking-wider">
                  View Plans
                </span>
              </div>
            </div>

            {/* Bottom Metrics Bar & Lime Banner */}
            <div className="relative z-10 space-y-1.5 pt-1">
              <div className="grid grid-cols-4 gap-2 py-1.5 border-t border-white/10 text-left">
                <div>
                  <span className="text-xs sm:text-sm font-black font-outfit block text-white">5:30 AM</span>
                  <span className="text-[8px] font-mono text-gray-400 uppercase">Doors Open</span>
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-black font-outfit block text-white">14</span>
                  <span className="text-[8px] font-mono text-gray-400 uppercase">Max / Class</span>
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-black font-outfit block text-white">3</span>
                  <span className="text-[8px] font-mono text-gray-400 uppercase">Coaches</span>
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-black font-outfit block text-white">6</span>
                  <span className="text-[8px] font-mono text-gray-400 uppercase">Class Types</span>
                </div>
              </div>

              {/* Lime accent ribbon */}
              <div className="py-1 px-2 bg-[#a3e635] text-black text-[9px] font-black font-outfit tracking-wider uppercase truncate flex items-center justify-between">
                <span>STRENGTH • HIIT • YOGA • PERSONAL TRAINING • FREE TRIAL</span>
                <span className="text-[8px] font-mono font-bold bg-black text-white px-1 rounded">Netlify</span>
              </div>
            </div>
          </div>
        );

      case 'portfolio-html-css-js':
        return (
          <div className="p-4 sm:p-5 bg-[#171a21] text-[#e1e7f0] font-sans h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-[#262c38]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                <span className="text-xs font-mono font-bold tracking-wider text-teal-300">
                  DEVPORTFOLIO 1.0 · PURE JS
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">
                100/100 LIGHTHOUSE
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2 text-xs">
              <div className="p-2 rounded-lg bg-[#202531] border border-[#2b3344] space-y-0.5">
                <span className="text-[10px] text-gray-400 block">Theme State</span>
                <span className="text-teal-300 font-mono font-bold">LocalStorage Synced</span>
              </div>
              <div className="p-2 rounded-lg bg-[#202531] border border-[#2b3344] space-y-0.5">
                <span className="text-[10px] text-gray-400 block">Form Validation</span>
                <span className="text-emerald-400 font-mono font-bold">Regex Verified</span>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-[#202531] border border-[#2b3344] text-[11px] text-gray-300 flex items-center justify-between font-mono">
              <span>Zero Bundler Dependencies</span>
              <span className="text-teal-400">0.0ms TBT</span>
            </div>
          </div>
        );

      case 'advance-pong':
        return (
          <div className="p-4 sm:p-5 bg-[#0a0f0d] text-[#00ffcc] font-mono h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-[#143026]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ffcc] animate-ping" />
                <span className="text-xs font-bold tracking-wider text-[#00ffcc]">
                  PONG ARCADE · 60 FPS CANVAS
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#0b241c] text-[#00ffcc] border border-[#143026]">
                AI BOT: ACTIVE
              </span>
            </div>

            <div className="my-2 p-3 rounded-lg bg-[#0e1c16] border border-[#173b2e] flex items-center justify-around text-center">
              <div>
                <span className="text-[10px] text-gray-400 block">PLAYER</span>
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <span className="text-xs text-gray-600">:</span>
              <div>
                <span className="text-[10px] text-gray-400 block">AI BOT</span>
                <span className="text-2xl font-bold text-[#00ffcc]">2</span>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-[#0e1c16] border border-[#173b2e] text-[11px] flex items-center justify-between text-gray-400">
              <span>Physics: Vector Reflection</span>
              <span className="text-[#00ffcc]">60.0 FPS</span>
            </div>
          </div>
        );

      case 'js-algorithms':
        return (
          <div className="p-4 sm:p-5 bg-[#14151a] text-[#e0e2ec] font-mono h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-[#252834]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="text-xs font-bold tracking-wider text-yellow-300">
                  DSA LAB · JAVASCRIPT ES6+
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-950 text-yellow-300 border border-yellow-800">
                42 SPECS PASSING
              </span>
            </div>

            <div className="my-2 space-y-1.5 text-[11px] p-2.5 rounded-lg bg-[#1c1e26] border border-[#252834]">
              <div className="flex justify-between">
                <span className="text-gray-400">Greedy Graph Solver:</span>
                <span className="text-yellow-400">O(V + E log V)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Binary Search Tree:</span>
                <span className="text-emerald-400">Self-Balancing AVL</span>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-[#1c1e26] border border-[#252834] text-[11px] text-gray-400 flex items-center justify-between">
              <span>Test Suite Coverage</span>
              <span className="text-emerald-400">100% Passing</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="p-4 sm:p-5 bg-[#0f172a] text-[#f8fafc] font-sans h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                <span className="text-xs font-mono font-bold tracking-wider text-indigo-300">
                  {project.title.toUpperCase()}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {project.category.toUpperCase()}
              </span>
            </div>

            <div className="my-3 space-y-2 text-xs">
              <p className="text-gray-300 leading-relaxed text-xs">
                {project.description}
              </p>
              {project.metrics && (
                <div className="p-2 rounded bg-[#0f172a] border border-slate-800 text-[11px] font-mono text-sky-400">
                  {project.metrics}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-1">
              {project.tags.slice(0, 4).map((t, idx) => (
                <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0f172a] text-slate-300 border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-lg transition-all">
      {/* Realistic Browser Window Bar */}
      <div className="px-3 py-2 bg-[var(--surface-elevated)] border-b border-[var(--border)] flex items-center justify-between gap-2 text-xs select-none">
        {/* macOS Dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80 inline-block" />
        </div>

        {/* Real URL Bar */}
        <div className="flex-1 max-w-[280px] sm:max-w-[340px] px-2.5 py-1 rounded-md bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center gap-1.5 text-[11px] font-mono text-[var(--text-secondary)] truncate">
          <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
          <span className="truncate">{displayUrl}</span>
        </div>

        {/* Tab Switcher Controls (Overview, Architecture, Metrics) */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
              activeTab === 'preview'
                ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold'
                : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
            }`}
          >
            Live UI
          </button>
          <button
            onClick={() => setActiveTab('arch')}
            className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
              activeTab === 'arch'
                ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold'
                : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
            }`}
          >
            Arch
          </button>
        </div>
      </div>

      {/* Screen Viewport Stage */}
      <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative overflow-hidden bg-[var(--bg-secondary)]">
        {activeTab === 'preview' && renderProjectPreview()}

        {activeTab === 'arch' && (
          <div className="p-4 sm:p-5 bg-[var(--surface)] text-[var(--text-primary)] font-mono text-xs h-full overflow-y-auto space-y-2">
            <span className="text-[10px] uppercase tracking-wider text-[var(--accent)] block font-bold">
              SYSTEM ARCHITECTURE SPECIFICATION
            </span>
            <ul className="space-y-1.5 text-[11px]">
              {(project.architecture || [
                'Production deployed on cloud runtime with SSL verification',
                'Optimistic UI state with graceful API error boundaries',
                'Modular component architecture with zero unhandled exceptions'
              ]).map((line, idx) => (
                <li key={idx} className="flex items-start gap-1.5 leading-relaxed text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Hover quick overlay button only for simulated mockups when not displaying real screenshot image */}
        {(!project.image || imgError || activeTab !== 'preview') && (
          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-semibold flex items-center gap-1.5 shadow-md hover:scale-105 transition-transform"
            >
              <span>Open Real Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onOpenDetails}
              className="px-3 py-1.5 rounded-lg bg-black/70 text-white border border-white/20 text-xs font-mono hover:scale-105 transition-transform"
            >
              Case Details
            </button>
          </div>
        )}
      </div>

      {/* High-Resolution Screenshot Lightbox (quanghuynh.com photography style) */}
      {isLightboxOpen && project.image && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Header Bar */}
          <div
            className="flex items-center justify-between text-white z-10 pb-3 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="font-outfit font-bold text-base sm:text-lg">{project.title}</span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Verified Production UI
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-mono font-bold flex items-center gap-1.5 hover:scale-105 transition-transform"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Centered High-Res Image Viewport */}
          <div
            className="flex-1 flex items-center justify-center p-2 sm:p-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.image}
              alt={`${project.title} full high-resolution capture`}
              className="max-h-[82vh] max-w-full rounded-lg shadow-2xl object-contain border border-white/10"
            />
          </div>

          {/* Lightbox Footer Bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 pt-2 border-t border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <span>{project.subtitle}</span>
            <span className="text-emerald-400">{project.liveUrl}</span>
          </div>
        </div>
      )}
    </div>
  );
};
