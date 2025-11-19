import { motion } from 'motion/react';
import avidaLogo from 'figma:asset/5d3ed355421be243023ab0df0213b609d1b2e55f.png';

export function HeroStunning() {
  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      
      {/* Bold Vogue red accent stripe - top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-3 bg-[#c8102e] origin-left"
      />
      
      {/* Dramatic red vertical stripe - left edge */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 w-0.5 h-full bg-[#c8102e] origin-top"
      />
      
      {/* Large red geometric block - high fashion */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-0 w-2/5 lg:w-1/3 h-full bg-gradient-to-l from-[#c8102e]/[0.02] to-transparent"
      />
      


      {/* Circle AVILDA Logo - top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-20 right-8 lg:right-20 xl:right-32 z-30"
      >
        <div className="relative w-24 h-24 lg:w-32 lg:h-32">
          {/* Subtle red glow behind logo */}
          <motion.div
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-[#c8102e] blur-xl"
          />
          
          {/* Logo circle */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-black/5 shadow-2xl">
            <img
              src={avidaLogo}
              alt="AVILDA"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative ring */}
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="absolute inset-0 rounded-full border border-[#c8102e]/30"
          />
        </div>
      </motion.div>

      {/* AVILDA Executive Talent - Vogue/Condé Nast style wordmark */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-32 left-8 lg:left-20 xl:left-32 z-30"
      >
        <div className="relative">
          {/* Red accent line above */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -top-2 left-0 w-12 h-0.5 bg-[#c8102e] origin-left"
          />
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-black whitespace-nowrap"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '2.5rem', fontWeight: 700, letterSpacing: '0.02em' }}
          >
            AVILDA <span className="text-black/70 italic" style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.5rem', fontWeight: 400, letterSpacing: '0.08em' }}>Executive Talent</span>
          </motion.h2>
          
          {/* Bottom decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-8 left-0 flex items-center gap-2 origin-left"
          >
            <div className="w-6 h-px bg-black/30" />
            <div className="w-1 h-1 rounded-full bg-[#c8102e]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative flex items-center">
        <div className="w-full max-w-[1800px] mx-auto px-8 lg:px-20 xl:px-32 py-32 pt-[22rem] lg:pt-[26rem] xl:pt-[30rem] pb-24 lg:pb-32 xl:pb-40">
          
          {/* Built For Private Markets - Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-64 lg:mb-80 xl:mb-96"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#c8102e]" />
            </div>
            <h2 
              className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] leading-[0.85] uppercase"
              style={{ 
                fontFamily: '"Futura", "Helvetica Neue", "Arial", sans-serif', 
                fontWeight: 900,
                letterSpacing: '0.02em'
              }}
            >
              <span className="text-black">Built for Private Markets</span>
            </h2>
          </motion.div>

          {/* AVILDA subheadline - redesigned with graphics and new layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Vogue-inspired typographic layout with italics */}
            <div className="relative py-24 lg:py-32">
              
              {/* Dramatic red diagonal slash */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.6, delay: 0.8 }}
                className="absolute -left-16 top-20 w-[130%] h-3 bg-[#c8102e] origin-left rotate-[-3deg]"
              />
              
              {/* Main statement with mixed typography */}
              <div className="relative max-w-6xl">
                
                {/* Subheadline with dramatic typography */}
                <h1 
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] text-black relative z-10"
                  style={{ 
                    fontFamily: '"Didot", "Bodoni Moda", "Playfair Display", serif', 
                    fontWeight: 400, 
                    letterSpacing: '-0.01em'
                  }}
                >
                  <span 
                    className="inline-block"
                    style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.02em' }}
                  >
                    AVILDA
                  </span>{' '}
                  <span style={{ fontStyle: 'italic', fontWeight: 300 }}>is the</span>{' '}
                  <span style={{ fontWeight: 600 }}>first and only call</span>{' '}
                  <span style={{ fontStyle: 'italic', fontWeight: 300 }}>for</span>{' '}
                  <span style={{ fontWeight: 500 }}>CEOs, investors, and boards</span>{' '}
                  <span style={{ fontStyle: 'italic', fontWeight: 300 }}>at the</span>{' '}
                  <span 
                    style={{ 
                      fontWeight: 700, 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.03em',
                      fontSize: '0.95em'
                    }}
                  >
                    Defining Moments
                  </span>{' '}
                  <span style={{ fontStyle: 'italic', fontWeight: 300 }}>for their</span>{' '}
                  <span style={{ fontWeight: 500 }}>business, leadership, and legacy</span>
                  <span style={{ color: '#c8102e', fontSize: '1.5em', lineHeight: 0 }}>.</span>
                </h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}