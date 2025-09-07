import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const News: React.FC = () => {
  const newsArticles = [
    {
      id: "ministry-health-ugx450bn-emergency-services",
      title: "Ministry of Health Seeks UGX450Bn for Emergency Medical Services for Road Crash Victims",
      date: "September 2023",
      category: "Health",
      description: "The Ministry of Health has revealed that Uganda needs UGX450Bn over 5 years to purchase and operationalize ambulances to reduce road crash deaths. The call was made during an advocacy meeting organized by CEPA.",
      image: "/news/health-emergency-services.jpg",
      slug: "ministry-of-health-seeks-ugx450bn-for-emergency-medical-services-for-road-crash-victims",
      featured: true
    },
    {
      id: "world-remembrance-day-road-traffic-victims",
      title: "World Remembrance Day For Road Traffic Victims Should be a Day to Propel Action",
      date: "November 2023",
      category: "Road Safety",
      description: "As Uganda commemorates World Remembrance Day for Road Traffic Victims, CEPA calls for concrete action to address the growing road safety crisis and implement effective measures to reduce traffic-related deaths.",
      image: "/news/road-safety-remembrance.jpg",
      slug: "world-remembrance-day-for-road-traffic-victims-should-be-a-day-to-propel-action",
      featured: true
    },
    {
      id: "financing-safer-roads-stakeholders",
      title: "Financing Safer Roads: CEPA Rallies Stakeholders for Increased Road Safety Investment",
      date: "July 2025",
      category: "Road Safety",
      description: "CEPA convenes key stakeholders to discuss strategies for increasing investment in road safety infrastructure and programs across Uganda to reduce traffic accidents and fatalities.",
      image: "/news/financing-safer-roads.jpg",
      slug: "financing-safer-roads-cepa-rallies-stakeholders-for-increased-road-safety-investment",
      featured: true
    },
    {
      id: "parliamentary-committee-health-neapacoh",
      title: "16th Network of African Parliamentary Committees of Health (NEAPACOH) Meeting",
      date: "July 2025",
      category: "Health",
      description: "CEPA participates in the 16th NEAPACOH meeting, contributing to regional discussions on health policy and parliamentary oversight to improve healthcare delivery across Africa.",
      image: "/news/neapacoh-meeting.jpg",
      slug: "16th-network-of-african-parliamentary-committees-of-health-neapacoh",
      featured: false
    },
    {
      id: "road-safety-advocacy-continued",
      title: "Road Safety Advocacy: CEPA's Continued Commitment to Safer Roads",
      date: "July 2025",
      category: "Advocacy",
      description: "Ongoing advocacy efforts by CEPA to promote road safety policies and improve transportation infrastructure in Uganda through evidence-based research and stakeholder engagement.",
      image: "/news/road-safety-advocacy.jpg",
      slug: "road-safety-advocacy",
      featured: false
    },
    {
      id: "biotechnology-biosafety-uganda",
      title: "Biotechnology and Biosafety in Uganda: Utility in Transforming the Economy and Health Sector",
      date: "August 2023",
      category: "Health",
      description: "Analysis of Uganda's biotechnology and biosafety framework and its potential to transform the economy and health sector through innovative scientific solutions.",
      image: "/news/biotechnology-biosafety.jpg",
      slug: "biotechnology-and-biosafety-in-uganda-utility-in-transforming-the-economy-and-health-sector",
      featured: false
    },
    {
      id: "education-pregnant-students-rights",
      title: "Education: Uganda Registers Rights Progress for Pregnant Students but Barriers Remain",
      date: "June 2023",
      category: "Education",
      description: "While Uganda has made progress in protecting the rights of pregnant students to continue their education, significant barriers still exist that need to be addressed.",
      image: "/news/education-pregnant-students.jpg",
      slug: "education-uganda-registers-rights-progress-for-pregnant-students-but-barriers-remain",
      featured: false
    },
    {
      id: "national-road-safety-action-plan",
      title: "National Road Safety Action Plan 2022-2026",
      date: "March 2023",
      category: "Road Safety",
      description: "Analysis of Uganda's National Road Safety Action Plan 2022-2026 and its implementation strategies to reduce road traffic accidents and improve safety standards.",
      image: "/news/national-road-safety-plan.jpg",
      slug: "national-road-safety-action-plan-2022-2026",
      featured: false
    },
    {
      id: "parliamentary-pensions-amendment-bill",
      title: "Parliamentary Pensions Amendment Bill 2022",
      date: "February 2023",
      category: "Governance",
      description: "Analysis of the Parliamentary Pensions Amendment Bill 2022 and its implications for legislative accountability and pension management in Uganda.",
      image: "/news/parliamentary-pensions-bill.jpg",
      slug: "parliamentary-pensions-amendment-bill-2022",
      featured: false
    },
    {
      id: "computer-misuse-amendment-bill",
      title: "Computer Misuse Amendment Bill 2022",
      date: "August 2022",
      category: "Digital Rights",
      description: "Analysis of the Computer Misuse Amendment Bill 2022 and its implications for digital rights, freedom of expression, and cybersecurity in Uganda.",
      image: "/news/computer-misuse-bill.jpg",
      slug: "computer-misuse-amendment-bill-2022",
      featured: false
    }
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Stay informed with the latest news, updates, and insights from CEPA's work in policy analysis, governance, and advocacy across Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured News
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Latest updates and breaking news from CEPA's advocacy and research work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => article.featured).map((article, index) => {
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
        </div>
      </section>

      {/* All News */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              All News
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Complete collection of news articles, updates, and announcements from CEPA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => {
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{background: 'linear-gradient(to right, rgb(30 64 175), rgb(245 158 11), rgb(16 185 129), rgb(239 68 68))'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto">
            Subscribe to our newsletter to receive the latest news, updates, and policy insights directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
