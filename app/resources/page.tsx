import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";

const Resources: React.FC = () => {
  const resourceCategories = [
    {
      id: "publications",
      title: "Publications",
      icon: "📚",
      description: "Comprehensive research reports, policy briefs, and analytical papers on governance and development issues.",
      items: [
        { title: "Annual Report 2024", date: "December 2024", type: "Report" },
        { title: "Parliamentary Oversight Mechanisms", date: "November 2024", type: "Policy Brief" },
        { title: "Climate Change and Governance", date: "October 2024", type: "Research Paper" }
      ]
    },
    {
      id: "news",
      title: "News",
      icon: "📰",
      description: "Latest updates on CEPA's activities, policy developments, and governance issues in Uganda.",
      items: [
        { title: "CEPA Launches New Research Initiative", date: "December 15, 2024", type: "News" },
        { title: "Parliamentary Session Analysis", date: "December 10, 2024", type: "Analysis" },
        { title: "Policy Forum on AI Governance", date: "December 5, 2024", type: "Event" }
      ]
    },
    {
      id: "upcoming-events",
      title: "Upcoming Events",
      icon: "📅",
      description: "Join us for conferences, workshops, and public forums on governance and policy issues.",
      items: [
        { title: "Governance Forum 2025", date: "January 20, 2025", type: "Conference" },
        { title: "AI Policy Workshop", date: "January 15, 2025", type: "Workshop" },
        { title: "Public Health Policy Roundtable", date: "January 10, 2025", type: "Roundtable" }
      ]
    },
    {
      id: "past-events",
      title: "Past Events",
      icon: "🎯",
      description: "Recordings and summaries of our previous events and activities.",
      items: [
        { title: "Transparency in Government Summit", date: "November 2024", type: "Summit" },
        { title: "Human Rights Advocacy Training", date: "October 2024", type: "Training" },
        { title: "Climate Justice Conference", date: "September 2024", type: "Conference" }
      ]
    },
    {
      id: "policy-briefs",
      title: "Policy Briefs",
      icon: "📋",
      description: "Concise, evidence-based policy recommendations for decision-makers and stakeholders.",
      items: [
        { title: "Strengthening Parliamentary Oversight", date: "December 2024", type: "Policy Brief" },
        { title: "Digital Rights in Uganda", date: "November 2024", type: "Policy Brief" },
        { title: "Healthcare Access and Equity", date: "October 2024", type: "Policy Brief" }
      ]
    },
    {
      id: "annual-reports",
      title: "Annual Reports",
      icon: "📊",
      description: "Comprehensive overviews of our work, impact, and achievements throughout the year.",
      items: [
        { title: "Annual Report 2024", date: "December 2024", type: "Annual Report" },
        { title: "Annual Report 2023", date: "December 2023", type: "Annual Report" },
        { title: "Impact Assessment 2024", date: "November 2024", type: "Assessment" }
      ]
    },
    {
      id: "blogs",
      title: "Blogs",
      icon: "✍️",
      description: "Insights, opinions, and analysis from our team on current governance and policy issues.",
      items: [
        { title: "The Future of Democracy in Uganda", date: "December 12, 2024", type: "Blog" },
        { title: "AI and Governance: Opportunities and Challenges", date: "December 8, 2024", type: "Blog" },
        { title: "Climate Change and Policy Making", date: "December 3, 2024", type: "Blog" }
      ]
    },
    {
      id: "articles",
      title: "Articles",
      icon: "📄",
      description: "In-depth articles and analysis on governance, policy, and development issues.",
      items: [
        { title: "Parliamentary Reform in East Africa", date: "December 2024", type: "Article" },
        { title: "Transparency and Accountability Mechanisms", date: "November 2024", type: "Article" },
        { title: "Human Rights and Development", date: "October 2024", type: "Article" }
      ]
    },
    {
      id: "newsletters",
      title: "Newsletters",
      icon: "📧",
      description: "Monthly updates on our activities, research findings, and policy developments.",
      items: [
        { title: "December 2024 Newsletter", date: "December 1, 2024", type: "Newsletter" },
        { title: "November 2024 Newsletter", date: "November 1, 2024", type: "Newsletter" },
        { title: "October 2024 Newsletter", date: "October 1, 2024", type: "Newsletter" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section background="blue" className="text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Resources
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Access our comprehensive collection of research publications, policy briefs, news updates, and event materials.
          </p>
        </div>
      </Section>

      {/* Resource Categories */}
      <Section>
        <div className="space-y-16">
          {resourceCategories.map((category, index) => (
            <div key={category.id} id={category.id} className="scroll-mt-20">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="text-5xl mr-4">{category.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} hover className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {item.type}
                      </span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="primary">
                  View All {category.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section background="gray">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest updates on our research, publications, and events.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button variant="primary">
              Subscribe
            </Button>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="blue" className="text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Need More Information?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Contact us for specific resources, research requests, or to learn more about our work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/get-involved#contact" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            Contact Us
          </Button>
          <Button href="/multimedia" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            View Multimedia
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Resources;