"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { MapPin, Clock, Users, Briefcase, GraduationCap, Award, Calendar, ExternalLink, Mail, Bell } from "lucide-react";

const Career: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src="/hero/career-hero.jpg" 
          alt="Career & Internships - CEPA"
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
              Career & Internships
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Join our team of dedicated professionals working to strengthen governance, democracy, and policy analysis in Uganda and East Africa.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
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
              Why Work With CEPA?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Be part of a dynamic team that's making a real difference in Uganda's governance and development landscape.
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
                image: "/images/meaningful-impact.jpg",
                title: "Meaningful Impact",
                description: "Work on projects that directly contribute to strengthening governance and democracy in Uganda."
              },
              {
                image: "/images/regional-influence.jpg",
                title: "Regional Influence",
                description: "Be part of research and advocacy that shapes policy across East Africa and beyond."
              },
              {
                image: "/images/learning-environment.jpg",
                title: "Learning Environment",
                description: "Continuous professional development and opportunities to work with leading experts."
              },
              {
                image: "/images/collaborative-culture.jpg",
                title: "Collaborative Culture",
                description: "Work in a supportive, inclusive environment that values diverse perspectives and ideas."
              },
              {
                image: "/images/innovation-focus.jpg",
                title: "Innovation Focus",
                description: "Be at the forefront of innovative approaches to policy research and civic engagement."
              },
              {
                image: "/images/recognition.jpg",
                title: "Recognition",
                description: "Join an organization recognized for excellence in governance research and policy analysis."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${benefit.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{benefit.title}</h3>
                    <p className="text-sm text-white/90 line-clamp-3">{benefit.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Current Opportunities Status */}
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
              Current Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We're always looking for passionate individuals to join our team.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-12 text-center bg-white/20 border border-white/30 backdrop-blur-sm">
              <div className="text-6xl mb-6">📋</div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                No Current Openings
              </h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We don't have any open positions at the moment, but we're always interested in hearing from talented individuals who share our passion for governance and policy research.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                  <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Full-time Positions</h4>
                  <p className="text-sm text-muted-foreground">
                    Policy analysts, researchers, communications specialists, and administrative roles.
                  </p>
                </div>
                
                <div className="p-6 bg-secondary/10 rounded-lg border border-secondary/20">
                  <GraduationCap className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Internships</h4>
                  <p className="text-sm text-muted-foreground">
                    Research internships, communications internships, and program support roles.
                  </p>
                </div>
                
                <div className="p-6 bg-accent/10 rounded-lg border border-accent/20">
                  <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Fellowships</h4>
                  <p className="text-sm text-muted-foreground">
                    Research fellowships for experienced professionals and academics.
                  </p>
                </div>
                
                <div className="p-6 bg-destructive/10 rounded-lg border border-destructive/20">
                  <Users className="w-8 h-8 text-destructive mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Consultancies</h4>
                  <p className="text-sm text-muted-foreground">
                    Short-term consultancies for specific projects and research initiatives.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 shadow-lg"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Your CV
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white/20 text-foreground border border-white/30 hover:bg-white/30"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Get Notified
                </Button>
              </div>
            </Card>
          </motion.div>
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
            Ready to Make a Difference?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-12 max-w-4xl mx-auto"
          >
            Even though we don't have open positions right now, we're always interested in connecting with passionate individuals who share our commitment to strengthening governance and democracy in Uganda.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button asChild size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-lg">
              <Link href="/get-involved">
                Get Involved
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-lg">
              <Link href="/about">
                Learn About CEPA
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career;
