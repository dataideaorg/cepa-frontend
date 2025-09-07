"use client";
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const activities = [
  {
    id: 'financing-safer-roads',
    title: 'Financing Safer Roads: CEPA Rallies Stakeholders for Increased Road Safety Investment',
    date: 'April 14, 2025',
    description: 'CEPA convened a high-level stakeholder dialogue focused on increasing government funding for road safety with participation from MoFPED, MoWT, PAFROWS, and other key stakeholders.',
    image: '/activities/activity1.jpg',
    category: 'Road Safety',
    slug: 'financing-safer-roads-cepa-rallies-stakeholders-for-increased-road-safety-investment'
  },
  {
    id: 'reclaiming-civic-space',
    title: 'Reclaiming Civic Space Ahead of 2026: CEPA Hosts High-Level Dialogue on Rights, Repression, and Reform',
    date: 'May 29, 2025',
    description: 'CEPA co-hosted a high-level round table dialogue focusing on civic space, human rights, and democratic reforms in preparation for the 2026 elections.',
    image: '/activities/activity2.jpg',
    category: 'Democracy & Governance',
    slug: 'reclaiming-civic-space-ahead-of-2026-cepa-hosts-high-level-dialogue-on-rights-repression-and-reform'
  },
  {
    id: 'youth-mentorship',
    title: 'Shaping Uganda\'s Next Generation of Policy Leaders: CEPA Hosts Youth Mentorship Session under UPLP',
    date: 'May 24, 2025',
    description: 'CEPA partnered with Lead Impact Hub to host a youth mentorship session under the Uganda Parliamentary Leadership Program, empowering young policy leaders.',
    image: '/activities/activity3.jpg',
    category: 'Youth Development',
    slug: 'shaping-ugandas-next-generation-of-policy-leaders-cepa-hosts-youth-mentorship-session-under-uplp'
  },
  {
    id: 'road-safety-conference',
    title: 'Driving Policy into Action: CEPA Co-Convenes the 2025 Uganda Road Safety Conference',
    date: 'May 16, 2025',
    description: 'CEPA co-convened the 2025 Uganda Road Safety Conference, bringing together policymakers, experts, and stakeholders to drive road safety policy implementation.',
    image: '/activities/activity4.jpg',
    category: 'Road Safety',
    slug: 'driving-policy-into-action-cepa-co-convenes-the-2025-uganda-road-safety-conference'
  },
  {
    id: 'ai-summit',
    title: 'Positioning Africa for the Future: CEPA Co-Convenes Summit on Ethical and Inclusive AI at the 2025 Africa AI Summit',
    date: 'May 15, 2025',
    description: 'CEPA co-convened a summit on ethical and inclusive AI at the 2025 Africa AI Summit, focusing on responsible AI development and governance.',
    image: '/activities/activity5.jpg',
    category: 'Technology & Innovation',
    slug: 'positioning-africa-for-the-future-cepa-co-convenes-summit-on-ethical-and-inclusive-ai-at-the-2025-africa-ai-summit'
  },
  {
    id: 'srhr-engagement',
    title: 'Championing SRHR through Legislative Engagement: CEPA at the 16th NEAPACOH Meeting in Tanzania',
    date: 'May 10, 2025',
    description: 'CEPA participated in the 16th NEAPACOH meeting in Tanzania, championing Sexual and Reproductive Health and Rights through legislative engagement.',
    image: '/activities/activity6.jpg',
    category: 'Health & Rights',
    slug: 'championing-srhr-through-legislative-engagement-cepa-at-the-16th-neapacoh-meeting-in-tanzania'
  },
  {
    id: 'road-safety-action-plan',
    title: 'Uganda Launches the National Road Safety Action Plan 2022-2026',
    date: 'March 2025',
    description: 'CEPA supported the launch of Uganda\'s National Road Safety Action Plan 2022-2026, a comprehensive framework for improving road safety outcomes.',
    image: '/activities/road-safety-plan.jpg',
    category: 'Road Safety',
    slug: 'uganda-launches-the-national-road-safety-action-plan-2022-2026'
  },
  {
    id: 'parliamentary-oversight',
    title: 'Enhancing Parliamentary Oversight: CEPA\'s Training on Systematic Reviews',
    date: 'February 2025',
    description: 'CEPA conducted training on systematic reviews for parliamentary staff to enhance oversight capabilities and evidence-based decision making.',
    image: '/activities/parliamentary-training.jpg',
    category: 'Parliamentary Development',
    slug: 'cepa-conducts-training-on-systematic-reviews'
  },
  {
    id: 'climate-crisis-brief',
    title: 'Launch of Climate Crisis Brief by CEPA and Twaweza Uganda',
    date: 'January 2025',
    description: 'CEPA and Twaweza Uganda launched a comprehensive climate crisis brief, providing policy recommendations for climate action in Uganda.',
    image: '/activities/climate-brief.jpg',
    category: 'Climate & Environment',
    slug: 'launch-of-climate-crisis-brief-by-cepa-and-twaweza-uganda'
  },
  {
    id: 'youth-business-forum',
    title: '3rd Youth Business Forum 2019',
    date: 'December 2019',
    description: 'CEPA hosted the 3rd Youth Business Forum, bringing together young entrepreneurs, policymakers, and business leaders to discuss youth economic empowerment.',
    image: '/activities/youth-forum.jpg',
    category: 'Youth Development',
    slug: '3rd-youth-business-forum-2019'
  },
  {
    id: 'national-youth-parliament',
    title: '7th National Youth Parliament: Youth-Led Advocacy in Legislation',
    date: 'November 2019',
    description: 'CEPA supported the 7th National Youth Parliament, empowering young people to engage in legislative processes and policy advocacy.',
    image: '/activities/youth-parliament.jpg',
    category: 'Youth Development',
    slug: '7th-national-youth-parliament-youth-led-advocacy-in-legislation'
  },
  {
    id: 'refugee-symposium',
    title: 'Refugee Management Symposium 2019',
    date: 'October 2019',
    description: 'CEPA co-hosted a refugee management symposium, bringing together stakeholders to discuss refugee rights and management policies in Uganda.',
    image: '/activities/refugee-symposium.jpg',
    category: 'Human Rights',
    slug: 'refugee-management-symposium-2019'
  },
  {
    id: 'road-safety-marathon',
    title: 'Road Safety Marathon in Honor of Road Traffic Crash Victims',
    date: 'March 2025',
    description: 'CEPA organized a road safety marathon to honor victims of road traffic crashes and raise awareness about road safety issues in Uganda.',
    image: '/activities/road-safety-marathon.jpg',
    category: 'Road Safety',
    slug: 'road-safety-marathon-in-honor-of-road-traffic-crash-victims'
  },
  {
    id: 'malaria-fight',
    title: 'High-Level Dialogue on the Domestication of the Malaria Fight in Uganda',
    date: 'February 2025',
    description: 'CEPA hosted a high-level dialogue on domesticating malaria fight strategies in Uganda, bringing together health experts and policymakers.',
    image: '/activities/malaria-dialogue.jpg',
    category: 'Health & Rights',
    slug: 'high-level-dialogue-on-the-domestication-of-the-malaria-fight-in-uganda'
  },
  {
    id: 'speed-regulations',
    title: 'Speed Management in Uganda: Insights from Validation Meetings on Speed Regulations',
    date: 'January 2025',
    description: 'CEPA conducted validation meetings on speed regulations in Uganda, gathering insights from stakeholders on effective speed management strategies.',
    image: '/activities/speed-regulations.jpg',
    category: 'Road Safety',
    slug: 'speed-management-in-uganda-insights-from-the-validation-meetings-on-the-speed-regulations'
  },
  {
    id: 'alcohol-control',
    title: 'Legislating for Public Health: CEPA\'s Call for Stronger Alcohol Control Policies at UAPC 2024',
    date: 'December 2024',
    description: 'CEPA advocated for stronger alcohol control policies at the Uganda Alcohol Policy Conference, emphasizing the need for evidence-based legislation.',
    image: '/activities/alcohol-control.jpg',
    category: 'Health & Rights',
    slug: 'legislating-for-public-health-cepas-call-for-stronger-alcohol-control-policies-at-uapc-2024'
  },
  {
    id: 'organ-donation-bill',
    title: 'CEPA Interfaces with Committee on Health on the Organ Donation and Transplant Bill 2021',
    date: 'November 2024',
    description: 'CEPA engaged with the Parliamentary Committee on Health to provide technical input on the Organ Donation and Transplant Bill 2021.',
    image: '/activities/organ-donation.jpg',
    category: 'Health & Rights',
    slug: 'cepa-interfaces-with-committee-on-health-on-the-organ-donation-and-transplant-bill-2021'
  }
];

