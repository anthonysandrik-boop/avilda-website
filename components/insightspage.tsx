import { motion } from 'motion/react';
import { ArrowRight, Clock, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  featured?: boolean;
}

export function InsightsPage() {
  const articles: Article[] = [
    {
      id: '1',
      title: 'The Evolution of Private Markets Leadership',
      excerpt: 'How executive requirements are shifting in an era of unprecedented growth and complexity in alternative investments.',
      category: 'Market Trends',
      readTime: '8 min read',
      author: 'AVILDA Research',
      date: 'Oct 15, 2025',
      featured: true
    },
    {
      id: '2',
      title: 'Secondary Market Talent: A New Paradigm',
      excerpt: 'Identifying the unique skill sets required to excel in the rapidly expanding secondary market ecosystem.',
      category: 'Sector Focus',
      readTime: '6 min read',
      author: 'AVILDA Research',
      date: 'Oct 8, 2025',
      featured: true
    },
    {
      id: '3',
      title: 'Compensation Trends in Alternative Assets',
      excerpt: 'Our annual analysis of executive compensation across private equity, venture capital, and credit platforms.',
      category: 'Compensation',
      readTime: '10 min read',
      author: 'AVILDA Research',
      date: 'Oct 1, 2025'
    },
    {
      id: '4',
      title: 'Building High-Performance Investment Teams',
      excerpt: 'Insights from placing over 500 investment professionals across top-tier alternative asset managers.',
      category: 'Leadership',
      readTime: '7 min read',
      author: 'AVILDA Research',
      date: 'Sep 24, 2025'
    },
    {
      id: '5',
      title: 'The Rise of Private Credit Platforms',
      excerpt: 'How talent strategies are evolving in one of the fastest-growing segments of alternative investments.',
      category: 'Sector Focus',
      readTime: '9 min read',
      author: 'AVILDA Research',
      date: 'Sep 17, 2025'
    },
    {
      id: '6',
      title: 'Diversity in Private Markets Leadership',
      excerpt: 'Progress, challenges, and strategies for building more diverse executive teams in alternative assets.',
      category: 'Leadership',
      readTime: '8 min read',
      author: 'AVILDA Research',
      date: 'Sep 10, 2025'
    }
  ];

  const featuredArticles = articles.filter(a => a.featured);
  const standardArticles = articles.filter(a => !a.featured);

  return (
    <section className="relative bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-50 pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Editorial accent */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white to-transparent opacity-60" />
        
        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-12 h-px bg-[#2d356b]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#2d356b]">
                Intelligence & Analysis
              </span>
            </div>
            
            <h1 
              className="text-6xl sm:text-7xl lg:text-8xl text-black leading-[0.95] mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Market <span className="italic">Insights</span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
              Deep analysis and perspectives on talent, leadership, and trends shaping the future of Private Markets and Alternative Investments.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Articles - Large Editorial Format */}
      <div className="relative py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative mb-8 overflow-hidden bg-gray-100 aspect-[4/3]">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1454165804606-c3d57bc86b40' : '1486406146926-c627a92ad1ab'}?w=800&q=80`}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Category Badge */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs tracking-[0.25em] uppercase text-[#2d356b]">
                    {article.category}
                  </span>
                  <div className="h-px flex-1 bg-gray-200 max-w-[60px]" />
                </div>

                {/* Title */}
                <h2 
                  className="text-3xl lg:text-4xl text-black mb-6 leading-[1.1] group-hover:text-[#2d356b] transition-colors duration-300"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                  <span>{article.date}</span>
                </div>

                {/* Read More */}
                <div className="mt-6 flex items-center gap-2 text-[#2d356b] group-hover:gap-4 transition-all duration-300">
                  <span className="text-xs tracking-[0.2em] uppercase">Read Article</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Standard Articles Grid */}
      <div className="relative py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <h3 
              className="text-4xl lg:text-5xl text-black mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Latest <span className="italic">Research</span>
            </h3>
            <div className="w-16 h-px bg-[#2d356b]" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {standardArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer bg-white p-8 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Category */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-[#2d356b]" />
                  <span className="text-xs tracking-[0.25em] uppercase text-[#2d356b]">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="text-2xl text-black mb-4 leading-tight group-hover:text-[#2d356b] transition-colors duration-300"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </div>
                  <span>{article.date}</span>
                </div>

                {/* Border accent on hover */}
                <div className="w-0 h-0.5 bg-[#2d356b] group-hover:w-full transition-all duration-500" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
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
              Stay <span className="italic">Informed</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Subscribe to receive our quarterly insights on talent trends, compensation analysis, and market intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
              />
              <motion.button
                className="px-10 py-4 bg-white text-[#2d356b] uppercase tracking-[0.2em] text-xs hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>

            <p className="mt-6 text-sm text-white/70">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
