import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const DocsPage = () => {
  const [docs, setDocs] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/docs')
      .then(res => res.json())
      .then(data => setDocs(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-cyber-cyan hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </Link>
        
        {!docs ? (
          <div className="animate-pulse">Loading documentation...</div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-cyber-gray p-10 rounded-xl border border-white/10"
          >
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
              <BookOpen className="w-10 h-10 text-cyber-cyan" />
              <h1 className="text-4xl font-bold">{docs.title}</h1>
            </div>
            
            <div className="prose prose-invert max-w-none">
              {docs.content.split('\n').map((line: string, i: number) => {
                if (line.startsWith('### ')) {
                  return <h3 key={i} className="text-2xl font-bold text-cyber-cyan mt-8 mb-4">{line.replace('### ', '')}</h3>;
                } else if (line.startsWith('- **')) {
                  const parts = line.replace('- **', '').split('**:');
                  return (
                    <li key={i} className="mb-2 text-gray-300">
                      <strong className="text-white">{parts[0]}</strong>: {parts[1]}
                    </li>
                  );
                } else if (line.trim() === '') {
                  return <br key={i} />;
                } else {
                  return <p key={i} className="text-gray-400">{line}</p>;
                }
              })}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DocsPage;
