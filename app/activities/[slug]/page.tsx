import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Activity data - in a real app, this would come from a CMS or database
const activities = {
  'financing-safer-roads-cepa-rallies-stakeholders-for-increased-road-safety-investment': {
    id: 'financing-safer-roads',
    title: 'Financing Safer Roads: CEPA Rallies Stakeholders for Increased Road Safety Investment',
    date: 'April 14, 2025',
    category: 'Road Safety',
    image: '/activities/activity1.jpg',
    content: `
      <p>On 14th April 2025, CEPA convened a high-level stakeholder dialogue focused on increasing government funding for road safety. With participation from MoFPED, MoWT, PAFROWS, and other key stakeholders, the dialogue addressed critical funding gaps in road safety interventions.</p>
      
      <h3>Key Objectives</h3>
      <ul>
        <li>Advocate for increased budgetary allocation for road safety programs</li>
        <li>Strengthen coordination between government agencies on road safety funding</li>
        <li>Develop sustainable financing mechanisms for road safety interventions</li>
        <li>Enhance stakeholder engagement in road safety policy implementation</li>
      </ul>
      
      <h3>Key Outcomes</h3>
      <p>The dialogue resulted in several key commitments from stakeholders:</p>
      <ul>
        <li>Ministry of Finance committed to reviewing road safety budget allocations</li>
        <li>Ministry of Works and Transport pledged to strengthen coordination mechanisms</li>
        <li>PAFROWS agreed to enhance advocacy efforts for road safety funding</li>
        <li>Development partners committed to supporting road safety financing initiatives</li>
      </ul>
      
      <h3>Next Steps</h3>
      <p>CEPA will continue to monitor progress on these commitments and provide technical support to stakeholders in implementing road safety financing strategies. The organization will also conduct follow-up assessments to evaluate the impact of increased funding on road safety outcomes.</p>
    `,
    relatedActivities: [
      {
        id: 'road-safety-conference',
        title: 'Driving Policy into Action: CEPA Co-Convenes the 2025 Uganda Road Safety Conference',
        date: 'May 16, 2025',
        image: '/activities/activity4.jpg',
        slug: 'driving-policy-into-action-cepa-co-convenes-the-2025-uganda-road-safety-conference'
      },
      {
        id: 'road-safety-action-plan',
        title: 'Uganda Launches the National Road Safety Action Plan 2022-2026',
        date: 'March 2025',
        image: '/activities/road-safety-plan.jpg',
        slug: 'uganda-launches-the-national-road-safety-action-plan-2022-2026'
      }
    ]
  },
  'reclaiming-civic-space-ahead-of-2026-cepa-hosts-high-level-dialogue-on-rights-repression-and-reform': {
    id: 'reclaiming-civic-space',
    title: 'Reclaiming Civic Space Ahead of 2026: CEPA Hosts High-Level Dialogue on Rights, Repression, and Reform',
    date: 'May 29, 2025',
    category: 'Democracy & Governance',
    image: '/activities/activity2.jpg',
    content: `
      <p>On 29th May 2025, CEPA co-hosted a high-level round table on civic space with ASF and international partners. The dialogue addressed rights violations, digital repression, and the shrinking civic space in Uganda ahead of the 2026 elections.</p>
      
      <h3>Dialogue Objectives</h3>
      <ul>
        <li>Assess the current state of civic space in Uganda</li>
        <li>Identify key challenges to democratic participation</li>
        <li>Develop strategies for protecting civic freedoms</li>
        <li>Strengthen collaboration among civil society organizations</li>
        <li>Address digital rights and online civic engagement challenges</li>
      </ul>
      
      <h3>Key Discussions</h3>
      <p>Participants engaged in robust discussions on various critical topics including:</p>
      <ul>
        <li>Legal and regulatory frameworks affecting civic space</li>
        <li>Digital rights and online civic engagement</li>
        <li>Protection mechanisms for human rights defenders</li>
        <li>Electoral reforms and democratic participation</li>
        <li>Media freedom and freedom of expression</li>
        <li>Civil society registration and operational challenges</li>
      </ul>
      
      <h3>Outcomes and Commitments</h3>
      <p>The dialogue resulted in several key outcomes:</p>
      <ul>
        <li>Formation of a civil society coalition for civic space protection</li>
        <li>Development of a joint advocacy strategy for democratic reforms</li>
        <li>Commitment to regular dialogue sessions on civic space issues</li>
        <li>Establishment of a rapid response mechanism for civic space violations</li>
        <li>Enhanced coordination between local and international partners</li>
        <li>Development of digital security guidelines for civil society organizations</li>
      </ul>
      
      <h3>Next Steps</h3>
      <p>CEPA will continue to monitor civic space developments and provide support to civil society organizations facing restrictions. The organization will also conduct follow-up assessments to evaluate the impact of the dialogue on civic space protection efforts.</p>
    `,
    relatedActivities: [
      {
        id: 'youth-mentorship',
        title: 'Shaping Uganda\'s Next Generation of Policy Leaders: CEPA Hosts Youth Mentorship Session under UPLP',
        date: 'May 24, 2025',
        image: '/activities/activity3.jpg',
        slug: 'shaping-ugandas-next-generation-of-policy-leaders-cepa-hosts-youth-mentorship-session-under-uplp'
      }
    ]
  },
  'shaping-ugandas-next-generation-of-policy-leaders-cepa-hosts-youth-mentorship-session-under-uplp': {
    id: 'youth-mentorship',
    title: 'Shaping Uganda\'s Next Generation of Policy Leaders: CEPA Hosts Youth Mentorship Session under UPLP',
    date: 'May 24, 2025',
    category: 'Youth Development',
    image: '/activities/activity3.jpg',
    content: `
      <p>On 24th May 2025, CEPA partnered with Lead Impact Hub to host a youth mentorship session under the Uganda Parliamentary Leadership Program (UPLP). The session aimed to empower young policy leaders and enhance their understanding of parliamentary processes.</p>
      
      <h3>Program Objectives</h3>
      <ul>
        <li>Enhance youth understanding of parliamentary processes</li>
        <li>Develop leadership skills among young policy advocates</li>
        <li>Foster mentorship relationships between experienced leaders and youth</li>
        <li>Strengthen youth participation in policy development</li>
      </ul>
      
      <h3>Session Activities</h3>
      <p>The mentorship session included various interactive activities:</p>
      <ul>
        <li>Panel discussions with experienced parliamentarians</li>
        <li>Workshops on policy analysis and advocacy</li>
        <li>Simulation exercises on parliamentary procedures</li>
        <li>Networking sessions with policy professionals</li>
      </ul>
      
      <h3>Impact and Outcomes</h3>
      <p>The session successfully achieved its objectives with participants reporting:</p>
      <ul>
        <li>Increased understanding of parliamentary processes</li>
        <li>Enhanced confidence in policy advocacy</li>
        <li>Established mentorship relationships</li>
        <li>Commitment to continued engagement in policy processes</li>
      </ul>
    `,
    relatedActivities: [
      {
        id: 'youth-business-forum',
        title: '3rd Youth Business Forum 2019',
        date: 'December 2019',
        image: '/activities/youth-forum.jpg',
        slug: '3rd-youth-business-forum-2019'
      },
      {
        id: 'national-youth-parliament',
        title: '7th National Youth Parliament: Youth-Led Advocacy in Legislation',
        date: 'November 2019',
        image: '/activities/youth-parliament.jpg',
        slug: '7th-national-youth-parliament-youth-led-advocacy-in-legislation'
      }
    ]
  }
};

