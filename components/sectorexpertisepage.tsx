import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, Users, Target, Award, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SectorPageProps {
  sector: {
    name: string;
    tagline: string;
    description: string;
    heroImage: string;
  };
}

export function SectorExpertisePage({ sector }: SectorPageProps) {
  // Default to Private Equity if no sector provided
  const currentSector = sector || {
    name: 'Private Equity & Venture Capital',
    tagline: 'Building Teams That Drive Returns',
    description: 'Deep expertise in identifying and placing exceptional investment professionals, operators, and fund leaders across buyout, growth equity, and venture capital platforms.',
    heroImage: 'photo-1454165804606-c3d57bc86b40'
  };

  const keyRoles = [
    'Managing Partners & General Partners',
    'Investment Partners & Principals',
    'Portfolio Operators & Operating Partners',
    'Chief Financial Officers',
    'Chief Investment Officers',
    'Heads of Investor Relations',
    'Fund Controllers & Accounting Leaders',
    'Compliance & Risk Management',
    'Deal Sourcing & Origination',
    'Portfolio Management & Monitoring'
  ];

  const expertise = [
    {
      icon: TrendingUp,
      title: 'Market Intelligence',
      description: 'Real-time insights into compensation trends, team movements, and emerging talent pools across the sector.'
    },
    {
      icon: Users,
      title: 'Deep Network',
      description: 'Established relationships with 300+ PE/VC firms and their portfolio companies globally.'
    },
    {
      icon: Target,
      title: 'Precise Matching',
      description: 'Understanding of firm culture, investment strategy, and team dynamics to ensure perfect alignment.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: '95% success rate in placements with average time-to-hire of 45 days for critical positions.'
    }
  ];

  const caseStudies = [
    {
      title: 'Growth Equity Platform Build-Out',
      challenge: 'Multi-billion dollar PE firm launching new growth equity strategy needed complete investment team.',
      solution: 'Placed 8 investment professionals including Head of Growth, 3 Partners, and supporting team within 90 days.',
      results: ['Team deployed $800M in first 12 months', 'Portfolio of 6 high-growth companies', 'Team retention: 100%']
    },
    {
      title: 'VC Fund CFO Replacement',
      challenge: 'Top-tier early-stage VC needed CFO with crypto/digital assets expertise during rapid fund expansion.',
      solution: 'Identified passive candidate from competitive fund with exact specialization and cultural fit.',
      results: ['Candidate accepted within 14 days', 'Managed $500M fund close', 'Implemented new reporting systems']
    },
    {
      title: 'Operating Partner Hire',
      challenge: 'Buyout fund seeking Operating Partner with CEO-level SaaS experience for portfolio support.',
      solution: 'Sourced former SaaS unicorn CEO transitioning from operating to investing role.',
      results: ['Drove 40% revenue growth across 5 portfolio companies', 'Led 2 successful exits', 'Recruited 15+ executives to portfolio']
    }
  ];

  const stats = [
    { value: '300+', label: 'Firms Served' },
    { value: '$2.5T+', label: 'AUM Represented' },
    { value: '500+', label: 'Placements Made' },
    { value: '95%', label: 'Success Rate' }
  ];

  return (
    <section className="relative bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gray-900">
          <ImageWithFallback
            src={`https://images.unsplash.com/${currentSector.heroImage}?w=1920&q=80`}
            alt={currentSector.name}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-12 h-px bg-white" />
                <span className="text-xs tracking-[0.3em] uppercase text-white/80">
                  Sector Expertise
                </span>
              </div>
              
              <h1 
                className="text-5xl sm:text-6xl lg:text-8xl text-white leading-[0.95] mb-8"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {currentSector.name}
              </h1>
              
              <p className="text-2xl lg:text-3xl text-white/90 mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                {currentSector.tagline}
              </p>

              <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
                {currentSector.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative bg-[#2d356b] py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div 
                  className="text-4xl lg:text-5xl text-white mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {stat.value}
                </div>
                <div className="w-8 h-px bg-white/40 mx-auto mb-3" />
                <div className="text-xs text-white/80 uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Roles Section */}
      <div className="relative py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-px bg-[#2d356b]" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#2d356b]">
                  Our Focus
                </span>
              </div>
              
              <h2 
                className="text-4xl lg:text-5xl text-black leading-[1.1] mb-8"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Key <span className="italic">Roles</span> We Place
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                From investment professionals to operational leaders, we specialize in identifying exceptional talent across all critical functions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-10 lg:p-12"
            >
              <div className="space-y-4">
                {keyRoles.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-4 group"
                  >
                    <CheckCircle2 size={20} className="text-[#2d356b] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 group-hover:text-black transition-colors duration-300">
                      {role}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Expertise - 4 Column Grid */}
      <div className="relative py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <h2 
              className="text-4xl lg:text-5xl text-black mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our <span className="italic">Expertise</span>
            </h2>
            <div className="w-16 h-px bg-[#2d356b] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center group"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gray-50 border-2 border-gray-200 flex items-center justify-center group-hover:border-[#2d356b] group-hover:bg-[#2d356b] transition-all duration-300">
                      <Icon size={28} className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl mb-4 text-black" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="relative py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-12 h-px bg-[#2d356b]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#2d356b]">
                Proven Results
              </span>
            </div>
            
            <h2 
              className="text-4xl lg:text-5xl text-black"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Case <span className="italic">Studies</span>
            </h2>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white p-10 lg:p-12 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 
                  className="text-2xl lg:text-3xl text-black mb-8"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {study.title}
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-xs tracking-[0.25em] uppercase text-[#2d356b] mb-3">Challenge</div>
                    <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.25em] uppercase text-[#2d356b] mb-3">Solution</div>
                    <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.25em] uppercase text-[#2d356b] mb-3">Results</div>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle2 size={16} className="text-[#2d356b] flex-shrink-0 mt-1" />
                          <span className="text-sm leading-relaxed">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 lg:py-32 bg-[#2d356b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Let's Build Your <span className="italic">Team</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Partner with executives who understand your sector, strategy, and the talent required to achieve your goals.
            </p>

            <motion.button
              className="px-12 py-4 bg-white text-[#2d356b] uppercase tracking-[0.25em] text-xs hover:bg-gray-100 transition-colors inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
              <Briefcase size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
