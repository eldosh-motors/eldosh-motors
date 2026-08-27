import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Calendar, Clock, ArrowRight } from 'lucide-react';
import { newsData } from '../../data/news';
import { NewsArticle } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';

export const NewsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const { openNewsDetail } = useModal();

  return (
    <section id="news" className="py-24 bg-eldosh-graphite/30 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-eldosh-red">
            <Newspaper className="w-4 h-4" />
            <span>{t.news.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase">
            {t.news.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-medium">
            {t.news.subtitle}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((article: NewsArticle, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => openNewsDetail(article)}
              className="bg-eldosh-graphite border border-white/10 hover:border-eldosh-red/40 rounded-xl overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:shadow-card hover:-translate-y-1.5"
            >
              {/* News Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-eldosh-dark">
                <img
                  src={article.image}
                  alt={article.title[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-eldosh-dark/90 border border-white/10 text-white text-[10px] font-black uppercase tracking-wider rounded backdrop-blur-sm">
                  {article.category[language]}
                </div>
              </div>

              {/* News Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-eldosh-red" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-eldosh-red" />
                      {article.readTime[language]}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black font-display text-white group-hover:text-eldosh-red transition-colors leading-snug line-clamp-2">
                    {article.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal line-clamp-3">
                    {article.excerpt[language]}
                  </p>
                </div>

                <div className="pt-2 flex items-center text-xs font-black text-eldosh-red uppercase tracking-wider group-hover:underline">
                  <span>{t.news.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
