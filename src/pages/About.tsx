import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Radio, 
  Shield, 
  Award,
  ArrowRight,
  Target,
  Flame,
  Mountain,
  Zap,
  AlertTriangle
} from 'lucide-react';

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: 'https://images.pexels.com/photos/9816661/pexels-photo-9816661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      caption: 'Type 1 Hotshot crew conducting tactical operations on the fireline'
    },
    {
      url: 'https://images.pexels.com/photos/9816662/pexels-photo-9816662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      caption: 'Helitack operations supporting initial attack suppression efforts'
    },
    {
      url: 'https://images.pexels.com/photos/9816663/pexels-photo-9816663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      caption: 'Hand crew constructing firebreaks in challenging terrain conditions'
    },
    {
      url: 'https://images.pexels.com/photos/9816664/pexels-photo-9816664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      caption: 'Engine companies responding to structure threat during wildland interface fires'
    },
    {
      url: 'https://images.pexels.com/photos/9816665/pexels-photo-9816665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      caption: 'Prescribed fire operations for fuel reduction and forest health management'
    },
    {
      url: 'https://images.pexels.com/photos/9816666/pexels-photo-9816666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      caption: 'Crew training exercises preparing for fire season deployment'
    }
  ];

  const operationalStats = [
    { number: '2.1M', label: 'Acres Protected', icon: <Mountain className="h-8 w-8" /> },
    { number: '450+', label: 'Firefighters Deployed', icon: <Users className="h-8 w-8" /> },
    { number: '18', label: 'Certified Agencies', icon: <Radio className="h-8 w-8" /> },
    { number: '12 min', label: 'Average Response', icon: <Zap className="h-8 w-8" /> }
  ];

  const commandTeam = [
    {
      name: 'Sarah Martinez',
      role: 'Incident Commander',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      bio: '15 years wildland fire, former CAL FIRE Division Chief',
      certifications: 'ICT1, DIVS, TFLD'
    },
    {
      name: 'Mike Thompson',
      role: 'Operations Section Chief',
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      bio: 'Former USFS Hotshot Superintendent, Type 1 qualified',
      certifications: 'OSC1, SUPT, FFT1'
    },
    {
      name: 'Jessica Chen',
      role: 'Intelligence Officer',
      image: 'https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      bio: 'Fire behavior analyst and GIS specialist',
      certifications: 'INTEL, FBAN, GISS'
    },
    {
      name: 'David Rodriguez',
      role: 'Liaison Officer',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      bio: '20 years coordinating multi-agency fire operations',
      certifications: 'LOFR, COML, COMT'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Command Center Hero */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/9816661/pexels-photo-9816661.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-600 p-4 rounded-lg mr-4">
                <Flame className="h-12 w-12" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Incident Command
                </h1>
                <p className="text-xl md:text-2xl text-orange-400 font-semibold">
                  OC Wildlands Fire Operations
                </p>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
              Elite wildland firefighting assignments connecting certified crews with 
              Type 1 incidents across Southern California fire units
            </p>
          </div>
        </div>
      </div>

      {/* Tactical Operations Carousel */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tactical Operations Documentation
            </h2>
            <p className="text-lg text-gray-300">
              Real firefighters. Real incidents. Real suppression efforts.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg border-2 border-gray-700">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                    <p className="text-white text-lg font-medium">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tactical Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 rounded-full p-3 shadow-lg transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 rounded-full p-3 shadow-lg transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Status Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-red-500' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
                <Target className="h-8 w-8 text-red-500 mr-3" />
                Mission Statement
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                OC Wildlands Fire Operations was established to connect qualified wildland firefighters 
                with elite assignments across certified fire agencies. We understand that wildland 
                firefighting isn't just employment—it's a commitment to protecting lives, property, 
                and natural resources through tactical excellence and operational readiness.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our platform serves as incident command for career deployment, connecting certified 
                firefighters with Type 1 crews, specialized units, and leadership positions across 
                Southern California's diverse fire environment.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/9816662/pexels-photo-9816662.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Firefighters in tactical formation"
                className="rounded-lg border-2 border-gray-700"
              />
              <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded text-sm font-bold">
                ACTIVE OPERATIONS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Deployment */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/9816663/pexels-photo-9816663.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Diverse firefighting crew deployment"
                className="rounded-lg border-2 border-gray-700"
              />
              <div className="absolute top-4 right-4 bg-orange-500 px-3 py-1 rounded text-sm font-bold">
                CREW DEPLOYMENT
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
                <Radio className="h-8 w-8 text-orange-500 mr-3" />
                Resource Deployment
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We deploy qualified personnel across all wildland fire disciplines, from initial 
                attack crews to extended attack operations. Our network includes certified positions 
                with federal, state, and local agencies throughout the fire service.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3 mr-3"></div>
                  <p className="text-gray-300"><strong>Entry-Level Assignments:</strong> S-130/S-190 qualified positions with comprehensive field training</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3"></div>
                  <p className="text-gray-300"><strong>Tactical Crews:</strong> Hotshot, engine, and hand crew assignments for experienced firefighters</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-3"></div>
                  <p className="text-gray-300"><strong>Specialized Units:</strong> Aviation, investigation, prevention, and technical specialist roles</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3 mr-3"></div>
                  <p className="text-gray-300"><strong>Command Staff:</strong> Supervisory and incident management positions for qualified leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Platform */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Zap className="h-8 w-8 text-yellow-500 mr-3" />
              Operational Platform
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Streamlined assignment process connecting qualified firefighters with verified agencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Certification Verification</h3>
              <p className="text-gray-300">
                Submit Red Card, NWCG certifications, and experience documentation 
                for qualification verification.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Radio className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Assignment Matching</h3>
              <p className="text-gray-300">
                Access verified assignments with certified agencies based on your 
                qualifications and deployment preferences.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Deployment Coordination</h3>
              <p className="text-gray-300">
                Direct coordination with agency personnel for rapid deployment 
                and assignment confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Protocol */}
      <section className="py-20 bg-red-900/20 border-y border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="h-16 w-16 text-red-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Safety Protocol</h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-300">
              Safety is our primary operational objective. We partner exclusively with agencies 
              maintaining NWCG safety standards and comprehensive training protocols. Every 
              assignment includes detailed safety briefings, equipment requirements, and 
              emergency procedures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
                <p className="text-lg text-gray-300">NWCG Certified Agencies</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                <p className="text-lg text-gray-300">Safety Officer Support</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">ZERO</div>
                <p className="text-lg text-gray-300">Tolerance for Safety Violations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Statistics */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Operational Statistics</h2>
            <p className="text-lg text-gray-300">
              Current season deployment metrics and suppression effectiveness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {operationalStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-700 rounded-lg border border-gray-600">
                <div className="flex justify-center mb-4 text-orange-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Command Team */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Command Team</h2>
            <p className="text-lg text-gray-300">
              Experienced fire service professionals leading operational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commandTeam.map((member, index) => (
              <div key={index} className="text-center bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-orange-500"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-600 px-2 py-1 rounded text-xs font-bold">
                    {member.certifications.split(',')[0]}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-orange-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-2">{member.bio}</p>
                <p className="text-xs text-gray-400 font-mono">{member.certifications}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Ready CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Assignment?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the elite network of wildland firefighters. Access verified assignments 
            and advance your fire service career through tactical excellence.
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
              to="/jobs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              View Current Operations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;