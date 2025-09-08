"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { usePublications, useFeaturedPublications } from "@/lib/hooks";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import ErrorMessage from "@/app/components/ErrorMessage";
import Pagination from "@/app/components/Pagination";
import SearchFilter from "@/app/components/SearchFilter";

const Publications: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>({});
  
  // Fetch featured publications
  const { data: featuredPublications, loading: featuredLoading, error: featuredError } = useFeaturedPublications();
  
  // Fetch all publications with pagination and filters
  const { data: allPublicationsData, loading: allPublicationsLoading, error: allPublicationsError, refetch } = usePublications({
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

  // Get unique types and categories for filter options
  const types = [
    "Policy Brief", "Policy Paper", "Research Report", "Analysis"
  ];

  const categories = [
    "Governance", "Public Finance", "Transparency", "Civil Society", 
    "Health", "Education", "Digital Rights", "Road Safety"
  ];


  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Governance": "bg-primary/10 text-primary border-primary",
      "Public Finance": "bg-secondary/10 text-secondary border-secondary",
      "Transparency": "bg-accent/10 text-accent border-accent",
      "Civil Society": "bg-destructive/10 text-destructive border-destructive",
      "Accountability": "bg-primary/10 text-primary border-primary",
      "Digital Rights": "bg-secondary/10 text-secondary border-secondary",
      "Human Rights": "bg-accent/10 text-accent border-accent",
      "Public Health": "bg-destructive/10 text-destructive border-destructive",
    };
    return colors[category] || "bg-muted text-muted-foreground border-muted";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src="/hero/publications-hero.jpg" 
          alt="Publications - CEPA Research"
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
              Publications
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Explore our research publications, policy briefs, and analytical reports covering governance, democracy, and policy analysis in Uganda.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
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
              Featured Publications
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our latest research and policy analysis on critical governance and development issues in Uganda.
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
              {featuredPublications?.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`${getCategoryColor(publication.category)} text-xs`}>
                      {publication.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{publication.date}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {publication.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {publication.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {publication.description}
                  </p>
                  {publication.pdf && (
                    <Button asChild size="sm" variant="secondary" className="w-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
                      <a href={publication.pdf} target="_blank" rel="noopener noreferrer">
                        Download PDF
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
              </motion.div>
            ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* All Publications */}
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
              All Publications
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Complete collection of our research publications, policy briefs, and analytical reports.
            </p>
          </motion.div>
          
          {/* Search and Filter */}
          <div className="mb-12">
            <SearchFilter
              onSearch={handleSearch}
              onFilter={handleFilter}
              searchPlaceholder="Search publications..."
              filterOptions={{
                type: types,
                category: categories,
                featured: true
              }}
            />
          </div>

          {/* Publications Grid */}
          {allPublicationsLoading ? (
            <LoadingSpinner size="lg" className="py-12" />
          ) : allPublicationsError ? (
            <ErrorMessage 
              message={allPublicationsError} 
              onRetry={refetch} 
              className="py-12" 
            />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {allPublicationsData?.results?.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`${getCategoryColor(publication.category)} text-xs`}>
                      {publication.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{publication.date}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {publication.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {publication.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {publication.description}
                  </p>
                  {publication.pdf && (
                    <Button asChild size="sm" variant="secondary" className="w-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
                      <a href={publication.pdf} target="_blank" rel="noopener noreferrer">
                        Download PDF
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
              </motion.div>
            ))}
              </div>

              {/* Pagination */}
              {allPublicationsData && allPublicationsData.count > 9 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(allPublicationsData.count / 9)}
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
            Stay Informed
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-12 max-w-4xl mx-auto"
          >
            Subscribe to our newsletter to receive the latest publications, research updates, and policy insights directly to your inbox.
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

export default Publications;
