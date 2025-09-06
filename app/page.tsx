import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Center for Policy Analysis
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Advancing parliamentary democracy, governance, and human rights in Uganda through evidence-based policy research and analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-lg">
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="shadow-lg">
                <Link href="/get-involved">
                  Get Involved
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              CEPA is dedicated to strengthening democratic governance, promoting transparency and accountability, 
              and advancing human rights in Uganda through rigorous policy research, parliamentary monitoring, 
              and evidence-based advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work across multiple domains to create positive change in Uganda's governance landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Parliament Watch",
                description: "Monitoring parliamentary proceedings and ensuring accountability in legislative processes.",
                icon: "🏛️",
                color: "blue"
              },
              {
                title: "Democracy & Governance",
                description: "Strengthening democratic institutions and promoting good governance practices.",
                icon: "🗳️",
                color: "yellow"
              },
              {
                title: "Transparency & Accountability",
                description: "Advocating for open government and holding leaders accountable to citizens.",
                icon: "🔍",
                color: "green"
              },
              {
                title: "Human Rights",
                description: "Protecting and promoting fundamental human rights and freedoms.",
                icon: "🤝",
                color: "red"
              },
              {
                title: "Public Health & Safety",
                description: "Improving public health outcomes and road safety across Uganda.",
                icon: "🏥",
                color: "blue"
              },
              {
                title: "Climate Justice",
                description: "Addressing climate change impacts and promoting environmental sustainability.",
                icon: "🌱",
                color: "green"
              }
            ].map((area, index) => {
              const colorClasses = {
                blue: "border-l-4 border-primary bg-blue-50/50",
                yellow: "border-l-4 border-secondary bg-yellow-50/50",
                green: "border-l-4 border-accent bg-green-50/50",
                red: "border-l-4 border-destructive bg-red-50/50"
              };
              
              return (
                <Card key={index} className={`hover:shadow-lg transition-shadow ${colorClasses[area.color as keyof typeof colorClasses]}`}>
                  <CardHeader>
                    <div className="text-3xl mb-2">{area.icon}</div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{area.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/focus-areas">
                Explore All Focus Areas
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Latest Updates
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest research, publications, and policy insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "New Policy Brief Released",
                description: "Our latest analysis on parliamentary oversight mechanisms in Uganda.",
                date: "December 2024",
                type: "Publication"
              },
              {
                title: "Upcoming Event: Governance Forum",
                description: "Join us for a discussion on strengthening democratic institutions.",
                date: "January 2025",
                type: "Event"
              },
              {
                title: "Annual Report 2024",
                description: "Comprehensive overview of our work and impact throughout the year.",
                date: "December 2024",
                type: "Report"
              }
            ].map((update, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{update.type}</Badge>
                    <span className="text-sm text-muted-foreground">{update.date}</span>
                  </div>
                  <CardTitle className="text-lg">{update.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{update.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/resources">
                View All Resources
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-yellow-500 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Building a Better Uganda
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Whether through research, advocacy, or direct engagement, there are many ways to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="shadow-lg">
              <Link href="/get-involved#donate">
                Donate Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 shadow-lg">
              <Link href="/get-involved#careers">
                Explore Careers
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/CEPA-LOGO.webp" 
                  alt="CEPA Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400">
                Center for Policy Analysis - Advancing governance and democracy in Uganda.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/focus-areas" className="text-gray-400 hover:text-white transition-colors">Focus Areas</Link></li>
                <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors">Resources</Link></li>
                <li><Link href="/get-involved" className="text-gray-400 hover:text-white transition-colors">Get Involved</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/resources#publications" className="text-gray-400 hover:text-white transition-colors">Publications</Link></li>
                <li><Link href="/resources#news" className="text-gray-400 hover:text-white transition-colors">News</Link></li>
                <li><Link href="/resources#events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
                <li><Link href="/multimedia" className="text-gray-400 hover:text-white transition-colors">Multimedia</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Kampala, Uganda</li>
                <li>info@cepa.or.ug</li>
                <li>+256 XXX XXX XXX</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Center for Policy Analysis. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
