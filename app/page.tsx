"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { useHomepageLatest } from '@/lib/hooks';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import ErrorMessage from '@/app/components/ErrorMessage';

const Home: React.FC = () => {
  const { data: latestData, loading: latestLoading, error: latestError } = useHomepageLatest();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] max-h-[800px] overflow-hidden">
        <img 
          src="/hero/home-hero.jpg" 
          alt="CEPA - Center for Policy Analysis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 pb-16">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Center for Policy Analysis
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Advancing parliamentary democracy, governance, and human rights in Uganda through evidence-based policy research and analysis.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="shadow-lg text-lg px-8 py-6 bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30">
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
              <Button asChild size="lg" className="shadow-lg text-lg px-8 py-6 bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30">
                <Link href="/get-involved">
                  Get Involved
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              CEPA is dedicated to strengthening democratic governance, promoting transparency and accountability, 
              and advancing human rights in Uganda through rigorous policy research, parliamentary monitoring, 
              and evidence-based advocacy.
            </p>
          </motion.div>
          
          {/* Mission Flow */}
          <div className="relative">
            {/* Mission Cards - Compact Layout */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white/20 border border-white/30 backdrop-blur-sm group">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Research Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-muted-foreground">
                      Conducting rigorous, evidence-based research to inform policy decisions and strengthen democratic governance.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white/20 border border-white/30 backdrop-blur-sm group">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Parliamentary Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-muted-foreground">
                      Ensuring accountability in legislative processes through comprehensive parliamentary oversight and monitoring.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white/20 border border-white/30 backdrop-blur-sm group">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Evidence-Based Advocacy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-muted-foreground">
                      Driving meaningful policy reforms through strategic advocacy grounded in solid research and data.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Focus Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We work across multiple domains to create positive change in Uganda's governance landscape through evidence-based research and advocacy.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Parliament Watch",
                description: "Monitoring parliamentary proceedings and ensuring accountability in legislative processes.",
                image: "/focus-areas/parliament-new.jpg",
                color: "blue"
              },
              {
                title: "Democracy & Governance",
                description: "Strengthening democratic institutions and promoting good governance practices.",
                image: "/focus-areas/democracy.jpg",
                color: "yellow"
              },
              {
                title: "Transparency & Accountability",
                description: "Advocating for open government and holding leaders accountable to citizens.",
                image: "/focus-areas/transparency.jpg",
                color: "green"
              },
              {
                title: "Human Rights",
                description: "Protecting and promoting fundamental human rights and freedoms.",
                image: "/focus-areas/human-rights.jpg",
                color: "red"
              },
              {
                title: "Public Health & Safety",
                description: "Improving public health outcomes and road safety across Uganda.",
                image: "/focus-areas/health-new.jpg",
                color: "blue"
              },
              {
                title: "Climate Justice",
                description: "Addressing climate change impacts and promoting environmental sustainability.",
                image: "/focus-areas/climate-new.jpg",
                color: "green"
              }
            ].map((area, index) => {
              const colorClasses = {
                blue: "border-primary",
                yellow: "border-secondary", 
                green: "border-accent",
                red: "border-destructive"
              };
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${area.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                      <p className="text-sm text-white/90">{area.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="shadow-lg bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
              <Link href="/focus-areas">
                Explore All Focus Areas
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Latest Updates */}
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
              Latest Updates
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Stay informed with our latest research, publications, and policy insights that shape Uganda's governance landscape.
            </p>
          </motion.div>

          {latestLoading ? (
            <LoadingSpinner size="lg" className="py-12" />
          ) : latestError ? (
            <ErrorMessage 
              message={latestError} 
              onRetry={() => window.location.reload()} 
              className="py-12" 
            />
          ) : (
            <>
          
              {/* News Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-foreground">Latest News</h3>
                  <Button asChild variant="outline" className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-900 border border-blue-600/30 backdrop-blur-sm">
                    <Link href="/resources/news">View All News</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {latestData?.featured_news_articles?.slice(0, 3).map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link href={`/resources/news/${item.slug}`}>
                        <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm cursor-pointer">
                          <div 
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-2 py-1 rounded-full text-xs font-medium">{item.category}</Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="text-sm text-white font-medium bg-black/30 px-2 py-1 rounded-md">{item.date}</span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-lg font-bold mb-2 line-clamp-2">{item.title}</h3>
                            <p className="text-sm text-white/90 line-clamp-3">{item.description}</p>
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Blog Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-foreground">Latest Analysis</h3>
                  <Button asChild variant="outline" className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-900 border border-blue-600/30 backdrop-blur-sm">
                    <Link href="/resources/blog">View All Analysis</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {latestData?.featured_blog_posts?.slice(0, 3).map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link href={`/resources/blog/${item.slug}`}>
                        <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm cursor-pointer">
                          <div 
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-green-100 text-green-800 border-green-200 px-2 py-1 rounded-full text-xs font-medium">{item.category}</Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="text-sm text-white font-medium bg-black/30 px-2 py-1 rounded-md">{item.date}</span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-lg font-bold mb-2 line-clamp-2">{item.title}</h3>
                            <p className="text-sm text-white/90 line-clamp-3">{item.description}</p>
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Events Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-foreground">Upcoming Events</h3>
                  <Button asChild variant="outline" className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-900 border border-blue-600/30 backdrop-blur-sm">
                    <Link href="/resources/events">View All Events</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {latestData?.featured_events?.slice(0, 3).map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link href={`/resources/events/${item.slug}`}>
                        <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm cursor-pointer">
                          <div 
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 px-2 py-1 rounded-full text-xs font-medium">{item.category}</Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="text-sm text-white font-medium bg-black/30 px-2 py-1 rounded-md">{item.date}</span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-lg font-bold mb-2 line-clamp-2">{item.title}</h3>
                            <p className="text-sm text-white/90 line-clamp-3">{item.description}</p>
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Publications Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-foreground">Latest Publications</h3>
                  <Button asChild variant="outline" className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-900 border border-blue-600/30 backdrop-blur-sm">
                    <Link href="/resources/publications">View All Publications</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {latestData?.featured_publications?.slice(0, 3).map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
                        <div 
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                          style={{ backgroundImage: `url(${item.image || '/activities/parliamentary-training.jpg'})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-purple-100 text-purple-800 border-purple-200 px-2 py-1 rounded-full text-xs font-medium">{item.type}</Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="text-sm text-white font-medium bg-black/30 px-2 py-1 rounded-md">{item.date}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-lg font-bold mb-2 line-clamp-2">{item.title}</h3>
                          <p className="text-sm text-white/90 line-clamp-3 mb-3">{item.description}</p>
                          {item.pdf && (
                            <Link 
                              href={item.pdf} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-blue-600/20 hover:bg-blue-600/30 text-white border border-blue-600/30 backdrop-blur-sm font-medium py-1 px-3 rounded-md transition-all duration-200 text-xs inline-block"
                            >
                              Download PDF
                            </Link>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
            Join Us in Building a Better Uganda
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-12 max-w-4xl mx-auto"
          >
            Whether through research, advocacy, or direct engagement, there are many ways to contribute to our mission of strengthening democratic governance and promoting transparency in Uganda.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button asChild size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-lg">
              <Link href="/get-involved#donate">
                Donate Now
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-lg">
              <Link href="/get-involved#careers">
                Explore Careers
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;