interface ActivityPageProps {
  params: {
    slug: string;
  };
}

export default function ActivityPage({ params }: ActivityPageProps) {
  const activity = activities[params.slug as keyof typeof activities];

  if (!activity) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={activity.image} 
          alt={activity.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {activity.category}
              </Badge>
              <span className="text-white/80 text-sm">{activity.date}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {activity.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: activity.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Activities */}
      {activity.relatedActivities && activity.relatedActivities.length > 0 && (
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Related Activities
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore other CEPA activities that align with this initiative.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activity.relatedActivities.map((relatedActivity, index) => {
                const colorClasses = {
                  0: "border-primary",
                  1: "border-secondary", 
                  2: "border-accent",
                  3: "border-destructive"
                };
                const borderColor = colorClasses[index % 4 as keyof typeof colorClasses];
                
                return (
                  <Card key={relatedActivity.id} className={`relative h-80 overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 ${borderColor}`}>
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${relatedActivity.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-white/80">{relatedActivity.date}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-4 line-clamp-2">{relatedActivity.title}</h3>
                      <Button asChild size="sm" className="bg-white text-black hover:bg-white/90">
                        <Link href={`/activities/${relatedActivity.slug}`}>
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
      )}

      {/* Back to Activities */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/activities">
              ← Back to All Activities
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
