import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Mail, Radio, AlertTriangle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <Flame className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xl font-bold">OC Wildlands Fire Operations</span>
                <div className="text-sm text-orange-400 font-medium">ELITE WILDLAND ASSIGNMENTS</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Connecting certified wildland firefighters with elite assignments across Southern California. 
              Tactical excellence through verified agencies and Type 1 incident operations.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Radio className="h-5 w-5 text-red-500" />
                <span className="text-sm text-gray-300">dispatch@ocwildlands.com</span>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-2 bg-red-900/30 border border-red-800 rounded-lg p-3">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              <span className="text-sm text-red-300 font-medium">EMERGENCY OPERATIONS: 24/7 DISPATCH</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Operations</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Command Center</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Operations Brief</Link></li>
              <li><Link to="/jobs" className="text-gray-300 hover:text-white transition-colors">Current Assignments</Link></li>
              <li><Link to="/subscribe" className="text-gray-300 hover:text-white transition-colors">Crew Certification</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Dispatch Center</Link></li>
              <li><Link to="/safety" className="text-gray-300 hover:text-white transition-colors">Safety Protocols</Link></li>
              <li><Link to="/training" className="text-gray-300 hover:text-white transition-colors">Training Resources</Link></li>
              <li><Link to="/certifications" className="text-gray-300 hover:text-white transition-colors">NWCG Standards</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 OC Wildlands Fire Operations. All rights reserved. | NWCG Certified Platform
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-xs text-green-400 font-mono bg-gray-800 px-2 py-1 rounded">
                OPERATIONAL STATUS: ACTIVE
              </span>
              <span className="text-xs text-orange-400 font-mono bg-gray-800 px-2 py-1 rounded">
                FIRE DANGER: HIGH
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;