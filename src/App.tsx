import React from 'react';
import { Github, Linkedin, Mail, Server, Database, Cloud, Terminal, GitBranch, Monitor } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-700 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">John Smith</h1>
          <h2 className="text-2xl mb-6 text-blue-100">Senior DevOps Engineer</h2>
          <p className="text-xl text-blue-200">Automating, optimizing, and securing cloud infrastructure</p>
        </div>
      </header>

      {/* Current Position */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-slate-800">Current Position</h2>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg shadow-lg border border-slate-100">
            <h3 className="text-xl font-semibold text-indigo-700">Lead DevOps Engineer</h3>
            <p className="text-slate-600 mt-2">Tech Solutions Inc. | 2021 - Present</p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Leading cloud infrastructure optimization resulting in 30% cost reduction</li>
              <li>• Implementing CI/CD pipelines for 50+ microservices</li>
              <li>• Managing Kubernetes clusters across multiple cloud providers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-slate-800">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-100 hover:border-indigo-200 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Cloud className="text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-800">Cloud Platforms</h3>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li>• AWS (Certified Solutions Architect)</li>
                <li>• Google Cloud Platform</li>
                <li>• Azure</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-100 hover:border-indigo-200 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Server className="text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-800">Infrastructure</h3>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li>• Kubernetes</li>
                <li>• Docker</li>
                <li>• Terraform</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-100 hover:border-indigo-200 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Terminal className="text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-800">Automation</h3>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li>• Jenkins</li>
                <li>• GitHub Actions</li>
                <li>• Ansible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-slate-800">Education</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg shadow-lg border border-slate-100">
              <h3 className="text-xl font-semibold text-indigo-700">Master of Science in Computer Science</h3>
              <p className="text-slate-600">Stanford University | 2018 - 2020</p>
              <p className="mt-2 text-slate-700">Specialization in Distributed Systems</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg shadow-lg border border-slate-100">
              <h3 className="text-xl font-semibold text-indigo-700">Bachelor of Engineering in Software Engineering</h3>
              <p className="text-slate-600">MIT | 2014 - 2018</p>
              <p className="mt-2 text-slate-700">Minor in Cloud Computing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-slate-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-100 hover:border-indigo-200 transition-all duration-300">
              <div className="flex items-center mb-4">
                <GitBranch className="text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-800">Cloud Cost Optimizer</h3>
              </div>
              <p className="text-slate-700 mb-4">Developed an automated system that analyzes and optimizes cloud resource usage, resulting in 40% cost savings.</p>
              <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">View Project →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-100 hover:border-indigo-200 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Monitor className="text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-800">Multi-Cloud Monitoring</h3>
              </div>
              <p className="text-slate-700 mb-4">Built a unified monitoring solution for multi-cloud environments using Prometheus and Grafana.</p>
              <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">View Project →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-slate-800">Get in Touch</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="mailto:john.smith@example.com" className="flex items-center text-slate-700 hover:text-indigo-600 transition-colors duration-300">
              <Mail className="mr-2" />
              john.smith@example.com
            </a>
            <a href="https://github.com/johnsmith" className="flex items-center text-slate-700 hover:text-indigo-600 transition-colors duration-300">
              <Github className="mr-2" />
              GitHub Profile
            </a>
            <a href="https://linkedin.com/in/johnsmith" className="flex items-center text-slate-700 hover:text-indigo-600 transition-colors duration-300">
              <Linkedin className="mr-2" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 John Smith. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;