const categories = ['All', 'Road Safety', 'Democracy & Governance', 'Youth Development', 'Technology & Innovation', 'Health & Rights', 'Parliamentary Development', 'Climate & Environment', 'Human Rights'];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src="/hero/activities-hero.jpg" 
          alt="Our Activities - CEPA"
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
              Our Activities
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Explore CEPA's comprehensive range of activities advancing policy analysis, governance, and civic engagement across Uganda and East Africa.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge 
                  variant={category === 'All' ? 'default' : 'secondary'}
                  className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
                    category === 'All' 
                      ? 'bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30' 
                      : 'bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30'
                  }`}
                >
                  {category}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Activities Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activities.map((activity, index) => {
              const colorClasses = {
                0: "border-primary",
                1: "border-secondary", 
                2: "border-accent",
                3: "border-destructive"
              };
              const borderColor = colorClasses[index % 4 as keyof typeof colorClasses];
              
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${activity.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                        {activity.category}
                      </Badge>
                      <span className="text-xs text-white/80">{activity.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{activity.title}</h3>
                    <p className="text-sm text-white/90 mb-4 line-clamp-2">{activity.description}</p>
                    <Button asChild size="sm" className="bg-white/20 text-white border border-white/30 hover:bg-white/30">
                      <Link href={`/activities/${activity.slug}`}>
                        Read More
                      </Link>
                    </Button>
                  </motion.div>
                </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Load More Button */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" className="shadow-lg bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
              Load More Activities
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
