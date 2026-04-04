/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ScanPage from './pages/ScanPage';
import DocsPage from './pages/DocsPage';
import {
  Shield,
  Terminal,
  Cpu,
  Workflow,
  Zap,
  Lock,
  AlertTriangle,
  Mail,
  Github,
  ExternalLink,
  ChevronRight,
  Search,
  CheckCircle2,
  Database,
  Code,
  Activity,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Components', href: '#components' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'Ethics', href: '#ethics' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cyber-black/80 backdrop-blur-md border-b border-cyber-cyan/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-1.5 bg-cyber-cyan/10 rounded-lg border border-cyber-cyan/30 group-hover:border-cyber-cyan transition-colors">
            <Shield className="w-6 h-6 text-cyber-cyan" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            AI<span className="text-cyber-cyan">Hacker</span>Agent
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-cyber-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-gray border-b border-cyber-cyan/20 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-400 hover:text-cyber-cyan"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-bold uppercase tracking-widest mb-6">
            Next-Gen Vulnerability Scanning
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            Building an <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">AI Hacker Agent</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
            Automate your security workflow with an autonomous AI agent.
            Leveraging local LLMs and professional tools to detect vulnerabilities with zero API costs and total privacy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/scan" className="w-full sm:w-auto px-8 py-4 bg-cyber-cyan text-cyber-black font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all">
              Start Scan <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/docs" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all flex justify-center items-center">
              View Documentation
            </Link>
          </div>
        </motion.div>

        {/* Terminal Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 max-w-4xl mx-auto relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-xl blur opacity-30" />
          <div className="relative bg-cyber-gray rounded-xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="bg-black/40 px-4 py-2 flex items-center gap-2 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs text-gray-500 font-mono ml-2">ai-agent@kali: ~</span>
            </div>
            <div className="p-6 text-left font-mono text-sm leading-relaxed">
              <div className="flex gap-2">
                <span className="text-cyber-green">$</span>
                <span className="text-white">agent --target https://vulnerable-site.com --scan sql-injection</span>
              </div>
              <div className="mt-2 text-cyber-cyan">[INFO] Initializing AI Agent with Llama 3.2...</div>
              <div className="text-cyber-cyan">[INFO] Loading MCP Server for Kali Linux Tools...</div>
              <div className="text-gray-400 mt-2">Analyzing target structure...</div>
              <div className="text-gray-400">Executing katana for endpoint discovery...</div>
              <div className="text-gray-400">Found 12 endpoints. Starting sqlmap analysis...</div>
              <div className="mt-2 text-yellow-500">[WARN] Potential SQL injection point found at /api/users?id=1</div>
              <div className="text-cyber-green mt-2 animate-pulse">Scanning in progress... 65% complete</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-cyber-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why an <span className="text-cyber-cyan">AI Agent</span>?
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Traditional scanners follow rigid patterns. AI agents, powered by Large Language Models, can think, select tools, execute commands, and iterate autonomously. They understand context and can adapt their strategy based on the results they receive.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Autonomous Reasoning', desc: 'The agent decides which tool to use based on the target\'s response.' },
                { title: 'Tool Integration', desc: 'Seamlessly connects with Kali Linux tools via Model Context Protocol.' },
                { title: 'Efficiency', desc: 'Reduces manual work by automating scanning, analysis, and reporting.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-cyber-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-cyber-cyan/10 to-cyber-purple/10 rounded-3xl border border-white/5 p-8 flex items-center justify-center">
              <Activity className="w-48 h-48 text-cyber-cyan/20 absolute animate-ping" />
              <Shield className="w-48 h-48 text-cyber-cyan relative z-10" />
            </div>
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-cyber-black p-4 rounded-xl border border-cyber-cyan/30 shadow-xl">
              <div className="text-2xl font-bold text-cyber-cyan">98%</div>
              <div className="text-xs text-gray-500">Detection Rate</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-cyber-black p-4 rounded-xl border border-cyber-purple/30 shadow-xl">
              <div className="text-2xl font-bold text-cyber-purple">0ms</div>
              <div className="text-xs text-gray-500">API Latency (Local)</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Components = () => {
  const components = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'N8N',
      desc: 'Workflow automation tool that orchestrates the entire process, connecting the AI to tools.',
      color: 'text-orange-500',
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/30'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Ollama',
      desc: 'Runs local LLMs like Llama 3.2 to ensure privacy and eliminate API costs.',
      color: 'text-cyber-cyan',
      bg: 'bg-cyber-cyan/10',
      border: 'border-cyber-cyan/30'
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: 'MCP',
      desc: 'Model Context Protocol allows the AI agent to execute terminal commands securely.',
      color: 'text-cyber-purple',
      bg: 'bg-cyber-purple/10',
      border: 'border-cyber-purple/30'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Kali Linux Tools',
      desc: 'Professional tools like sqlmap and katana used for deep vulnerability scanning.',
      color: 'text-cyber-green',
      bg: 'bg-cyber-green/10',
      border: 'border-cyber-green/30'
    }
  ];

  return (
    <section id="components" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Components</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The engine behind the AI Hacker Agent is a stack of powerful, open-source technologies.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {components.map((comp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 rounded-2xl bg-cyber-gray border ${comp.border} hover:scale-105 transition-transform cursor-default group`}
            >
              <div className={`w-14 h-14 rounded-xl ${comp.bg} flex items-center justify-center ${comp.color} mb-6 group-hover:scale-110 transition-transform`}>
                {comp.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{comp.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{comp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkflowSection = () => {
  const steps = [
    { title: 'Input Target', desc: 'User provides a target URL and scanning parameters.' },
    { title: 'AI Reasoning', desc: 'Agent analyzes the target and selects appropriate tools.' },
    { title: 'MCP Execution', desc: 'Securely executes Kali tools via terminal commands.' },
    { title: 'Data Analysis', desc: 'AI analyzes tool output for potential vulnerabilities.' },
    { title: 'Report Generation', desc: 'Generates a detailed report with remediation steps.' }
  ];

  return (
    <section id="workflow" className="py-24 bg-cyber-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Workflow</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A seamless automated pipeline from discovery to reporting.
          </p>
        </div>
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyber-cyan/10 via-cyber-cyan/50 to-cyber-cyan/10 -translate-y-1/2" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative z-10 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-cyber-black border-2 border-cyber-cyan flex items-center justify-center text-cyber-cyan font-bold mx-auto mb-6 shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                  {i + 1}
                </div>
                <h4 className="font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Zap />, title: 'Automated Scanning', desc: 'One-click vulnerability detection across multiple vectors.' },
    { icon: <Search />, title: 'AI-Based Analysis', desc: 'Context-aware interpretation of scanner results.' },
    { icon: <Database />, title: 'SQLi Detection', desc: 'Advanced detection of blind and error-based SQL injections.' },
    { icon: <Code />, title: 'Report Generation', desc: 'Professional reports with technical details and fixes.' },
    { icon: <Lock />, title: 'Local Execution', desc: 'All processing happens on your machine for maximum privacy.' },
    { icon: <Activity />, title: 'Real-time Monitoring', desc: 'Watch the agent think and act in real-time.' }
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need for modern, AI-driven security auditing.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-cyan/50 transition-all"
            >
              <div className="text-cyber-cyan mb-4">{feature.icon}</div>
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Demo = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsScanning(true);
    setProgress(0);
    setLogs(['[INFO] Initializing scan for ' + url]);

    const scanSteps = [
      { p: 10, l: '[INFO] Connecting to Ollama (Llama 3.2)...' },
      { p: 25, l: '[INFO] Launching Katana for endpoint discovery...' },
      { p: 40, l: '[INFO] Found 8 endpoints. Analyzing parameters...' },
      { p: 60, l: '[INFO] Executing sqlmap on potential vectors...' },
      { p: 85, l: '[WARN] Potential vulnerability found at /api/v1/search' },
      { p: 100, l: '[SUCCESS] Scan complete. Report generated.' }
    ];

    scanSteps.forEach((step, i) => {
      setTimeout(() => {
        setProgress(step.p);
        setLogs(prev => [...prev, step.l]);
        if (i === scanSteps.length - 1) {
          setTimeout(() => setIsScanning(false), 1000);
        }
      }, (i + 1) * 1000);
    });
  };

  return (
    <section id="demo" className="py-24 bg-cyber-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the <span className="text-cyber-cyan">Demo</span></h2>
            <p className="text-lg text-gray-400 mb-8">
              Try our simulated interface. Enter a target URL to see how the AI Hacker Agent orchestrates tools and analyzes results.
            </p>
            <form onSubmit={handleScan} className="space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="https://example.com"
                  className="w-full bg-cyber-black border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyber-cyan transition-colors"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isScanning}
                />
              </div>
              <button
                type="submit"
                disabled={isScanning || !url}
                className="w-full py-4 bg-cyber-cyan text-cyber-black font-bold rounded-lg disabled:opacity-50 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all"
              >
                {isScanning ? 'Scanning...' : 'Run Vulnerability Scan'}
              </button>
            </form>
          </div>

          <div className="bg-cyber-black rounded-2xl border border-white/10 overflow-hidden shadow-2xl min-h-[400px] flex flex-col">
            <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyber-cyan" />
                <span className="text-xs font-mono text-gray-400">Agent Output</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="flex-1 p-6 font-mono text-xs overflow-y-auto space-y-2">
              {logs.length === 0 ? (
                <div className="text-gray-600 italic">Waiting for target input...</div>
              ) : (
                logs.map((log, i) => (
                  <div key={i} className={log.includes('[WARN]') ? 'text-yellow-500' : log.includes('[SUCCESS]') ? 'text-cyber-green' : 'text-gray-400'}>
                    {log}
                  </div>
                ))
              )}
              {isScanning && (
                <div className="mt-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-cyber-cyan">Progress</span>
                    <span className="text-cyber-cyan">{progress}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1.5">
                    <motion.div
                      className="bg-cyber-cyan h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Ethics = () => {
  return (
    <section id="ethics" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <AlertTriangle className="w-48 h-48 text-red-500" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 text-red-500 mb-6">
              <AlertTriangle className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Ethical Use Policy</h2>
            </div>
            <p className="text-lg text-gray-400 mb-8">
              This tool is designed for educational purposes and authorized security testing only. Unauthorized scanning of systems is illegal and unethical.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Use only on authorized systems',
                'Practice on platforms like Hack The Box',
                'Never perform unauthorized scanning',
                'Keep MCP server restricted to localhost'
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="mt-1 w-5 h-5 rounded bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-sm text-gray-400">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzUZUwMfqdom-b9vp0cOWiEUkrFK1ErjrEMONyaLDNLHfwJ0_I9d3NGDaTmuL2aD3ep/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('Sending...');

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          targetUrl: window.location.href,
          message: formData.message,
        }),
      });

      setStatusMessage("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatusMessage("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-cyber-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interested in the project or want to collaborate? Reach out to us.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-cyber-black border border-white/10 rounded-lg p-3 focus:outline-none focus:border-cyber-cyan"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-cyber-black border border-white/10 rounded-lg p-3 focus:outline-none focus:border-cyber-cyan"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Message</label>
              <textarea
                rows={4}
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-cyber-black border border-white/10 rounded-lg p-3 focus:outline-none focus:border-cyber-cyan"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-cyber-cyan text-cyber-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Sending Data...' : 'Send Message'}
            </button>

            {statusMessage && (
              <p className={`text-center font-medium ${statusMessage.includes('Oops') ? 'text-red-500' : 'text-cyber-green'}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-cyber-cyan" />
            <span className="text-xl font-bold text-white">AI<span className="text-cyber-cyan">Hacker</span>Agent</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-cyber-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyber-cyan transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyber-cyan transition-colors">Documentation</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyber-cyan hover:text-cyber-black transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyber-cyan hover:text-cyber-black transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} AI Hacker Agent Project. Built for security research.
        </div>
      </div>
    </footer>
  );
};

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Components />
        <WorkflowSection />
        <Features />
        <Demo />
        <Ethics />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-cyber-cyan/30 selection:text-cyber-cyan">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/scan" element={<ScanPage />} />
        <Route path="/docs" element={<DocsPage />} />
      </Routes>
    </div>
  );
}
