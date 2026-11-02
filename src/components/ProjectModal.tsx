import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Cpu,
  Sparkles,
  Play,
  RotateCcw,
  MessageSquare,
  Activity,
  Send,
  Zap,
  ShieldCheck,
  Heart,
  Video,
  Image as ImageIcon
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [modalTab, setModalTab] = useState<'overview' | 'demo'>('overview');
  const [overviewMedia, setOverviewMedia] = useState<'screenshot' | 'demoGif'>('demoGif');

  // Sync default media view when project changes
  useEffect(() => {
    if (project?.demoGif) {
      setOverviewMedia('demoGif');
    } else {
      setOverviewMedia('screenshot');
    }
  }, [project?.id]);

  // Interactive state for Cake & Crumbs Demo
  const [cakeSponge, setCakeSponge] = useState('Red Velvet');
  const [cakeFrosting, setCakeFrosting] = useState('Cream Cheese');
  const [cakeTopping, setCakeTopping] = useState('Fresh Berries');
  const [customMsg, setCustomMsg] = useState('Happy Celebration!');

  // Interactive state for ZenMonk Demo
  const [selectedScenario, setSelectedScenario] = useState<'refactor' | 'conflict'>('refactor');
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'Inhale (4s)' | 'Hold (7s)' | 'Exhale (8s)'>('Inhale (4s)');

  // Interactive state for Vektor Cloud Demo
  const [pingSpeed, setPingSpeed] = useState(0.84);
  const [threatCount, setThreatCount] = useState(14289);
  const [isSimulatingTraffic, setIsSimulatingTraffic] = useState(false);

  if (!project) return null;

  // Cake dynamic pricing calculation
  const getCakePrice = () => {
    let price = 650;
    if (cakeSponge === 'Red Velvet') price += 150;
    if (cakeSponge === 'Belgian Chocolate') price += 200;
    if (cakeSponge === 'Matcha Green Tea') price += 250;
    if (cakeFrosting === 'Cream Cheese') price += 100;
    if (cakeFrosting === 'Salted Caramel') price += 120;
    if (cakeFrosting === 'Dark Ganache') price += 140;
    if (cakeTopping === 'Fresh Berries') price += 120;
    if (cakeTopping === 'Edible 24K Gold') price += 300;
    if (cakeTopping === 'French Macarons') price += 180;
    return price;
  };

  const handleSimulateTraffic = () => {
    setIsSimulatingTraffic(true);
    setPingSpeed(+(0.4 + Math.random() * 0.6).toFixed(2));
    setThreatCount((prev) => prev + Math.floor(Math.random() * 45 + 10));
    setTimeout(() => setIsSimulatingTraffic(false), 800);
  };

  const renderInteractiveDemo = () => {
    switch (project.id) {
      case 'ai-monk':
        return (
          <div className="space-y-4 font-sans text-xs">
            {/* Live Recorded Walkthrough GIF */}
            {project.demoGif && (
              <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface-elevated)] p-3 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5 font-bold text-amber-500">
                    <Video className="w-3.5 h-3.5" />
                    Live Recorded Session Walkthrough (Master Zen Bodhi)
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-500 dark:text-amber-400 font-bold border border-amber-500/30">
                    5-10s Looping Demo
                  </span>
                </div>
                <div className="rounded-lg overflow-hidden border border-[var(--border)] bg-black/40 shadow-inner">
                  <img
                    src={project.demoGif}
                    alt="ZenMonk AI mock interview live recording"
                    className="w-full max-h-60 object-cover object-top"
                  />
                </div>
                <p className="text-[11px] font-mono text-[var(--text-tertiary)] italic">
                  Looping preview: Live interview practice room, candidate prompt submission, and 60-second breathing anxiety reset.
                </p>
              </div>
            )}

            {/* Header info */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-transparent border border-amber-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono font-bold text-amber-500 dark:text-amber-400 text-xs">
                  MASTER ZEN BODHI · LIVE INTERVIEW SIMULATOR
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-500 text-[10px] font-mono font-bold">
                STAR Engine Active
              </span>
            </div>

            {/* Scenario toggle */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[var(--text-tertiary)]">Select Prompt:</span>
              <button
                onClick={() => setSelectedScenario('refactor')}
                className={`px-3 py-1 rounded-lg font-mono text-[11px] transition-all ${
                  selectedScenario === 'refactor'
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold'
                    : 'bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)]'
                }`}
              >
                1. System Refactoring (Technical)
              </button>
              <button
                onClick={() => setSelectedScenario('conflict')}
                className={`px-3 py-1 rounded-lg font-mono text-[11px] transition-all ${
                  selectedScenario === 'conflict'
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold'
                    : 'bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)]'
                }`}
              >
                2. Prioritization Under Pressure (Behavioral)
              </button>
            </div>

            {/* Simulated Interaction Card */}
            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-[var(--text-primary)]">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0 font-bold text-[11px]">
                  ZB
                </div>
                <div>
                  <span className="font-bold font-outfit block text-[var(--accent)]">
                    Master Zen Bodhi asks:
                  </span>
                  <p className="italic text-[var(--text-secondary)] mt-0.5">
                    {selectedScenario === 'refactor'
                      ? '"Walk me through an architectural refactoring challenge where you improved performance under real user traffic."'
                      : '"How do you maintain composure and executive clarity when product deadlines shift unexpectedly?"'}
                  </p>
                </div>
              </div>

              {/* Real-Time STAR Diagnosis Matrix */}
              <div className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono pb-1 border-b border-[var(--border)]">
                  <span className="text-emerald-500 font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> STAR Framework Diagnosis
                  </span>
                  <span className="px-2 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                    98% Clarity Score
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono text-center">
                  <div className="p-1.5 rounded bg-[var(--surface-elevated)] border border-[var(--border)]">
                    <span className="text-[var(--text-tertiary)] block">Situation</span>
                    <span className="text-emerald-400 font-bold">Identified</span>
                  </div>
                  <div className="p-1.5 rounded bg-[var(--surface-elevated)] border border-[var(--border)]">
                    <span className="text-[var(--text-tertiary)] block">Task</span>
                    <span className="text-emerald-400 font-bold">Clear Scope</span>
                  </div>
                  <div className="p-1.5 rounded bg-[var(--surface-elevated)] border border-[var(--border)]">
                    <span className="text-[var(--text-tertiary)] block">Action</span>
                    <span className="text-emerald-400 font-bold">Active Agency</span>
                  </div>
                  <div className="p-1.5 rounded bg-[var(--surface-elevated)] border border-[var(--border)]">
                    <span className="text-[var(--text-tertiary)] block">Result</span>
                    <span className="text-emerald-400 font-bold">Quantified</span>
                  </div>
                </div>
              </div>

              {/* 60-Sec Anxiety Reset Feature Simulation */}
              <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span className="text-xs font-mono text-[var(--text-secondary)]">
                    4-7-8 Breathing Pacer:
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-rose-500/10 text-rose-400 font-bold">
                    {isBreathingActive ? breathPhase : 'Ready'}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setIsBreathingActive(true);
                    setBreathPhase('Inhale (4s)');
                    setTimeout(() => setBreathPhase('Hold (7s)'), 1500);
                    setTimeout(() => setBreathPhase('Exhale (8s)'), 3000);
                    setTimeout(() => setIsBreathingActive(false), 4500);
                  }}
                  className="px-3 py-1 rounded-lg bg-[var(--surface)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] border border-[var(--border)] font-mono text-[11px] transition-all cursor-pointer"
                >
                  {isBreathingActive ? 'Pacing Breath...' : 'Test 60-Sec Reset'}
                </button>
              </div>
            </div>
          </div>
        );

      case 'cake-and-crumb':
        return (
          <div className="space-y-4 font-sans text-xs">
            {/* Live Recorded Customizer Walkthrough GIF */}
            {project.demoGif && (
              <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface-elevated)] p-3 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5 font-bold text-amber-500">
                    <Video className="w-3.5 h-3.5" />
                    Live Recorded Customizer Flow (Real App Screen)
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-500 dark:text-amber-400 font-bold border border-amber-500/30">
                    5-10s Looping Demo
                  </span>
                </div>
                <div className="rounded-lg overflow-hidden border border-[var(--border)] bg-black/40 shadow-inner">
                  <img
                    src={project.demoGif}
                    alt="Cake & Crumbs customizer live recording"
                    className="w-full max-h-60 object-cover object-top"
                  />
                </div>
                <p className="text-[11px] font-mono text-[var(--text-tertiary)] italic">
                  Looping preview: Design custom flow, flavor toggle, tier recalculation, basket drawer slide-out, and WhatsApp checkout generation.
                </p>
              </div>
            )}

            {/* Customizer Simulation */}
            <div className="p-3.5 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-mono font-bold text-amber-600 dark:text-amber-400">
                  INTERACTIVE CAKE CUSTOMIZER & PRICING ENGINE
                </span>
              </div>
              <span className="text-[11px] font-mono font-bold text-amber-500">
                Live Total: ₹{getCakePrice()}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Layer 1: Sponge */}
              <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] space-y-1.5">
                <span className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase block font-bold">
                  1. Sponge Flavor
                </span>
                {['Red Velvet', 'Belgian Chocolate', 'Matcha Green Tea'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setCakeSponge(s)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      cakeSponge === s
                        ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-2xs'
                        : 'hover:bg-[var(--surface)] text-[var(--text-secondary)]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Layer 2: Frosting */}
              <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] space-y-1.5">
                <span className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase block font-bold">
                  2. Frosting Glaze
                </span>
                {['Cream Cheese', 'Salted Caramel', 'Dark Ganache'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setCakeFrosting(f)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      cakeFrosting === f
                        ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-2xs'
                        : 'hover:bg-[var(--surface)] text-[var(--text-secondary)]'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Layer 3: Toppings */}
              <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] space-y-1.5">
                <span className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase block font-bold">
                  3. Bespoke Topping
                </span>
                {['Fresh Berries', 'Edible 24K Gold', 'French Macarons'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setCakeTopping(t)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      cakeTopping === t
                        ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-2xs'
                        : 'hover:bg-[var(--surface)] text-[var(--text-secondary)]'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Generated WhatsApp Checkout Payload */}
            <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-emerald-500 font-semibold flex items-center gap-1">
                  <Send className="w-3 h-3" /> WhatsApp Business API Payload
                </span>
                <span className="text-[10px] text-[var(--text-tertiary)]">Auto-encoded URI</span>
              </div>
              <div className="p-2 rounded-lg bg-[var(--surface-sunken)] font-mono text-[10px] text-[var(--text-secondary)] break-all border border-[var(--border)]">
                {`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
                  `🍰 New Order: ${cakeSponge} Sponge with ${cakeFrosting} & ${cakeTopping}. Inscription: "${customMsg}". Total: ₹${getCakePrice()}`
                )}`}
              </div>
            </div>
          </div>
        );

      case 'vektor-cloud':
        return (
          <div className="space-y-4 font-sans text-xs">
            {/* Header info */}
            <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono font-bold text-cyan-400">
                  NEURAL TELEMETRY COMMAND SURFACE · LIVE METRICS
                </span>
              </div>
              <button
                onClick={handleSimulateTraffic}
                disabled={isSimulatingTraffic}
                className="px-2.5 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-black font-mono text-[10px] font-bold transition-all flex items-center gap-1 cursor-pointer"
              >
                <Activity className={`w-3 h-3 ${isSimulatingTraffic ? 'animate-spin' : ''}`} />
                <span>Simulate Ingress</span>
              </button>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-3 gap-2 text-center font-mono">
              <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)]">
                <span className="text-[10px] text-[var(--text-tertiary)] block">SLA Availability</span>
                <span className="text-lg font-bold text-emerald-400">99.999%</span>
              </div>
              <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)]">
                <span className="text-[10px] text-[var(--text-tertiary)] block">Routing Latency (p99)</span>
                <span className="text-lg font-bold text-cyan-400">{pingSpeed}ms</span>
              </div>
              <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)]">
                <span className="text-[10px] text-[var(--text-tertiary)] block">Threats Blocked</span>
                <span className="text-lg font-bold text-amber-400">{threatCount.toLocaleString()}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] text-xs text-[var(--text-secondary)] flex items-center justify-between">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>SOC2 Type II & FedRAMP Ready Compliance Engine</span>
              </span>
              <span className="text-emerald-400 font-mono text-[11px] font-bold">100% OPERATIONAL</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] text-center space-y-3 font-mono text-xs">
            <Sparkles className="w-8 h-8 text-[var(--accent)] mx-auto" />
            <p className="text-[var(--text-primary)] font-semibold">
              Live Cloud Deployment Ready
            </p>
            <p className="text-[var(--text-secondary)] text-[11px]">
              This project is deployed live on high-availability infrastructure with SSL encryption and full API connectivity.
            </p>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-bold text-xs hover:scale-105 transition-transform"
            >
              <span>Test Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[var(--surface)] rounded-2xl shadow-2xl border border-[var(--border)] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 pb-3 border-b border-[var(--border)] flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--border)]">
                {project.category.toUpperCase()}
              </span>
              <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-500 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                Live Production
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-outfit text-[var(--text-primary)]">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-[var(--text-secondary)] mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs (Overview vs Interactive Live Demo) */}
        <div className="px-6 pt-3 pb-1 border-b border-[var(--border)] bg-[var(--surface-elevated)] flex items-center gap-2 select-none">
          <button
            onClick={() => setModalTab('overview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              modalTab === 'overview'
                ? 'bg-[var(--surface)] text-[var(--accent)] font-bold shadow-2xs border border-[var(--border)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Specifications & Architecture</span>
          </button>

          <button
            onClick={() => setModalTab('demo')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              modalTab === 'demo'
                ? 'bg-[var(--surface)] text-[var(--accent)] font-bold shadow-2xs border border-[var(--border)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Demo & Workflow</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-[var(--text-secondary)]">
          {modalTab === 'demo' ? (
            renderInteractiveDemo()
          ) : (
            <>
              {/* Media Stage: Looping Demo GIF or High-Res Screenshot */}
              {project.demoGif ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] text-[11px] font-mono">
                      <button
                        onClick={() => setOverviewMedia('demoGif')}
                        className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                          overviewMedia === 'demoGif'
                            ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-xs'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        <Video className="w-3 h-3" />
                        <span>Looping Demo GIF</span>
                      </button>
                      <button
                        onClick={() => setOverviewMedia('screenshot')}
                        className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                          overviewMedia === 'screenshot'
                            ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-xs'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        <ImageIcon className="w-3 h-3" />
                        <span>Static Screenshot</span>
                      </button>
                    </div>

                    <span className="text-[10px] font-mono font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      5–10s Interaction Tour
                    </span>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-[var(--border)] shadow-md bg-[var(--surface-sunken)] relative group">
                    <img
                      src={overviewMedia === 'demoGif' ? project.demoGif : project.image}
                      alt={`${project.title} ${overviewMedia === 'demoGif' ? 'animated walkthrough' : 'live screenshot'}`}
                      className="w-full max-h-72 object-cover object-top"
                    />
                    {overviewMedia === 'demoGif' && (
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white flex items-center gap-1.5 shadow-md">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="font-bold tracking-wide">REC · LOOPING DEMO</span>
                      </div>
                    )}
                  </div>
                  {overviewMedia === 'demoGif' && project.demoGifCaption && (
                    <p className="text-[11px] font-mono text-[var(--text-tertiary)] italic px-1">
                      {project.demoGifCaption}
                    </p>
                  )}
                </div>
              ) : (
                project.image && (
                  <div className="rounded-xl overflow-hidden border border-[var(--border)] shadow-md bg-[var(--surface-sunken)]">
                    <img
                      src={project.image}
                      alt={`${project.title} live screenshot`}
                      className="w-full max-h-64 object-cover object-top"
                    />
                  </div>
                )
              )}

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-1.5 font-bold">
                  Project Overview
                </h4>
                <p className="leading-relaxed text-[var(--text-primary)] text-xs sm:text-sm">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {project.metrics && (
                <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center gap-3">
                  <Cpu className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-[var(--text-tertiary)] block">
                      Performance & Impact
                    </span>
                    <span className="font-semibold text-[var(--text-primary)] text-xs">
                      {project.metrics}
                    </span>
                  </div>
                </div>
              )}

              {project.architecture && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-2 font-bold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> System Architecture
                  </h4>
                  <ul className="space-y-1.5 pl-1">
                    {project.architecture.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.highlights && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-2 font-bold">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] text-xs flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-2 font-bold">
                  Technologies & Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer Links */}
        <div className="p-4 sm:p-5 pt-3 bg-[var(--surface-elevated)] border-t border-[var(--border)] flex items-center justify-between gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border)] hover:bg-[var(--surface-sunken)] text-xs font-mono transition-all"
          >
            <Github className="w-4 h-4" />
            <span>View Source Code</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-mono font-bold transition-all shadow-xs hover:scale-[1.02]"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Launch Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};
