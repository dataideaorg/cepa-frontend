import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";

const GetInvolved: React.FC = () => {
  const involvementOptions = [
    {
      id: "careers",
      title: "Careers",
      icon: "💼",
      description: "Join our team of dedicated professionals working to strengthen governance in Uganda.",
      opportunities: [
        { title: "Senior Policy Analyst", type: "Full-time", location: "Kampala" },
        { title: "Research Associate", type: "Full-time", location: "Kampala" },
        { title: "Communications Officer", type: "Full-time", location: "Kampala" }
      ]
    },
    {
      id: "internship",
      title: "Internship",
      icon: "🎓",
      description: "Gain hands-on experience in policy research and governance work through our internship program.",
      opportunities: [
        { title: "Policy Research Intern", type: "6 months", location: "Kampala" },
        { title: "Communications Intern", type: "3 months", location: "Kampala" },
        { title: "Data Analysis Intern", type: "4 months", location: "Kampala" }
      ]
    },
    {
      id: "fellowship",
      title: "Fellowship",
      icon: "🎖️",
      description: "Join our fellowship program for experienced professionals looking to contribute to governance research.",
      opportunities: [
        { title: "Governance Research Fellow", type: "12 months", location: "Kampala" },
        { title: "Parliamentary Monitoring Fellow", type: "8 months", location: "Kampala" },
        { title: "Climate Policy Fellow", type: "10 months", location: "Kampala" }
      ]
    },
    {
      id: "announcements",
      title: "Announcements",
      icon: "📢",
      description: "Stay updated with our latest opportunities, events, and important announcements.",
      opportunities: [
        { title: "New Research Grant Opportunities", date: "December 20, 2024" },
        { title: "Upcoming Training Programs", date: "December 18, 2024" },
        { title: "Call for Research Proposals", date: "December 15, 2024" }
      ]
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: "📞",
      description: "Get in touch with us for inquiries, partnerships, or to learn more about our work.",
      opportunities: [
        { title: "General Inquiries", contact: "info@cepa.or.ug" },
        { title: "Partnership Opportunities", contact: "partnerships@cepa.or.ug" },
        { title: "Media Inquiries", contact: "media@cepa.or.ug" }
      ]
    },
    {
      id: "donate",
      title: "Donate",
      icon: "💝",
      description: "Support our mission to strengthen governance and democracy in Uganda through your contribution.",
      opportunities: [
        { title: "One-time Donation", amount: "Any amount" },
        { title: "Monthly Support", amount: "Recurring" },
        { title: "Corporate Partnership", amount: "Custom" }
      ]
    },
    {
      id: "membership",
      title: "Membership",
      icon: "👥",
      description: "Become a member of CEPA and join our community of governance advocates and researchers.",
      opportunities: [
        { title: "Individual Membership", type: "Annual", benefits: "Access to research, events" },
        { title: "Institutional Membership", type: "Annual", benefits: "Full access, collaboration" },
        { title: "Student Membership", type: "Annual", benefits: "Discounted rates, mentorship" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section background="blue" className="text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Involved
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Join us in our mission to strengthen democratic governance, transparency, and accountability in Uganda.
          </p>
        </div>
      </Section>

      {/* Involvement Options */}
      <Section>
        <div className="space-y-16">
          {involvementOptions.map((option, index) => (
            <div key={option.id} id={option.id} className="scroll-mt-20">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="text-5xl mr-4">{option.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {option.title}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {option.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {option.opportunities.map((opportunity, oppIndex) => (
                  <Card key={oppIndex} hover className="p-6 bg-white/20 border border-white/30 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{opportunity.title}</h3>
                    <div className="space-y-2 mb-4">
                      {opportunity.type && (
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Type:</span> {opportunity.type}
                        </p>
                      )}
                      {opportunity.location && (
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Location:</span> {opportunity.location}
                        </p>
                      )}
                      {opportunity.date && (
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Date:</span> {opportunity.date}
                        </p>
                      )}
                      {opportunity.contact && (
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Contact:</span> {opportunity.contact}
                        </p>
                      )}
                      {opportunity.amount && (
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Amount:</span> {opportunity.amount}
                        </p>
                      )}
                      {opportunity.benefits && (
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Benefits:</span> {opportunity.benefits}
                        </p>
                      )}
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
                      {option.id === 'donate' ? 'Donate Now' : 
                       option.id === 'contact' ? 'Contact Us' : 
                       'Learn More'}
                    </Button>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="primary">
                  {option.id === 'donate' ? 'Make a Donation' : 
                   option.id === 'contact' ? 'Get in Touch' : 
                   `View All ${option.title}`}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Get Involved */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Get Involved with CEPA?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join a community of dedicated individuals working to create positive change in Uganda's governance landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Make an Impact",
              description: "Contribute to meaningful change in Uganda's governance and policy landscape.",
              icon: "🎯"
            },
            {
              title: "Professional Growth",
              description: "Develop your skills in policy research, analysis, and advocacy.",
              icon: "📈"
            },
            {
              title: "Network Building",
              description: "Connect with like-minded professionals and experts in governance.",
              icon: "🤝"
            },
            {
              title: "Learning Opportunities",
              description: "Access to training, workshops, and research opportunities.",
              icon: "🎓"
            }
          ].map((benefit, index) => (
            <Card key={index} hover className="p-6 text-center bg-white/20 border border-white/30 backdrop-blur-sm">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Information */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Have questions about getting involved? We're here to help you find the best way to contribute to our mission.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center bg-white/20 border border-white/30 backdrop-blur-sm">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">info@cepa.or.ug</p>
              <Button variant="outline" size="sm">
                Send Email
              </Button>
            </Card>
            
            <Card className="p-6 text-center bg-white/20 border border-white/30 backdrop-blur-sm">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">+256 XXX XXX XXX</p>
              <Button variant="outline" size="sm">
                Call Now
              </Button>
            </Card>
            
            <Card className="p-6 text-center bg-white/20 border border-white/30 backdrop-blur-sm">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Kampala, Uganda</p>
              <Button variant="outline" size="sm">
                Get Directions
              </Button>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default GetInvolved;