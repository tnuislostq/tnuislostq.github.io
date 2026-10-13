import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  openResume: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose, openResume }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1.5 text-xs">
          <p className="text-cyan-400 font-bold">
            ⚡ Welcome to Tanu Vishwakarma's Interactive CLI (v2.4.0)
          </p>
          <p className="text-gray-400">
            Type <span className="text-amber-300 font-semibold font-mono">help</span> to view available commands, or tap the quick command buttons below.
          </p>
        </div>
      ),
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    setCommandList((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.toLowerCase().split(' ');
    const cmd = parts[0];
    const arg = parts.slice(1).join(' ');

    let outputNode: React.ReactNode;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-gray-300">
            <p className="text-cyan-400 font-semibold mb-1">Available commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              <div><span className="text-amber-300 font-bold">about</span> - Background & engineering summary</div>
              <div><span className="text-amber-300 font-bold">projects</span> - View all 10+ live deployed projects</div>
              <div><span className="text-amber-300 font-bold">skills</span> - Full-stack technical capabilities</div>
              <div><span className="text-amber-300 font-bold">certs</span> - AWS & GeeksforGeeks credentials</div>
              <div><span className="text-amber-300 font-bold">contact</span> - Contact info, email & phone</div>
              <div><span className="text-amber-300 font-bold">deploy</span> - GitHub Pages deployment package</div>
              <div><span className="text-amber-300 font-bold">cat resume</span> - View or download PDF resume</div>
              <div><span className="text-amber-300 font-bold">hire</span> - Why you should hire Tanu</div>
              <div><span className="text-amber-300 font-bold">whoami</span> - Identify the current terminal user</div>
              <div><span className="text-amber-300 font-bold">clear</span> - Clear the terminal display</div>
            </div>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="space-y-1 text-xs text-gray-300 font-mono">
            <p className="text-cyan-400 font-semibold">Tanu Vishwakarma — Junior Full-Stack Developer</p>
            <p>🎓 Training: GeeksforGeeks Full-Stack Bootcamp & Self-Driven Engineering</p>
            <p>☁️ Certification: AWS Cloud Practitioner (GeeksforGeeks certified)</p>
            <p className="mt-2 text-gray-400">
              "I build end-to-end full-stack applications connecting React & Next.js to FastAPI, Flask, and Django backends, deployed with live production links on Render and Netlify."
            </p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-cyan-400 font-semibold">Deployed Production Projects ({PROJECTS.length}):</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="p-2 bg-gray-900/60 rounded border border-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-amber-300 font-bold">{p.title}</span>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 underline hover:text-cyan-300"
                  >
                    [Live Demo]
                  </a>
                </div>
                <p className="text-gray-400 text-[11px]">{p.subtitle}</p>
                <p className="text-gray-300 text-[11px] mt-0.5">{p.description}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.2 bg-gray-800 text-gray-300 text-[10px] rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-cyan-400 font-semibold">Engineering Skill Matrix:</p>
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx}>
                <span className="text-amber-300 font-semibold">{cat.category}: </span>
                <span className="text-gray-300">
                  {cat.skills.map((s) => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-cyan-400 font-semibold">Verified Credentials & Certifications:</p>
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="flex items-center justify-between py-0.5">
                <span className="text-gray-200">
                  • <strong className="text-amber-300">{cert.title}</strong> ({cert.issuer})
                </span>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 underline hover:text-cyan-300 text-[11px]"
                >
                  [Verify]
                </a>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-gray-300">
            <p className="text-cyan-400 font-semibold">Get In Touch with Tanu:</p>
            <p>📧 Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 underline">{PERSONAL_INFO.email}</a></p>
            <p>📱 Phone / WhatsApp: <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.phone}</a></p>
            <p>🔗 GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">github.com/tnuislostq</a></p>
            <p>💼 LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case 'deploy':
      case 'github':
        outputNode = (
          <div className="space-y-2 text-xs font-mono text-gray-300">
            <p className="text-emerald-400 font-semibold">🚀 GitHub Pages Production Package Ready:</p>
            <p className="text-gray-400">Target live URL: <span className="text-cyan-400 underline">https://tnuislostq.github.io/</span></p>
            <p>The entire static bundle with all assets and animations has been compiled for your repository.</p>
            <div className="pt-1.5 flex flex-wrap gap-2">
              <a
                href="/portfolio-github-pages.zip"
                download="portfolio-github-pages.zip"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors"
              >
                <span>📦 Download GitHub Pages ZIP (Ready to Push)</span>
              </a>
            </div>
            <p className="text-[11px] text-gray-400 pt-1">
              Extract to your <span className="text-amber-300">tnuislostq.github.io</span> repository folder and run:
              <br />
              <code className="text-cyan-300 bg-black/40 px-1 py-0.5 rounded">git add . &amp;&amp; git commit -m "Update portfolio" &amp;&amp; git push origin main</code>
            </p>
          </div>
        );
        break;

      case 'cat':
        if (arg === 'resume' || arg === 'resume.pdf' || arg === 'resume.txt') {
          outputNode = (
            <div className="space-y-2 text-xs font-mono text-gray-300">
              <p className="text-emerald-400 font-semibold">📄 Tanu Vishwakarma - Resume summary:</p>
              <p>Roles: Junior Full-Stack Developer | Python & React Engineer</p>
              <p>Highlights: 8 deployed web applications, AWS Cloud Practitioner certified, 3 backend frameworks.</p>
              <div className="pt-1">
                <button
                  onClick={() => openResume()}
                  className="px-2.5 py-1 bg-cyan-600 hover:bg-cyan-500 text-white rounded text-[11px] font-sans"
                >
                  Open PDF Resume Viewer
                </button>
              </div>
            </div>
          );
        } else {
          outputNode = <p className="text-red-400 text-xs font-mono">File not found. Try: cat resume</p>;
        }
        break;

      case 'hire':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-gray-300 bg-cyan-950/40 p-2.5 rounded border border-cyan-800">
            <p className="text-cyan-300 font-bold">Why Hire Tanu?</p>
            <p>1. Proof of work: 8 full applications deployed to production, not just mock repos.</p>
            <p>2. Full-stack competency: Fluent in modern React and Python (FastAPI, Django, Flask).</p>
            <p>3. Cloud aware: AWS Cloud Practitioner certified with hands-on deployments.</p>
            <p>4. Fast executor: Self-driven problem solver with high-velocity shipping mindset.</p>
          </div>
        );
        break;

      case 'whoami':
        outputNode = <p className="text-gray-300 text-xs font-mono">guest@recruiter-workstation (Welcome! Tanu is excited to build with you.)</p>;
        break;

      case 'quote':
        outputNode = (
          <p className="text-indigo-300 text-xs italic font-mono">
            "Programs must be written for people to read, and only incidentally for machines to execute." — Harold Abelson
          </p>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'sudo':
        outputNode = <p className="text-red-400 text-xs font-mono">Permission denied: You do not need sudo to hire Tanu!</p>;
        break;

      default:
        outputNode = (
          <p className="text-red-400 text-xs font-mono">
            Command not recognized: <span className="font-bold">{trimmed}</span>. Type <span className="text-cyan-400">help</span> for commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: trimmed, output: outputNode }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length > 0) {
        const nextIdx = historyIndex === -1 ? commandList.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(commandList[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandList.length) {
          setHistoryIndex(nextIdx);
          setInput(commandList[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInput('');
        }
      }
    }
  };

  const quickPills = ['help', 'about', 'projects', 'skills', 'certs', 'deploy', 'cat resume', 'contact'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0d1117] text-gray-200 rounded-xl shadow-2xl border border-gray-800 flex flex-col h-[520px] max-h-[90vh] overflow-hidden">
        {/* Top titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block cursor-pointer hover:opacity-80" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 font-mono text-xs text-gray-400 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              tanu@portfolio: ~ (bash)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setHistory([])}
              className="text-xs font-mono text-gray-400 hover:text-white px-2 py-0.5 rounded bg-gray-800"
            >
              clear
            </button>
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-white rounded hover:bg-gray-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Console output buffer */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs leading-relaxed">
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              {item.command && (
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <span>tanu@portfolio:~$</span>
                  <span className="text-white">{item.command}</span>
                </div>
              )}
              <div className="pl-2">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Suggestion pills */}
        <div className="px-4 py-2 bg-[#12161f] border-t border-gray-800/80 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono scrollbar-none">
          <span className="text-gray-500 whitespace-nowrap">Suggestions:</span>
          {quickPills.map((p) => (
            <button
              key={p}
              onClick={() => handleCommand(p)}
              className="px-2 py-0.5 rounded bg-gray-800 hover:bg-cyan-950 hover:text-cyan-300 text-gray-300 border border-gray-700/60 whitespace-nowrap transition-colors"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Active Command Input Line */}
        <div className="p-3 bg-[#161b22] border-t border-gray-800 flex items-center gap-2">
          <span className="text-cyan-400 font-mono text-xs font-bold whitespace-nowrap">
            tanu@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or any command..."
            className="flex-1 bg-transparent text-white font-mono text-xs outline-none focus:ring-0 placeholder-gray-500"
            autoFocus
          />
          <button
            onClick={() => handleCommand(input)}
            className="p-1.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
            title="Execute"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
