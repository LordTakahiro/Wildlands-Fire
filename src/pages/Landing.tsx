import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  Radio, 
  Mountain, 
  Zap, 
  Target, 
  ArrowRight,
  AlertTriangle,
  Wind,
  Thermometer,
  Eye,
  Users,
  Clock
} from 'lucide-react';

const Landing: React.FC = () => {
  const [currentFireDanger, setCurrentFireDanger] = useState(3);
  const [activeIncidents, setActiveIncidents] = useState(12);
  const [deployedCrews, setDeployedCrews] = useState(47);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIncidents(prev => prev + Math.floor(Math.random() * 3) - 1);
      setDeployedCrews(prev => Math.max(20, prev + Math.floor(Math.random() * 5) - 2));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const assignmentCategories = [
    {
      icon: <Flame className="h-12 w-12" />,
      title: 'Hotshot Crews',
      subtitle: 'Elite rapid response teams',
      description: 'Join the most elite wildland firefighting units',
      positions: 23,
      color: 'from-red-600 to-orange-500'
    },
    {
      icon: <div className="text-4xl">🚁</div>,
      title: 'Helitack Operations',
      subtitle: 'Helicopter-based initial attack',
      description: 'Aerial firefighting and rappel operations',
      positions: 8,
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: <div className="text-4xl">🪂</div>,
      title: 'Smokejumpers',
      subtitle: 'Parachute firefighters',
      description: 'Elite airborne rapid deployment units',
      positions: 4,
      color: 'from-purple-600 to-pink-500'
    },
    {
      icon: <div className="text-4xl">🚒</div>,
      title: 'Engine Companies',
      subtitle: 'Mobile suppression units',
      description: 'Initial attack and structure protection',
      positions: 31,
      color: 'from-green-600 to-emerald-500'
    },
    {
      icon: <Mountain className="h-12 w-12" />,
      title: 'Hand Crews',
      subtitle: 'Ground-based firefighting teams',
      description: 'Tactical ground operations and containment',
      positions: 19,
      color: 'from-amber-600 to-yellow-500'
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: 'Prevention Specialists',
      subtitle: 'Fire education and inspection',
      description: 'Community protection and risk reduction',
      positions: 12,
      color: 'from-teal-600 to-green-500'
    }
  ];

  const currentStats = [
    {
      label: 'Acres Protected This Season',
      value: '2.1M',
      icon: <Mountain className="h-6 w-6" />,
      trend: '+12%'
    },
    {
      label: 'Certified Firefighters Deployed',
      value: '450+',
      icon: <Users className="h-6 w-6" />,
      trend: '+8%'
    },
    {
      label: 'Active Fire Agencies',
      value: '18',
      icon: <Radio className="h-6 w-6" />,
      trend: '+3'
    },
    {
      label: 'Average Response Time',
      value: '12 min',
      icon: <Clock className="h-6 w-6" />,
      trend: '-2 min'
    }
  ];

  const testimonials = [
    {
      name: 'Jake Morrison',
      role: 'Hotshot Crew Boss',
      incident: 'York Fire 2023',
      content: 'Found my crew boss position during active fire season. The platform connected me directly with incident command.',
      certification: 'FFT1, ICT5'
    },
    {
      name: 'Maria Santos',
      role: 'Helitack Crew Member',
      incident: 'Fairview Fire 2023',
      content: 'Deployed with Helitack 47 within 48 hours of applying. Real assignments, real fast.',
      certification: 'HECM, HEQB'
    },
    {
      name: 'David Chen',
      role: 'Engine Operator',
      incident: 'Radford Meadows Fire',
      content: 'Connected with Engine 2847 for my first Type 1 assignment. Platform knows the fire service.',
      certification: 'ENGB, STEN'
    }
  ];

  const getDangerLevel = (level: number) => {
    const levels = ['Low', 'Moderate', 'High', 'Very High', 'Extreme'];
    const colors = ['green', 'yellow', 'orange', 'red', 'purple'];
    return { text: levels[level - 1], color: colors[level - 1] };
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Command Center Hero */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/9816661/pexels-photo-9816661.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-red-600 p-3 rounded-lg mr-4">
                  <Flame className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold">
                    Deploy Your Career
                  </h1>
                  <p className="text-xl text-orange-400 font-semibold">
                    Elite Wildland Firefighting Assignments
                  </p>
                </div>
              </div>
              
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Access exclusive assignments with Type 1 crews, hotshot teams, and specialized units. 
                Real positions. Real incidents. Real firefighters.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-orange-600 transition-all inline-flex items-center justify-center shadow-lg"
                >
                  <Radio className="mr-2 h-5 w-5" />
                  Request Assignment
                </Link>
                <Link
                  to="/login"
                  className="border-2 border-orange-500 text-orange-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all"
                >
                  Crew Login
                </Link>
              </div>
            </div>

            {/* Real-time Fire Activity Dashboard */}
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                Current Fire Activity
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Fire Danger</span>
                    <span className={`px-2 py-1 rounded text-sm font-bold bg-${getDangerLevel(currentFireDanger).color}-600`}>
                      PL {currentFireDanger}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white mt-1">
                    {getDangerLevel(currentFireDanger).text}
                  </div>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Active Incidents</span>
                    <Flame className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="text-2xl font-bold text-white mt-1">
                    {activeIncidents}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Crews Deployed</span>
                  <span className="text-orange-400 font-bold">{deployedCrews}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Red Flag Warning</span>
                  <span className="text-red-400 font-bold">ACTIVE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Available Positions</span>
                  <span className="text-green-400 font-bold">97</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assignment Categories */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Current Assignment Opportunities
            </h2>
            <p className="text-xl text-gray-300">
              Elite positions with certified agencies across the fire service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assignmentCategories.map((category, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300 cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-orange-400 mr-4">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      <p className="text-orange-400 text-sm font-medium">{category.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">{category.positions}</span>
                    <span className="text-gray-400 text-sm">open positions</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers - Fire Service Stats */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-gray-300">
              Real impact in wildland fire suppression and protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentStats.map((stat, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-orange-400">
                    {stat.icon}
                  </div>
                  <span className="text-green-400 text-sm font-medium">{stat.trend}</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Firefighter Testimonials */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From the Fireline
            </h2>
            <p className="text-xl text-gray-300">
              Real firefighters. Real assignments. Real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <Flame className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-orange-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">{testimonial.incident}</span>
                  <span className="text-orange-400 font-mono">{testimonial.certification}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Certification Tracker Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Track Your Readiness
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Monitor certifications, equipment qualifications, and deployment readiness. 
                Stay current with NWCG standards and agency requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                  <span className="text-white">Red Card Certification</span>
                  <span className="text-green-400 font-bold">CURRENT</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                  <span className="text-white">Physical Fitness Test</span>
                  <span className="text-yellow-400 font-bold">DUE 30 DAYS</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                  <span className="text-white">Chainsaw Certification</span>
                  <span className="text-green-400 font-bold">QUALIFIED</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">Certification Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">S-130/S-190</span>
                    <span className="text-green-400">100%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">L-180</span>
                    <span className="text-yellow-400">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">FFT1</span>
                    <span className="text-orange-400">45%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full w-2/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Deployment?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the elite network of wildland firefighters. Access assignments that match your 
            certifications and advance your fire service career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              <Target className="mr-2 h-5 w-5" />
              Request Assignment
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;