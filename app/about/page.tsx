import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src="/hero/about-hero.jpg" 
          alt="About CEPA - Center for Policy Analysis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About CEPA
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              The Centre for Policy Analysis (CEPA) is a leading think tank in Uganda dedicated to shaping public policy and strengthening democratic governance through high-quality research, collaboration, and citizen engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              The Centre for Policy Analysis (CEPA) is a leading think tank in Uganda dedicated to shaping public policy and strengthening democratic governance through high-quality research, collaboration, and citizen engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Evidence-Based Research</h3>
                    <p className="text-muted-foreground">We conduct rigorous, independent research to inform policy decisions and strengthen democratic governance in Uganda.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Collaborative Approach</h3>
                    <p className="text-muted-foreground">We work closely with parliamentarians, government officials, civil society, and citizens to drive meaningful reforms.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Parliament Watch Uganda</h3>
                    <p className="text-muted-foreground">Our flagship program empowers stakeholders to engage with legislative processes and promote transparency.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild size="lg" className="shadow-lg bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
                  <a href="/get-involved">Join Our Mission</a>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-white/20 border border-white/30 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years of Impact</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-white/20 border border-white/30 backdrop-blur-sm">
                <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Policy Reports</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-white/20 border border-white/30 backdrop-blur-sm">
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Stakeholders Engaged</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-white/20 border border-white/30 backdrop-blur-sm">
                <div className="text-3xl font-bold text-destructive mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Partner Organizations</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-16 bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              CEPA was established with a vision to create a more transparent, accountable, and democratic Uganda through rigorous policy research and advocacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-white/20 border border-white/30 backdrop-blur-sm">
              <CardHeader>
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To build a democratic society where governance systems and public institutions are transparent, accountable, and responsive to the needs of all citizens.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-white/20 border border-white/30 backdrop-blur-sm">
              <CardHeader>
                <div className="text-4xl mb-4">⚖️</div>
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To shape public policy and strengthen democratic governance by delivering high-quality research, fostering collaboration, and empowering citizens to engage meaningfully with decision-making processes.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-white/20 border border-white/30 backdrop-blur-sm">
              <CardHeader>
                <div className="text-4xl mb-4">🌟</div>
                <CardTitle className="text-xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Integrity, independence, excellence, and commitment to democratic principles guide all our work and interactions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Sets CEPA Apart */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Sets CEPA Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              CEPA distinguishes itself through innovative approaches and collaborative methodologies that drive meaningful change in Uganda's governance landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-white/20 border border-white/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-primary">A Unique Consortium Model</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  CEPA integrates the expertise and resources of various partner organizations, creating a robust platform for multi-disciplinary approaches to governance challenges.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow bg-white/20 border border-white/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">Thought Leadership and Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  As a pioneer in legislative research and public policy, CEPA uses cutting-edge tools like Artificial Intelligence (AI) and civic technologies to enhance its impact and citizen engagement.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow bg-white/20 border border-white/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-accent">Collaborative Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Through its flagship programs, such as Parliament Watch Uganda, CEPA empowers stakeholders—parliamentarians, civil society, and citizens alike—to engage with legislative processes and drive meaningful reforms.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow bg-white/20 border border-white/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-destructive">Evidence-Based Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  CEPA combines rigorous research with a deep understanding of Uganda's political economy, enabling it to navigate complex policy landscapes and offer practical solutions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section id="objectives" className="py-16 bg-gradient-to-br from-yellow-50 via-green-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Objectives
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work towards achieving specific goals that align with our mission of strengthening democratic governance in Uganda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Enhance parliamentary oversight and accountability mechanisms",
              "Promote transparency in government operations and decision-making",
              "Strengthen human rights protection and advocacy",
              "Improve public health and road safety outcomes",
              "Advance climate justice and environmental sustainability",
              "Leverage technology and AI for better governance",
              "Conduct post-legislative scrutiny to assess policy effectiveness",
              "Build capacity of civil society and government institutions"
            ].map((objective, index) => {
              const colorClasses = {
                0: "border-primary",
                1: "border-secondary", 
                2: "border-accent",
                3: "border-destructive"
              };
              const borderColor = colorClasses[index % 4 as keyof typeof colorClasses];
              
              return (
                <Card key={index} className="p-6 bg-white/20 border border-white/30 backdrop-blur-sm">
                  <CardContent className="flex items-start space-x-4 p-0">
                    <Badge variant="secondary" className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center p-0">
                      {index + 1}
                    </Badge>
                    <p className="text-foreground">{objective}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Activities */}
      <section id="activities" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore some of our recent and ongoing activities advancing policy, governance, and civic engagement in Uganda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/activities/activity1.jpg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Link href="/activities/financing-safer-roads-cepa-rallies-stakeholders-for-increased-road-safety-investment" className="font-semibold text-white hover:text-yellow-300 text-lg">
                  Financing Safer Roads: CEPA Rallies Stakeholders for Increased Road Safety Investment
                </Link>
              </div>
            </Card>
            
            <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/activities/activity2.jpg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Link href="/activities/reclaiming-civic-space-ahead-of-2026-cepa-hosts-high-level-dialogue-on-rights-repression-and-reform" className="font-semibold text-white hover:text-yellow-300 text-lg">
                  Reclaiming Civic Space Ahead of 2026: CEPA Hosts High-Level Dialogue on Rights, Repression, and Reform
                </Link>
              </div>
            </Card>
            
            <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/activities/activity3.jpg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Link href="/activities/shaping-ugandas-next-generation-of-policy-leaders-cepa-hosts-youth-mentorship-session-under-uplp" className="font-semibold text-white hover:text-yellow-300 text-lg">
                  Shaping Uganda's Next Generation of Policy Leaders: CEPA Hosts Youth Mentorship Session under UPLP
                </Link>
              </div>
            </Card>
            
            <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/activities/activity4.jpg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Link href="/activities/driving-policy-into-action-cepa-co-convenes-the-2025-uganda-road-safety-conference" className="font-semibold text-white hover:text-yellow-300 text-lg">
                  Driving Policy into Action: CEPA Co-Convenes the 2025 Uganda Road Safety Conference
                </Link>
              </div>
            </Card>
            
            <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/activities/activity5.jpg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Link href="/activities/positioning-africa-for-the-future-cepa-co-convenes-summit-on-ethical-and-inclusive-ai-at-the-2025-africa-ai-summit" className="font-semibold text-white hover:text-yellow-300 text-lg">
                  Positioning Africa for the Future: CEPA Co-Convenes Summit on Ethical and Inclusive AI at the 2025 Africa AI Summit
                </Link>
              </div>
            </Card>
            
            <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/activities/activity6.jpg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Link href="/activities/championing-srhr-through-legislative-engagement-cepa-at-the-16th-neapacoh-meeting-in-tanzania" className="font-semibold text-white hover:text-yellow-300 text-lg">
                  Championing SRHR through Legislative Engagement: CEPA at the 16th NEAPACOH Meeting in Tanzania
                </Link>
              </div>
            </Card>
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="shadow-lg bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
              <Link href="/activities">See All Activities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Funders and Partners */}
      <section id="partners" className="py-16 bg-gradient-to-br from-green-50 via-red-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Funders and Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are grateful for the support and collaboration of our key partners and funders.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
            {[
              { src: "/partners/grsp.png", alt: "GRSP Logo" },
              { src: "/partners/kas.png", alt: "KAS Logo" },
              { src: "/partners/cepa.webp", alt: "CEPA Logo" },
              { src: "/partners/upfya.jpg", alt: "UPFYA Logo" },
              { src: "/partners/twaweza.png", alt: "Twaweza Logo" },
              { src: "/partners/wfd.png", alt: "WFD Logo" },
              { src: "/partners/gapp.jpeg", alt: "GAPP Logo" },
              { src: "/partners/diakonia.jpeg", alt: "Diakonia Logo" },
              { src: "/partners/ned.jpeg", alt: "NED Logo" },
              { src: "/partners/afidep.jpg", alt: "AFIDEP Logo" }
            ].map((partner, index) => {
              const colorClasses = {
                0: "border-primary",
                1: "border-secondary", 
                2: "border-accent",
                3: "border-destructive"
              };
              const borderColor = colorClasses[index % 4 as keyof typeof colorClasses];
              
              return (
                <Card key={index} className="h-44 flex flex-col items-center justify-center p-6 hover:shadow-md transition-shadow bg-white/20 border border-white/30 backdrop-blur-sm">
                  <img src={partner.src} alt={partner.alt} className="h-16 object-contain max-w-full" />
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our dedicated team of professionals brings together diverse expertise in policy research, governance, and advocacy to drive CEPA's mission forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/team-images/timothy-chemonges.jpg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Chemonges M. Timothy</h3>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Executive Director
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" asChild className="bg-white/20 text-white border border-white/30 hover:bg-white/30 ml-4">
                    <a href="https://www.linkedin.com/in/timothy-chemonges-1a47a4173/?originalSubdomain=ug" target="_blank" rel="noopener noreferrer">
                      View Profile
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/team-images/angella-kemirembe.jpg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Angella Hilda Kemirembe</h3>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Communication Manager
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" asChild className="bg-white/20 text-white border border-white/30 hover:bg-white/30 ml-4">
                    <a href="https://www.linkedin.com/in/angella-hilda-kemirembe-35111a9b" target="_blank" rel="noopener noreferrer">
                      View Profile
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/team-images/joseph-tahinduka.jpg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Joseph Tahinduka</h3>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Programmes Officer
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" asChild className="bg-white/20 text-white border border-white/30 hover:bg-white/30 ml-4">
                    <a href="https://www.linkedin.com/in/tahinduka-joseph-8ba5401b5/" target="_blank" rel="noopener noreferrer">
                      View Profile
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/team-images/rebecca-karagwa.jpg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Rebecca Karagwa</h3>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Programmes Associate
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" asChild className="bg-white/20 text-white border border-white/30 hover:bg-white/30 ml-4">
                    <a href="https://www.linkedin.com/in/rebecca-karagwa-10a7b3133/" target="_blank" rel="noopener noreferrer">
                      View Profile
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/team-images/thembo-misairi.jpg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Thembo Kahungu Misairi</h3>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Team Member
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" asChild className="bg-white/20 text-white border border-white/30 hover:bg-white/30 ml-4">
                    <a href="https://x.com/themboka" target="_blank" rel="noopener noreferrer">
                      View Profile
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-white text-center" style={{background: 'linear-gradient(to right, rgb(30 64 175), rgb(245 158 11), rgb(16 185 129), rgb(239 68 68))'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Whether you're a researcher, policymaker, or concerned citizen, there are many ways to get involved with CEPA's work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-lg">
              <a href="/get-involved">Get Involved</a>
            </Button>
            <Button asChild size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-lg">
              <a href="/resources">View Our Work</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;