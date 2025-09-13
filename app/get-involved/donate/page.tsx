"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  CreditCard, 
  Smartphone, 
  Building2, 
  Users, 
  BookOpen, 
  Shield, 
  Globe,
  Star,
  Gift
} from "lucide-react";

export default function DonatePage() {
  const impactAreas = [
    {
      icon: Building2,
      title: "Democracy & Governance",
      description: "Support research and advocacy for stronger democratic institutions",
      impact: "Your donation helps fund policy research, civic education, and governance reforms"
    },
    {
      icon: Users,
      title: "Youth Development",
      description: "Empower young people to engage in policy and governance",
      impact: "Funds youth parliament programs, leadership training, and civic engagement initiatives"
    },
    {
      icon: BookOpen,
      title: "Research & Publications",
      description: "Advance evidence-based policy research and analysis",
      impact: "Support publication of policy briefs, research reports, and academic papers"
    },
    {
      icon: Shield,
      title: "Human Rights Advocacy",
      description: "Protect and promote human rights across Uganda",
      impact: "Fund legal aid, rights monitoring, and advocacy campaigns"
    },
    {
      icon: Globe,
      title: "Regional Impact",
      description: "Extend CEPA&apos;s influence across East Africa",
      impact: "Support regional policy initiatives and cross-border collaboration"
    }
  ];

  const successStories = [
    {
      title: "Youth Parliament Program",
      amount: "UGX 2,500,000",
      impact: "Supported 50 young leaders in policy advocacy training",
      description: "Your donations helped establish the 7th National Youth Parliament, empowering young voices in governance."
    },
    {
      title: "Road Safety Campaign",
      amount: "UGX 1,800,000",
      impact: "Reached 10,000+ people with road safety awareness",
      description: "Funded community road safety education and advocacy for better traffic regulations."
    },
    {
      title: "Health Rights Research",
      amount: "UGX 3,200,000",
      impact: "Published 5 policy briefs on health governance",
      description: "Supported research on malaria control and health policy development in Uganda."
    }
  ];

  const paymentMethods = [
    {
      icon: CreditCard,
      title: "Bank Transfer",
      description: "Direct bank transfer to CEPA account",
      details: "Account: 1234567890\nBank: Centenary Bank\nBranch: Kampala"
    },
    {
      icon: Smartphone,
      title: "Mobile Money",
      description: "Quick and secure mobile payments",
      details: "MTN: 0772 123 456\nAirtel: 0756 789 012\nEquity: 0789 456 123"
    },
    {
      icon: Building2,
      title: "Corporate Partnership",
      description: "Long-term partnership opportunities",
      details: "Contact us for corporate sponsorship and partnership programs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src="/hero/donate-hero.jpg" 
          alt="Support CEPA - Donate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Support Our Mission
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Your donation helps CEPA strengthen governance, promote democracy, and advance human rights across Uganda and East Africa.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Methods</h2>
            <p className="text-lg text-gray-600">Choose your preferred way to donate</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/20 border border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm text-gray-700 whitespace-pre-line">{method.details}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Impact Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where Your Donation Goes</h2>
            <p className="text-lg text-gray-600">Support specific areas of CEPA&apos;s work</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/20 border border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <area.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <div className="bg-green-50 p-3 rounded-md">
                      <p className="text-sm text-green-800 font-medium">{area.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact in Action</h2>
            <p className="text-lg text-gray-600">See how donations have made a difference</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                <Card className="bg-white/20 border border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Star className="w-6 h-6 text-yellow-500" />
                          <h3 className="text-2xl font-semibold text-gray-900">{story.title}</h3>
                          <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1 rounded-full text-sm font-medium">
                            {story.amount}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{story.description}</p>
                        <div className="bg-blue-50 p-4 rounded-md">
                          <p className="text-blue-800 font-medium">{story.impact}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
