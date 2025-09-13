import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
          
          {/* Mission Flow */}
          <div className="relative">
            {/* Mission Cards - Compact Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              We work across multiple domains to create positive change in Uganda&apos;s governance landscape through evidence-based research and advocacy.
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
              return (
                <Card key={index} className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
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
              <Button asChild size="lg" className="shadow-lg bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
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
              Stay informed with our latest research, publications, and policy insights that shape Uganda&apos;s governance landscape.
            </p>
          </div>
          
          {/* Blog Posts */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Latest Blog Posts</h3>
              <Button asChild variant="outline" className="bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30">
                <Link href="/resources/blog">View All Blog Posts</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Education: Are we doing a good job with our children?",
                  date: "February 2022",
                  category: "Education",
                  description: "An analysis of Uganda's education sector challenges, particularly the impact of COVID-19 lockdowns on learners.",
                  image: "/blog/education-children.jpg",
                  href: "/resources/blog/education-are-we-doing-a-good-job-with-our-children"
                },
                {
                  title: "Parliament Approving Decisions for all the Wrong Reasons",
                  date: "March 2022",
                  category: "Governance",
                  description: "A critical examination of parliamentary decision-making processes and the need for evidence-based policy formulation.",
                  image: "/blog/parliament-decisions.jpg",
                  href: "/resources/blog/parliament-approving-decisions-for-all-the-wrong-reasons"
                },
                {
                  title: "Data Protection in the Digital Age",
                  date: "April 2022",
                  category: "Digital Rights",
                  description: "Analysis of Uganda's proposed data protection legislation and its implications for digital rights and privacy.",
                  image: "/blog/data-protection.jpg",
                  href: "/resources/blog/data-protection-in-the-digital-age-an-analysis-of-ugandas-data-protection-and-privacy-bill-2015"
                }
              ].map((post, index) => (
                <Card key={index} className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/10 text-primary border-primary text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h4>
                    <p className="text-sm text-white/90 mb-3">{post.date}</p>
                    <p className="text-sm text-white/80 mb-4 line-clamp-2">{post.description}</p>
                    <Button asChild size="sm" variant="outline" className="bg-white/20 text-white border border-white/30 hover:bg-white/30">
                      <Link href={post.href}>Read More</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Events */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Upcoming Events</h3>
              <Button asChild variant="outline" className="bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30">
                <Link href="/resources/events">View All Events</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Driving Policy into Action: CEPA Co-Convenes the 2025 Uganda Road Safety Conference",
                  date: "May 14-15, 2025",
                  category: "Conference",
                  location: "Kampala, Uganda",
                  description: "Bringing together policymakers, civil society organizations, and road safety experts to discuss innovative approaches.",
                  image: "/events/road-safety-conference.jpg",
                  href: "/resources/events/uganda-road-safety-conference-2025"
                },
                {
                  title: "Championing SRHR through Legislative Engagement: CEPA at the 16th NEAPACOH Meeting",
                  date: "March 5-8, 2025",
                  category: "Meeting",
                  location: "Dar es Salaam, Tanzania",
                  description: "Focusing on sexual and reproductive health rights advocacy and legislative engagement across East and Central Africa.",
                  image: "/events/neapacoh-meeting.jpg",
                  href: "/resources/events/neapacoh-meeting-tanzania-2025"
                },
                {
                  title: "Bridging Borders, Deepening Democracy: Ethiopia Civil Society Engagement Workshop",
                  date: "November 19, 2024",
                  category: "Workshop",
                  location: "Addis Ababa, Ethiopia",
                  description: "Comprehensive workshop on democratic engagement, policy advocacy, and cross-border collaboration in East Africa.",
                  image: "/events/ethiopia-workshop.jpg",
                  href: "/resources/events/ethiopia-civil-society-workshop-2024"
                }
              ].map((event, index) => (
                <Card key={index} className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary/10 text-secondary border-secondary text-xs">
                      {event.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-lg font-bold mb-2 line-clamp-2">{event.title}</h4>
                    <p className="text-sm text-white/90 mb-2">{event.date}</p>
                    <p className="text-xs text-white/80 mb-3">{event.location}</p>
                    <p className="text-sm text-white/80 mb-4 line-clamp-2">{event.description}</p>
                    <Button asChild size="sm" variant="outline" className="bg-white/20 text-white border border-white/30 hover:bg-white/30">
                      <Link href={event.href}>Learn More</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* News */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Latest News</h3>
              <Button asChild variant="outline" className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
                <Link href="/resources/news">View All News</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Ministry of Health Seeks UGX450Bn for Emergency Medical Services for Road Crash Victims",
                  date: "September 2023",
                  category: "Health",
                  description: "The Ministry of Health reveals Uganda needs UGX450Bn over 5 years to purchase and operationalize ambulances.",
                  image: "/news/health-emergency-services.jpg",
                  href: "/resources/news/ministry-of-health-seeks-ugx450bn-for-emergency-medical-services-for-road-crash-victims"
                },
                {
                  title: "World Remembrance Day For Road Traffic Victims Should be a Day to Propel Action",
                  date: "November 2023",
                  category: "Road Safety",
                  description: "CEPA calls for concrete action to address the growing road safety crisis and implement effective measures.",
                  image: "/news/road-safety-remembrance.jpg",
                  href: "/resources/news/world-remembrance-day-for-road-traffic-victims-should-be-a-day-to-propel-action"
                },
                {
                  title: "Financing Safer Roads: CEPA Rallies Stakeholders for Increased Road Safety Investment",
                  date: "July 2025",
                  category: "Road Safety",
                  description: "CEPA convenes key stakeholders to discuss strategies for increasing investment in road safety infrastructure.",
                  image: "/news/financing-safer-roads.jpg",
                  href: "/resources/news/financing-safer-roads-cepa-rallies-stakeholders-for-increased-road-safety-investment"
                }
              ].map((article, index) => (
                <Card key={index} className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent/10 text-accent border-accent text-xs">
                      {article.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-lg font-bold mb-2 line-clamp-2">{article.title}</h4>
                    <p className="text-sm text-white/90 mb-3">{article.date}</p>
                    <p className="text-sm text-white/80 mb-4 line-clamp-2">{article.description}</p>
                    <Button asChild size="sm" variant="outline" className="bg-white/20 text-white border border-white/30 hover:bg-white/30">
                      <Link href={article.href}>Read More</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Latest Publications</h3>
              <Button asChild variant="outline" className="bg-destructive/20 text-destructive border border-destructive/30 hover:bg-destructive/30">
                <Link href="/resources/publications">View All Publications</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Policy Brief: Advancing Democratic Governance: Leveraging Digital Tools for Inclusive Parliamentary Monitoring",
                  date: "2024",
                  category: "Governance",
                  type: "Policy Brief",
                  description: "Explores how digital tools can enhance parliamentary monitoring and democratic governance across Africa.",
                  pdf: "/publications/policy-brief-democratic-governance.pdf"
                },
                {
                  title: "Policy Paper: Analyzing the Practicability and Sustainability of Uganda's FY2024-25 Budget",
                  date: "2024",
                  category: "Public Finance",
                  type: "Policy Paper",
                  description: "Comprehensive analysis of Uganda's 2024-25 budget framework, examining its sustainability.",
                  pdf: "/publications/policy-paper-budget-analysis.pdf"
                },
                {
                  title: "Policy Paper: Strengthening Access to Information and Press Freedom in Uganda",
                  date: "2024",
                  category: "Transparency",
                  type: "Policy Paper",
                  description: "Strategic recommendations to enhance transparency and citizen participation in governance.",
                  pdf: "/publications/policy-paper-press-freedom.pdf"
                }
              ].map((publication, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm h-80 flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-primary/10 text-primary border-primary text-xs">
                        {publication.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{publication.date}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors line-clamp-3">
                      {publication.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {publication.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {publication.description}
                    </p>
                    <Button asChild size="sm" variant="secondary" className="w-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
                      <a href={publication.pdf} target="_blank" rel="noopener noreferrer">
                        Download PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{background: 'linear-gradient(to right, rgb(30 64 175), rgb(245 158 11), rgb(16 185 129), rgb(239 68 68))'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Us in Building a Better Uganda
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto">
            Whether through research, advocacy, or direct engagement, there are many ways to contribute to our mission of strengthening democratic governance and promoting transparency in Uganda.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-lg">
              <Link href="/get-involved/donate">
                Donate Now
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-lg">
              <Link href="/get-involved/career">
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
