import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";

const FocusAreas: React.FC = () => {
  const focusAreas = [
    {
      id: "parliament-watch",
      title: "Parliament Watch",
      icon: "🏛️",
      description: "Monitoring parliamentary proceedings and ensuring accountability in legislative processes.",
      details: "We track parliamentary sessions, analyze voting patterns, monitor committee activities, and assess the quality of legislative debates to ensure transparency and accountability in Uganda's parliament.",
      activities: [
        "Real-time monitoring of parliamentary sessions",
        "Analysis of voting patterns and attendance",
        "Committee oversight and reporting",
        "Legislative impact assessments"
      ]
    },
    {
      id: "democracy",
      title: "Parliamentary Democracy and Governance",
      icon: "🗳️",
      description: "Strengthening democratic institutions and promoting good governance practices.",
      details: "We work to enhance democratic processes, improve institutional capacity, and promote participatory governance at all levels of government.",
      activities: [
        "Democratic institution strengthening",
        "Electoral process monitoring",
        "Governance capacity building",
        "Citizen participation enhancement"
      ]
    },
    {
      id: "transparency",
      title: "Transparency and Accountability",
      icon: "🔍",
      description: "Advocating for open government and holding leaders accountable to citizens.",
      details: "We promote transparency in government operations, advocate for access to information, and work to ensure public officials are held accountable for their actions.",
      activities: [
        "Access to information advocacy",
        "Public expenditure tracking",
        "Anti-corruption initiatives",
        "Government transparency monitoring"
      ]
    },
    {
      id: "human-rights",
      title: "Human Rights",
      icon: "🤝",
      description: "Protecting and promoting fundamental human rights and freedoms.",
      details: "We monitor human rights violations, advocate for policy reforms, and work to ensure that all Ugandans can enjoy their fundamental rights and freedoms.",
      activities: [
        "Human rights monitoring and reporting",
        "Policy advocacy for rights protection",
        "Legal aid and support services",
        "Rights awareness campaigns"
      ]
    },
    {
      id: "health",
      title: "Public Health and Road Safety",
      icon: "🏥",
      description: "Improving public health outcomes and road safety across Uganda.",
      details: "We conduct research on public health issues, advocate for better healthcare policies, and work to improve road safety through evidence-based interventions.",
      activities: [
        "Public health policy research",
        "Healthcare system analysis",
        "Road safety advocacy",
        "Health awareness campaigns"
      ]
    },
    {
      id: "climate",
      title: "Climate Justice",
      icon: "🌱",
      description: "Addressing climate change impacts and promoting environmental sustainability.",
      details: "We research climate change impacts on Uganda, advocate for sustainable policies, and work with communities to build resilience against climate-related challenges.",
      activities: [
        "Climate impact assessments",
        "Environmental policy advocacy",
        "Community resilience building",
        "Sustainable development promotion"
      ]
    },
    {
      id: "ai",
      title: "Artificial Intelligence (AI)",
      icon: "🤖",
      description: "Leveraging technology and AI for better governance and policy outcomes.",
      details: "We explore how AI and technology can improve governance, enhance service delivery, and support evidence-based policy making in Uganda.",
      activities: [
        "AI policy research and analysis",
        "Technology governance frameworks",
        "Digital rights advocacy",
        "Innovation in public service delivery"
      ]
    },
    {
      id: "scrutiny",
      title: "Post Legislative Scrutiny",
      icon: "📋",
      description: "Assessing the effectiveness of laws and policies after implementation.",
      details: "We conduct systematic reviews of implemented policies and laws to assess their effectiveness, identify gaps, and recommend improvements for better outcomes.",
      activities: [
        "Policy effectiveness evaluations",
        "Legislative impact assessments",
        "Implementation monitoring",
        "Policy improvement recommendations"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section background="blue" className="text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Focus Areas
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            We work across multiple domains to create positive change in Uganda's governance landscape through evidence-based research and advocacy.
          </p>
        </div>
      </Section>

      {/* Focus Areas Grid */}
      <Section>
        <div className="space-y-16">
          {focusAreas.map((area, index) => (
            <div key={area.id} id={area.id} className="scroll-mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <div className="flex items-center mb-6">
                    <div className="text-5xl mr-4">{area.icon}</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {area.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    {area.description}
                  </p>
                  <p className="text-gray-700 mb-8">
                    {area.details}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Activities:</h3>
                    <ul className="space-y-2">
                      {area.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button href="/resources" variant="primary">
                    View Related Resources
                  </Button>
                </div>
                
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <Card className="p-8 h-full">
                    <div className="text-center">
                      <div className="text-8xl mb-6">{area.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                      <p className="text-gray-600 mb-6">{area.description}</p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-sm text-blue-800 font-medium">
                          Impact: Contributing to better governance and policy outcomes in Uganda
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="gray">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Interested in Our Work?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Learn more about our research, publications, and how you can get involved in advancing good governance in Uganda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/resources" variant="primary">
              View Our Resources
            </Button>
            <Button href="/get-involved" variant="outline">
              Get Involved
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FocusAreas;