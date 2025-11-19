import { motion } from 'motion/react';
import { TrendingUp, Users, Target, Briefcase } from 'lucide-react';
import { useState } from 'react';

interface Capability {
  icon: any;
  category: string;
  title: string;
  description: string;
  roles: string;
  keyStrengths: string[];
  marketFocus: string;
}

export function ExpertiseShowcase() {
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);

  const capabilities: Capability[] = [
    {
      icon: TrendingUp,
      category: 'Private Equity',
      title: 'Partners Who Drive Value Creation',
      description: 'Placing senior leaders across buyout, growth, and venture capital firms who understand operational excellence and long-term value generation.',
      roles: 'Partners, Managing Directors, Operating Partners',
      keyStrengths: ['Deal sourcing expertise', 'Portfolio optimization', 'Operational transformation'],
      marketFocus: 'North America, Europe, Asia-Pacific'
    },
    {
      icon: Briefcase,
      category: 'Direct Secondaries',
      title: 'Specialists in Secondary Markets',
      description: 'Expertise in identifying talent for secondary market strategies, portfolio optimization, and liquidity solutions that demand deep market knowledge.',
      roles: 'Heads of Secondaries, Investment Professionals',
      keyStrengths: ['LP/GP relationships', 'Valuation expertise', 'Transaction structuring'],
      marketFocus: 'Global secondary markets'
    },
    {
      icon: Target,
      category: 'Growth Equity',
      title: 'Leaders Who Scale Companies',
      description: 'Connecting firms with executives who drive market expansion and sustainable growth in high-velocity environments.',
      roles: 'Investment Partners, Portfolio Executives',
      keyStrengths: ['Scaling operations', 'Market expansion', 'Strategic partnerships'],
      marketFocus: 'Technology, Healthcare, Consumer'
    },
    {
      icon: Users,
      category: 'Infrastructure & Real Assets',
      title: 'Domain Experts for Complex Assets',
      description: 'Sourcing leadership for infrastructure, real estate, and natural resources investments requiring specialized expertise.',
      roles: 'Asset Management, Development Leaders',
      keyStrengths: ['Asset management', 'ESG integration', 'Regulatory navigation'],
      marketFocus: 'Energy, Transportation, Real Estate'
    }
  ];

  // Position capabilities in a circular pattern
  const centerX = 400;
  const centerY = 400;
  const radius = 220;

  const capabilityPositions = capabilities.map((capability, index) => {
    const angle = (index * Math.PI * 2) / capabilities.length - Math.PI / 2;
    return {
      ...capability,
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
      index,
    };
  });

  return (
    <section id="expertise" className="relative py-32 lg:py-40 bg-white overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Header - Editorial style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="max-w-5xl">
            <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
              Our Capabilities
            </div>
            <h2 className="text-6xl lg:text-7xl text-black mb-10 leading-[0.95]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Unparalleled<br />
              Expertise Across<br />
              <span className="text-gray-400">Private Markets</span>
            </h2>
            
            <div className="border-l-2 border-black pl-8">
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
                Two decades of exclusive focus on private markets enables unmatched understanding 
                of role requirements and market dynamics across all major asset classes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Capabilities Network Visualization */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* SVG Capabilities Graph */}
            <div className="flex-1 relative">
              <motion.svg
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                viewBox="0 0 800 800"
                className="w-full max-w-2xl mx-auto"
              >
                {/* Connection lines from center to each capability */}
                {capabilityPositions.map((capability, index) => (
                  <motion.line
                    key={`line-${index}`}
                    x1={centerX}
                    y1={centerY}
                    x2={capability.x}
                    y2={capability.y}
                    stroke={selectedCapability === capability.category ? '#2d356b' : '#e5e7eb'}
                    strokeWidth={selectedCapability === capability.category ? 3 : 2}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                ))}

                {/* Subtle connecting circle */}
                <motion.circle
                  cx={centerX}
                  cy={centerY}
                  r={radius}
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth={1}
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />

                {/* Animated pulse rings */}
                {[0, 1, 2].map((ring) => (
                  <circle
                    key={`pulse-${ring}`}
                    cx={centerX}
                    cy={centerY}
                    r={radius}
                    fill="none"
                    stroke="#2d356b"
                    strokeWidth={1}
                    opacity={0.1}
                  >
                    <animate
                      attributeName="r"
                      from={radius * 0.8}
                      to={radius * 1.3}
                      dur="3s"
                      begin={`${ring * 1}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from={0.3}
                      to={0}
                      dur="3s"
                      begin={`${ring * 1}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}

                {/* Center node - AVILDA EXPERTISE */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <circle
                    cx={centerX}
                    cy={centerY}
                    r={75}
                    fill="#2d356b"
                    opacity={0.05}
                  />
                  <circle
                    cx={centerX}
                    cy={centerY}
                    r={60}
                    fill="#2d356b"
                  />
                  <text
                    x={centerX}
                    y={centerY - 12}
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="600"
                    letterSpacing="3"
                  >
                    AVILDA
                  </text>
                  <text
                    x={centerX}
                    y={centerY + 6}
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    opacity="0.9"
                  >
                    EXPERTISE
                  </text>
                  <text
                    x={centerX}
                    y={centerY + 22}
                    textAnchor="middle"
                    fill="white"
                    fontSize="9"
                    opacity="0.7"
                  >
                    20+ YEARS
                  </text>
                </motion.g>

                {/* Capability nodes */}
                {capabilityPositions.map((capability, index) => {
                  const isSelected = selectedCapability === capability.category;
                  const Icon = capability.icon;
                  const nodeSize = 50;
                  
                  return (
                    <motion.g
                      key={capability.category}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
                      onMouseEnter={() => setSelectedCapability(capability.category)}
                      onMouseLeave={() => setSelectedCapability(null)}
                      className="cursor-pointer"
                    >
                      {/* Outer glow on hover */}
                      <motion.circle
                        cx={capability.x}
                        cy={capability.y}
                        r={nodeSize + 15}
                        fill="#2d356b"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isSelected ? 0.15 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Node circle */}
                      <motion.circle
                        cx={capability.x}
                        cy={capability.y}
                        r={nodeSize}
                        fill="white"
                        stroke="#2d356b"
                        strokeWidth={isSelected ? 4 : 3}
                        animate={{
                          scale: isSelected ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Icon placeholder - we'll use a circle since SVG icons are complex */}
                      <circle
                        cx={capability.x}
                        cy={capability.y}
                        r={18}
                        fill="#2d356b"
                        opacity={0.1}
                      />
                      <circle
                        cx={capability.x}
                        cy={capability.y}
                        r={3}
                        fill="#2d356b"
                      />
                    </motion.g>
                  );
                })}

                {/* Category labels outside nodes */}
                {capabilityPositions.map((capability, index) => {
                  const isSelected = selectedCapability === capability.category;
                  
                  // Calculate label position (further out from node)
                  const angle = (index * Math.PI * 2) / capabilities.length - Math.PI / 2;
                  const labelDistance = 130;
                  const labelX = centerX + labelDistance * Math.cos(angle);
                  const labelY = centerY + labelDistance * Math.sin(angle);
                  
                  // Determine text anchor based on position
                  let anchor = 'middle';
                  if (labelX < centerX - 50) anchor = 'end';
                  else if (labelX > centerX + 50) anchor = 'start';
                  
                  return (
                    <motion.g
                      key={`label-${capability.category}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      className="pointer-events-none"
                    >
                      {/* Category name */}
                      <text
                        x={labelX}
                        y={labelY}
                        textAnchor={anchor}
                        fontSize="14"
                        fontWeight={isSelected ? "600" : "500"}
                        fill={isSelected ? "#2d356b" : "#000"}
                        fontFamily="Playfair Display, serif"
                      >
                        {capability.category}
                      </text>
                    </motion.g>
                  );
                })}
              </motion.svg>

              {/* Legend below graph */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="mt-8 text-center text-xs text-gray-500"
              >
                <p className="italic">
                  Hover over each capability to explore our specialized expertise
                </p>
              </motion.div>
            </div>

            {/* Selected Capability Details Panel */}
            <div className="w-full lg:w-96 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-8"
              >
                <div className="border-l-2 border-black pl-6">
                  <div className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-4">
                    Capability Focus
                  </div>

                  {selectedCapability ? (
                    <motion.div
                      key={selectedCapability}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {capabilities
                        .filter(c => c.category === selectedCapability)
                        .map(capability => {
                          const Icon = capability.icon;
                          return (
                            <div key={capability.category}>
                              {/* Icon */}
                              <div className="w-14 h-14 border-2 border-[#2d356b] flex items-center justify-center mb-6">
                                <Icon className="w-7 h-7 text-[#2d356b]" />
                              </div>

                              {/* Category */}
                              <div className="text-xs tracking-[0.25em] uppercase text-[#2d356b] mb-3">
                                {capability.category}
                              </div>

                              {/* Title */}
                              <h3 className="text-3xl mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                                {capability.title}
                              </h3>

                              {/* Description */}
                              <div className="mb-6 pb-6 border-b border-gray-200">
                                <p className="text-sm text-gray-700 leading-relaxed">
                                  {capability.description}
                                </p>
                              </div>

                              {/* Key Strengths */}
                              <div className="mb-6">
                                <div className="text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-3">
                                  Key Strengths
                                </div>
                                <ul className="space-y-2">
                                  {capability.keyStrengths.map((strength, idx) => (
                                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                                      <span className="text-[#2d356b] mt-1">•</span>
                                      <span>{strength}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Typical Placements */}
                              <div className="mb-6 pb-6 border-b border-gray-200">
                                <div className="text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-2">
                                  Typical Placements
                                </div>
                                <div className="text-sm text-gray-700">
                                  {capability.roles}
                                </div>
                              </div>

                              {/* Market Focus */}
                              <div>
                                <div className="text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-2">
                                  Market Focus
                                </div>
                                <div className="text-sm text-gray-700">
                                  {capability.marketFocus}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </motion.div>
                  ) : (
                    <div className="text-sm text-gray-500 italic">
                      Hover over a capability area to view detailed expertise information
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Stats - Editorial Treatment */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t-4 border-black pt-16"
        >
          <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-12">
            Track Record
          </div>
          
          <div className="grid lg:grid-cols-4 gap-16 lg:gap-12">
            {[
              { value: '$500B+', label: 'Assets Under Management', sublabel: 'Client Firms' },
              { value: '150+', label: 'Partner Firms', sublabel: 'Globally' },
              { value: '60', label: 'Average Days', sublabel: 'To Placement' },
              { value: '85%', label: 'Repeat Engagement', sublabel: 'Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6">
                  <div className="text-7xl lg:text-8xl text-black leading-none mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {stat.value}
                  </div>
                  <div className="w-16 h-0.5 bg-black" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-900">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {stat.sublabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why AVILDA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 border-t border-b border-gray-200 py-16"
        >
          <div className="max-w-4xl">
            <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-8">
              The AVILDA Difference
            </div>
            
            <h3 className="text-5xl lg:text-6xl text-black mb-12 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Why Leading Firms<br />
              Choose AVILDA
            </h3>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
              {[
                {
                  title: 'Deep sector knowledge',
                  description: 'Two decades of exclusive focus on private markets enables unmatched understanding of role requirements and market dynamics.'
                },
                {
                  title: 'Rigorous methodology',
                  description: 'Proprietary assessment framework combining technical competency evaluation, cultural alignment analysis, and reference verification.'
                },
                {
                  title: 'Global network',
                  description: 'Relationships with senior executives across 15+ countries and every major private markets hub worldwide.'
                },
                {
                  title: 'Proven impact',
                  description: '95% of our placements remain in role after 12 months—significantly above industry benchmarks—demonstrating commitment to long-term fit.'
                }
              ].map((diff, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {diff.title}
                  </div>
                  <div className="w-12 h-px bg-[#2d356b] mb-4" />
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {diff.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
