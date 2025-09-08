"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useEvents, useFeaturedEvents, useUpcomingEvents } from "@/lib/hooks";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import ErrorMessage from "@/app/components/ErrorMessage";
import Pagination from "@/app/components/Pagination";
import SearchFilter from "@/app/components/SearchFilter";

const Events: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>({});
  
  // Fetch featured events
  const { data: featuredEvents, loading: featuredLoading, error: featuredError } = useFeaturedEvents();
  
  // Fetch upcoming events
  const { data: upcomingEvents, loading: upcomingLoading, error: upcomingError } = useUpcomingEvents();
  
  // Fetch all events with pagination and filters
  const { data: allEventsData, loading: allEventsLoading, error: allEventsError, refetch } = useEvents({
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
    "Conference", "Meeting", "Workshop", "Seminar", "Training", "Advocacy"
  ];

  const statusOptions = [
    "upcoming", "completed", "cancelled"
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Conference": "bg-primary/10 text-primary border-primary",
      "Meeting": "bg-secondary/10 text-secondary border-secondary",
      "Workshop": "bg-accent/10 text-accent border-accent",
      "Seminar": "bg-destructive/10 text-destructive border-destructive",
      "Training": "bg-primary/10 text-primary border-primary",
      "Validation Meeting": "bg-secondary/10 text-secondary border-secondary"
    };
    return colors[category] || "bg-muted text-muted-foreground border-muted";
  };

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      "upcoming": "bg-green-100 text-green-800 border-green-200",
      "completed": "bg-blue-100 text-blue-800 border-blue-200",
      "cancelled": "bg-red-100 text-red-800 border-red-200"
    };
    return colors[status] || "bg-muted text-muted-foreground border-muted";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src="/hero/events-hero.jpg" 
          alt="Events & Activities - CEPA"
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
              Events & Activities
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Join CEPA at conferences, workshops, seminars, and training programs that advance policy analysis, governance, and civic engagement across Uganda and East Africa.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents && upcomingEvents.length > 0 && (
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
                Upcoming Events
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Don't miss these important upcoming events and opportunities to engage with CEPA's work.
              </p>
            </motion.div>
            
            {upcomingLoading ? (
              <LoadingSpinner size="lg" className="py-12" />
            ) : upcomingError ? (
              <ErrorMessage 
                message={upcomingError} 
                onRetry={() => window.location.reload()} 
                className="py-12" 
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => {
                const themeColors = ["border-primary", "border-secondary", "border-accent", "border-destructive"];
                const currentColor = themeColors[index % 4];
                
                return (
                  <Card key={event.id} className="relative h-96 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={`${getCategoryColor(event.category)} text-xs`}>
                        {event.category}
                      </Badge>
                      <Badge className={`${getStatusColor(event.status)} text-xs`}>
                        {event.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">{event.title}</h3>
                      <div className="flex items-center text-sm text-white/90 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-white/90 mb-2">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-white/90 mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <p className="text-sm text-white/80 mb-4 line-clamp-2">{event.description}</p>
                      <Button asChild size="sm" variant="outline" className="bg-white/20 text-white border border-white/30 hover:bg-white/30">
                        <Link href={`/resources/events/${event.slug}`} className="text-black">
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </Card>
                );
              })}
              </div>
            )}
          </div>
        </section>
      )}

      {/* All Events */}
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
              All Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Complete collection of events, workshops, conferences, and training programs from CEPA.
            </p>
          </motion.div>
          
          {/* Search and Filter */}
          <div className="mb-12">
            <SearchFilter
              onSearch={handleSearch}
              onFilter={handleFilter}
              searchPlaceholder="Search events..."
              filterOptions={{
                category: categories,
                status: statusOptions,
                featured: true
              }}
            />
          </div>

          {/* Events Grid */}
          {allEventsLoading ? (
            <LoadingSpinner size="lg" className="py-12" />
          ) : allEventsError ? (
            <ErrorMessage 
              message={allEventsError} 
              onRetry={refetch} 
              className="py-12" 
            />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {allEventsData?.results?.map((event, index) => {
              const themeColors = ["border-primary", "border-secondary", "border-accent", "border-destructive"];
              const currentColor = themeColors[index % 4];
              
              return (
                <Card key={event.id} className={`relative h-96 overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 ${currentColor}`}>
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={`${getCategoryColor(event.category)} text-xs`}>
                      {event.category}
                    </Badge>
                    <Badge className={`${getStatusColor(event.status)} text-xs`}>
                      {event.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{event.title}</h3>
                    <div className="flex items-center text-sm text-white/90 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-white/90 mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-white/90 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <p className="text-sm text-white/80 mb-4 line-clamp-2">{event.description}</p>
                    <Button asChild size="sm" variant="outline" className="bg-white/20 text-white border border-white/30 hover:bg-white/30">
                      <Link href={`/resources/events/${event.slug}`} className="text-white">
                        View Details
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
              </div>

              {/* Pagination */}
              {allEventsData && allEventsData.count > 9 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(allEventsData.count / 9)}
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto">
            Subscribe to our newsletter to receive updates about upcoming events, workshops, and opportunities to engage with CEPA's work.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-lg">
              <Link href="/get-involved#newsletter">
                Subscribe to Updates
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-lg">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
