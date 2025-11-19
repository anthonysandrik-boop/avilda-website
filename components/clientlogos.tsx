import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { X, Linkedin, Mail, MapPin, Briefcase, Award } from 'lucide-react';
import cartaLogo from 'figma:asset/743b4add008780c80c325758b16bf09230c2ebc4.png';
import esLogo from 'figma:asset/3039305379dae394520d7e0d1c3d2ab8e3ec72d9.png';
import manhattanLogo from 'figma:asset/d9a2492b47210315e61b741e1ce30447d0832d01.png';
import linqtoLogo from 'figma:asset/133893f8b6b3fb4e175cb62e229900e73cab6507.png';
import stabletonLogo from 'figma:asset/546215989e150cb8cb24013b9c3d5dd2aa719d98.png';
import sevenLogo from 'figma:asset/d609c9afe0fd5167e74a2290c9163750b18be5af.png';
import dbosLogo from 'figma:asset/cc5c1977c92b952375eb58a46beef9372fefa036.png';
import npmLogo from 'figma:asset/e9514ffc9f017e8d287a1cfc873a1f4afe572bd8.png';

export function ClientLogos() {
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const clients = [
    { name: 'Carta', logo: cartaLogo },
    { name: 'ES', logo: esLogo },
    { name: 'Manhattan Venture Partners', logo: manhattanLogo },
    { name: 'Linqto', logo: linqtoLogo },
    { name: 'Stableton', logo: stabletonLogo },
    { name: 'Seven', logo: sevenLogo },
    { name: 'DBOS', logo: dbosLogo },
    { name: 'Nasdaq Private Market', logo: npmLogo },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
      }} />
      
      <div className="relative max-w-[1800px] mx-auto px-8 lg:px-20 xl:px-32">
        
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-10"
          >
            <div className="w-12 h-px bg-[#2d356b]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#2d356b]">
              Select Clients
            </span>
            <div className="h-px flex-1 bg-gray-300 max-w-[120px]" />
          </motion.div>
        </div>

        {/* Static grid of logos in squares */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Square container with border */}
              <div 
                className={`relative aspect-square bg-white border-2 border-gray-200 hover:border-[#2d356b] transition-all duration-300 shadow-sm hover:shadow-xl ${
                  client.name === 'Carta' ? 'cursor-pointer' : ''
                }`}
                onClick={() => client.name === 'Carta' && setSelectedClient('Carta')}
              >
                {/* Logo */}
                <div className="absolute inset-0 p-8 flex items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-full max-h-full object-contain grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                
                {/* Subtle accent corner */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#c8102e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Click indicator for Carta */}
                {client.name === 'Carta' && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-[#2d356b] tracking-wider uppercase">View Placement</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Carta Placement Profile Dialog */}
      <Dialog open={selectedClient === 'Carta'} onOpenChange={(open) => !open && setSelectedClient(null)}>
        <DialogContent className="max-w-4xl bg-white border-2 border-[#2d356b] p-0 gap-0 overflow-hidden">
          {/* Header with accent */}
          <div className="relative bg-gradient-to-r from-[#2d356b] to-[#1a2040] p-8 text-white">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#c8102e]" />
            <DialogHeader className="relative">
              <DialogTitle className="sr-only">Placement Profile</DialogTitle>
              <DialogDescription className="sr-only">
                Detailed profile of executive placement at Carta including achievements and background
              </DialogDescription>
              <div className="flex items-center gap-4 mb-2">
                <Award className="w-6 h-6 text-[#c8102e]" />
                <span className="text-xs tracking-[0.3em] uppercase text-white/80">
                  Successful Placement
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                Executive Profile
              </h2>
            </DialogHeader>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Profile Image */}
              <div className="lg:col-span-1">
                <div className="relative aspect-square rounded-sm overflow-hidden border-2 border-gray-200 mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjE5Mjg0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Executive"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs text-[#2d356b] tracking-wider">2024</span>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Briefcase className="w-4 h-4 text-[#2d356b]" />
                    <span>15+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#2d356b]" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-3xl mb-2 text-black" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Sarah Chen
                  </h3>
                  <p className="text-xl text-[#2d356b] mb-4">
                    Chief Revenue Officer
                  </p>
                  <div className="w-16 h-1 bg-[#c8102e] mb-6" />
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Placed as Chief Revenue Officer at Carta, Sarah brought over 15 years of experience 
                    scaling revenue operations in high-growth fintech and private markets infrastructure companies.
                  </p>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg mb-4 text-black flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#2d356b]" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {[
                      'Scaled ARR from $200M to $450M in first 18 months',
                      'Built and led international expansion team across EMEA and APAC',
                      'Established strategic partnerships with top-tier PE and VC firms',
                      'Implemented data-driven sales methodology that improved close rates by 40%'
                    ].map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2d356b] mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Previous Experience */}
                <div>
                  <h4 className="text-lg mb-4 text-black flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#2d356b]" />
                    Previous Leadership Roles
                  </h4>
                  <div className="space-y-3">
                    <div className="border-l-2 border-gray-200 pl-4">
                      <div className="text-sm text-[#2d356b]">SVP of Sales</div>
                      <div className="text-sm text-gray-600">AngelList (2018-2022)</div>
                    </div>
                    <div className="border-l-2 border-gray-200 pl-4">
                      <div className="text-sm text-[#2d356b]">VP of Enterprise Sales</div>
                      <div className="text-sm text-gray-600">SecondMarket (2015-2018)</div>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4 className="text-lg mb-3 text-black flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#2d356b]" />
                    Education
                  </h4>
                  <div className="text-sm text-gray-600">
                    MBA, Stanford Graduate School of Business<br />
                    BS Economics, Wharton School, University of Pennsylvania
                  </div>
                </div>

                {/* Client Testimonial */}
                <div className="bg-gray-50 border-l-2 border-[#2d356b] p-6 mt-8">
                  <p className="text-sm italic text-gray-700 leading-relaxed mb-3">
                    "AVILDA delivered exactly what we needed—a leader who understood both the technical 
                    complexity of cap table management and the relationship-building required to serve 
                    institutional clients. Sarah has exceeded every expectation."
                  </p>
                  <div className="text-xs text-[#2d356b] tracking-wider">
                    — CEO, Carta
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-gray-600">Active placement • Still with company</span>
              </div>
              <span className="text-xs text-gray-500 italic">Placement completed in 18 days</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
