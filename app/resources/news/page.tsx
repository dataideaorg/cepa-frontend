"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useNewsArticles, useFeaturedNewsArticles } from "@/lib/hooks";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import ErrorMessage from "@/app/components/ErrorMessage";
import Pagination from "@/app/components/Pagination";
import SearchFilter from "@/app/components/SearchFilter";

const News: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>({});
  
  // Fetch featured news articles
  const { data: featuredArticles, loading: featuredLoading, error: featuredError } = useFeaturedNewsArticles();
  
  // Fetch all news articles with pagination and filters
  const { data: allArticlesData, loading: allArticlesLoading, error: allArticlesError, refetch } = useNewsArticles({
    page: currentPage,
    page_size: 9,
    search: searchQuery || undefined,
    ...filters
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFilter = (newFilters: Record<string, string>) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Get unique categories for filter options
  const categories = [
    "Health", "Road Safety", "Advocacy", "Education", 
    "Governance", "Digital Rights"
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Health": "bg-primary/10 text-primary border-primary",
      "Road Safety": "bg-secondary/10 text-secondary border-secondary",
      "Advocacy": "bg-accent/10 text-accent border-accent",
      "Education": "bg-destructive/10 text-destructive border-destructive",
      "Governance": "bg-primary/10 text-primary border-primary",
      "Digital Rights": "bg-secondary/10 text-secondary border-secondary"
    };
    return colors[category] || "bg-muted text-muted-foreground border-muted";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src="/hero/news-hero.jpg" 
          alt="News & Updates - CEPA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8"
            >
              News & Updates
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Stay informed with the latest news, updates, and insights from CEPA's work in policy analysis, governance, and advocacy across Uganda.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured News
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Latest updates and breaking news from CEPA's advocacy and research work.
            </p>
          </motion.div>
          
          {featuredLoading ? (
            <LoadingSpinner size="lg" className="py-12" />
          ) : featuredError ? (
            <ErrorMessage 
              message={featuredError} 
              onRetry={() => window.location.reload()} 
              className="py-12" 
            />
          ) : (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
              {featuredArticles?.map((article, index) => {
              const themeColors = ["border-primary", "border-secondary", "border-accent", "border-destructive"];
              const currentColor = themeColors[index % 4];
              
              return (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative h-96 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(article.category)} text-xs`}>
                      {article.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-white/90 mb-3">{article.date}</p>
                    <p className="text-sm text-white/80 mb-4 line-clamp-3">{article.description}</p>
                    <Button asChild size="sm" variant="outline" className="bg-white/20 text-white border border-white/30 hover:bg-white/30">
                      <Link href={`/resources/news/${article.slug}`} className="text-black">
                        Read More
                      </Link>
                    </Button>
                  </div>
                </Card>
                </motion.div>
              );
            })}
          </motion.div>
          )}
        </div>
      </section>

      {/* All News */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              All News
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Complete collection of news articles, updates, and announcements from CEPA.
            </p>
          </motion.div>
          
          {/* Search and Filter */}
          <div className="mb-12">
            <SearchFilter
              onSearch={handleSearch}
              onFilter={handleFilter}
              searchPlaceholder="Search news articles..."
              filterOptions={{
                category: categories,
                featured: true
              }}
            />
          </div>

          {/* News Articles Grid */}
          {allArticlesLoading ? (
            <LoadingSpinner size="lg" className="py-12" />
          ) : allArticlesError ? (
            <ErrorMessage 
              message={allArticlesError} 
              onRetry={refetch} 
              className="py-12" 
            />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {allArticlesData?.results?.map((article, index) => {
              const themeColors = ["border-primary", "border-secondary", "border-accent", "border-destructive"];
              const currentColor = themeColors[index % 4];
              
              return (
                <Card key={article.id} className="relative h-96 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(article.category)} text-xs`}>
                      {article.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-white/90 mb-3">{article.date}</p>
                    <p className="text-sm text-white/80 mb-4 line-clamp-3">{article.description}</p>
                    <Button asChild size="sm" variant="outline" className="bg-white/20 text-white border border-white/30 hover:bg-white/30">
                      <Link href={`/resources/news/${article.slug}`} className="text-black">
                        Read More
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

              {/* Pagination */}
              {allArticlesData && allArticlesData.count > 9 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(allArticlesData.count / 9)}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{background: 'linear-gradient(to right, rgb(30 64 175), rgb(245 158 11), rgb(16 185 129), rgb(239 68 68))'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Stay Updated
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-12 max-w-4xl mx-auto"
          >
            Subscribe to our newsletter to receive the latest news, updates, and policy insights directly to your inbox.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button asChild size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-lg">
              <Link href="/get-involved#newsletter">
                Subscribe to Newsletter
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-lg">
              <Link href="/resources">
                Browse All Resources
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
