import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Home: React.FC = () => {
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Center for Policy Analysis
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Advancing parliamentary democracy, governance, and human rights in Uganda through evidence-based policy research and analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-lg text-lg px-8 py-6 bg-secondary text-black hover:bg-secondary/90">
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
              <Button asChild size="lg" className="shadow-lg text-lg px-8 py-6 bg-accent text-black hover:bg-accent/90">
                <Link href="/get-involved">
                  Get Involved
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              CEPA is dedicated to strengthening democratic governance, promoting transparency and accountability, 
              and advancing human rights in Uganda through rigorous policy research, parliamentary monitoring, 
              and evidence-based advocacy.
            </p>
          </div>
          
          {/* Compact Mission Flow */}
          <div className="relative">
            {/* Animated Flow Connector */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 via-yellow-50 to-green-50 rounded-full px-8 py-4 border border-gray-200">
                {/* Research Icon */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full animate-pulse flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-primary hidden sm:inline">Research</span>
                </div>
                
                {/* Animated Arrow 1 */}
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary/40 rounded-full animate-ping"></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-primary/80 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                </div>
                
                {/* Monitoring Icon */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-secondary rounded-full animate-pulse flex items-center justify-center" style={{animationDelay: '0.5s'}}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-secondary hidden sm:inline">Monitoring</span>
                </div>
                
                {/* Animated Arrow 2 */}
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-secondary/40 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
                  <div className="w-2 h-2 bg-secondary/60 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>
                  <div className="w-2 h-2 bg-secondary/80 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Advocacy Icon */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-accent rounded-full animate-pulse flex items-center justify-center" style={{animationDelay: '1s'}}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-accent hidden sm:inline">Advocacy</span>
                </div>
              </div>
            </div>

            {/* Mission Cards - Compact Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-l-primary group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <CardTitle className="text-lg text-foreground">Research Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    Conducting rigorous, evidence-based research to inform policy decisions and strengthen democratic governance.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-yellow-50 to-yellow-100 border-l-4 border-l-secondary group">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-6 h-6 bg-secondary rounded-full"></div>
                  </div>
                  <CardTitle className="text-lg text-foreground">Parliamentary Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    Ensuring accountability in legislative processes through comprehensive parliamentary oversight and monitoring.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-l-accent group">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-6 h-6 bg-accent rounded-full"></div>
                  </div>
                  <CardTitle className="text-lg text-foreground">Evidence-Based Advocacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    Driving meaningful policy reforms through strategic advocacy grounded in solid research and data.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Focus Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We work across multiple domains to create positive change in Uganda's governance landscape through evidence-based research and advocacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Card key={index} className={`relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 ${colorClasses[area.color as keyof typeof colorClasses]}`}>
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
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/focus-areas">
                Explore All Focus Areas
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Latest Updates
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Stay informed with our latest research, publications, and policy insights that shape Uganda's governance landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "New Policy Brief Released",
                description: "Our latest analysis on parliamentary oversight mechanisms in Uganda.",
                date: "December 2024",
                type: "Publication",
                color: "blue"
              },
              {
                title: "Upcoming Event: Governance Forum",
                description: "Join us for a discussion on strengthening democratic institutions.",
                date: "January 2025",
                type: "Event",
                color: "yellow"
              },
              {
                title: "Annual Report 2024",
                description: "Comprehensive overview of our work and impact throughout the year.",
                date: "December 2024",
                type: "Report",
                color: "green"
              }
            ].map((update, index) => {
              const colorClasses = {
                blue: "border-l-4 border-primary bg-blue-50/50",
                yellow: "border-l-4 border-secondary bg-yellow-50/50",
                green: "border-l-4 border-accent bg-green-50/50"
              };
              
              return (
                <Card key={index} className={`hover:shadow-lg transition-shadow ${colorClasses[update.color as keyof typeof colorClasses]}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="font-medium">{update.type}</Badge>
                      <span className="text-sm text-muted-foreground font-medium">{update.date}</span>
                    </div>
                    <CardTitle className="text-xl text-foreground">{update.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground">{update.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/resources">
                View All Resources
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Us in Building a Better Uganda
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto">
            Whether through research, advocacy, or direct engagement, there are many ways to contribute to our mission of strengthening democratic governance and promoting transparency in Uganda.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="shadow-lg bg-secondary text-black hover:bg-secondary/90">
              <Link href="/get-involved#donate">
                Donate Now
              </Link>
            </Button>
            <Button asChild size="lg" className="shadow-lg bg-accent text-black hover:bg-accent/90">
              <Link href="/get-involved#careers">
                Explore Careers
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
