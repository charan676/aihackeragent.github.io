import React, { useState } from 'react';
import { Shield, ArrowLeft, CheckCircle2, AlertTriangle, Loader2, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const ScanPage = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsScanning(true);
    setScanResult(null);
    setErrorMsg('');

    fetch('http://localhost:3001/api/scan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok || data.status === 'error') {
          throw new Error(data.message || 'Something went wrong');
        }
        return data;
      })
      .then(data => {
        setScanResult(data);
        setIsScanning(false);
      })
      .catch(err => {
        console.error(err);
        setErrorMsg(err.message);
        setIsScanning(false);
      });
  };

  return (
    <div className="min-h-screen bg-cyber-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-cyber-cyan hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-4">
          <Shield className="w-10 h-10 text-cyber-cyan" /> 
          Active Vulnerability Scan
        </h1>

        {/* Target Input Form */}
        {!isScanning && !scanResult && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-cyber-gray p-8 rounded-xl border border-cyber-cyan/30"
          >
            <h2 className="text-2xl font-bold mb-4">Select Target URL</h2>
            <p className="text-gray-400 mb-6">Enter the URL of the target system you'd like the AI Agent to inspect.</p>
            
            {errorMsg && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-400">{errorMsg}</p>
              </div>
            )}

            <form onSubmit={handleScan} className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input 
                  type="url" 
                  name="url"
                  required
                  placeholder="https://vulnerable-site.com"
                  className="w-full bg-cyber-black border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyber-cyan transition-colors"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <button 
                type="submit"
                className="px-8 py-4 bg-cyber-cyan text-cyber-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all"
              >
                Launch Scan
              </button>
            </form>
          </motion.div>
        )}

        {/* Loading State */}
        {isScanning && (
          <div className="bg-cyber-gray p-12 rounded-xl border border-cyber-cyan/30 flex flex-col items-center justify-center text-center">
            <Loader2 className="w-16 h-16 text-cyber-cyan animate-spin mb-6" />
            <h2 className="text-2xl font-bold text-white mb-2">Engaging Target...</h2>
            <p className="text-gray-400">The AI Hack Agent is mapping endpoints and testing vectors on <strong className="text-white">{url}</strong>.</p>
          </div>
        )}

        {/* Results view */}
        {scanResult && !isScanning && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <button
              onClick={() => { setScanResult(null); setUrl(''); }}
              className="text-sm font-medium text-gray-400 hover:text-cyber-cyan border border-white/10 hover:border-cyber-cyan/30 px-4 py-2 rounded-lg transition-all mb-4"
            >
              ← Scan Another Target
            </button>
            
            <div className="bg-cyber-gray p-6 rounded-xl border border-cyber-cyan/30">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-8 h-8 text-cyber-green" />
                <h2 className="text-2xl font-bold">{scanResult?.message || "Scan Completed"}</h2>
              </div>
              <div className="text-gray-400 space-y-2 mb-6">
                <p><strong className="text-white">Target:</strong> {scanResult?.target}</p>
                <p><strong className="text-white">Vulnerabilities Found:</strong> {scanResult?.vulnerabilities_found}</p>
                <p><strong className="text-white">Status:</strong> {scanResult?.status}</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Vulnerability Details</h3>
            <div className="grid gap-4">
              {scanResult?.details?.map((vuln: any, idx: number) => (
                <div key={idx} className="bg-white/5 border border-red-500/30 p-5 rounded-lg flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-red-500">{vuln.type}</h4>
                    <p className="text-gray-400 text-sm mt-1">Severity: <span className="text-white font-bold">{vuln.severity}</span></p>
                    <p className="text-gray-400 text-sm mt-1 font-mono">Path: {vuln.path}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ScanPage;
