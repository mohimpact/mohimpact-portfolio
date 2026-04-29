import React from 'react';
import { Link } from 'react-router-dom';

const FintechAnalytics = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-[#646cff] hover:underline mb-8 inline-block">
          ← Back to Portfolio
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Fintech Behavior Analytics</h1>
          <p className="text-xl text-gray-400">Data pipeline & user behavior analysis</p>
        </header>

        <section className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#646cff]">Project Overview</h2>
          <p className="leading-relaxed">
            I built an end-to-end pipeline to analyze how users interact with fintech platforms.
            The goal was to identify drop-off points in the transaction funnel and optimize
            data storage using Parquet for high-speed analysis.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Core Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'PostgreSQL', 'Airflow', 'Parquet', 'React'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-800 rounded-full text-sm border border-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Key Results</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>60% reduction in data storage size</li>
              <li>Automated daily behavior reports</li>
              <li>Identified 15% user drop-off in 'KYC' stage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FintechAnalytics;