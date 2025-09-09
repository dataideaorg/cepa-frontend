import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ params }) => {
  // Blog posts data - in a real app, this would come from a CMS or API
  const blogPosts = {
    "education-are-we-doing-a-good-job-with-our-children": {
      id: "education-are-we-doing-good-job-children",
      title: "Education: Are we doing a good job with our children?",
      date: "February 2022",
      category: "Education",
      image: "/blog/education-children.jpg",
      content: `
        <p><em>"The future belongs to young people with an education and an imagination to create" - Barack Obama</em></p>
        
        <p>As said by many renowned leaders, education plays a critical role in teaching the young people how they can lead in the future. Education is critical in ensuring human capital development for any country. For Uganda which majorly has a young population aged between 5-25 years, it is imperative that all learners return to school.</p>
        
        <p>It's the responsibility of both the Government and parents or caregivers to ensure that we prepare our children for their roles in building and shaping our world, the country, their communities, and neighborhoods.</p>
        
        <p>Unfortunately, the education sector in Uganda over the past two years has been under lock and key for fear of spreading COVID-19 sadly putting learners who make up at least 36.9% of the country's population at risk of ignorance and a vulnerable future.</p>
        
        <p>Without a proper plan of how these youngsters can catch up for the lost time, the country yet again finds itself at crossroads on whether a quick fix can't be found.</p>
        
        <p>When COVID-19 struck, it only exacerbated the burden of poverty, disease, and ignorance that Uganda has suffered since independence some sixty years ago. Experts warn that if the challenges occasioned by the lockdown on the education sector are not meaningfully dealt with, the situation will only get ugly.</p>
        
        <p>It should be noted that learners in neighboring countries like Kenya, Tanzania, and Rwanda were attending school while those in Uganda were still home wondering when they would resume.</p>
        
        <p>Pleas from parents, teachers, and different legislators urging the Government to open learning institutions were eventually heeded to as the Ministry of Education and Sports finally opened all schools on January 10, 2022.</p>
        
        <p>The schools, although now open, are still faced with difficulty since some of their buildings are in a deplorable state and the teachers cannot return to peanuts. It is said that for 2 years, some schools especially public schools still lack the basics to house the pupils and one wonders what planning was taking place for school reopening in the two years.</p>
        
        <p>Be that as it may, the school fees and requirements paying is back; after some of the parents lost jobs and businesses due to the pandemic, the majority of schools have turned them into a milking cow.</p>
        
        <p>As much as social media has been awash with pictures of children returning to school, many learners, especially those from humble backgrounds may never return to class.</p>
        
        <p>Even those that may have returned to school, there remains a lot of difficulty as most schools have increased tuition fees and added a list of other development fees such as toilet fees, chapel fees, school bus maintenance, Generator fees, functional fees, security fees, abnormal bank charges, among others to the list of requirements.</p>
        
        <p>According to the National Planning Authority, about 4.5m learners may not return to class. Owing to the financial challenges because of the lockdown which saw many businesses close, many learners were forced into employment to help reduce the burdens on their families while others got pregnant. Some were married off to allow their families to survive the harsh financial situation.</p>
        
        <p>Given that the Government has not clearly provided a framework that is going to ensure learners enjoy this right to education in the best way possible, in this piece I focus on the Government's part and role in ensuring the right to education.</p>
        
        <p>Some of the legislative foundations governing education provision in Uganda including; Education (pre-primary, primary and post-primary) Act, 2008 and the University and Other Tertiary Institutions Act, 2001 (tertiary education) state that "basic education shall be provided and enjoyed as a right by all persons".</p>
        
        <p>It's unfortunate that Uganda's current budget expenditure on education is among the lowest in the region. During the last five years, the education expenditure as a share of the national budget has declined reaching 10% in the 2019/20 national budget.</p>
        
        <p>The allocation to the education sector is even projected to marginally decline by 0.9% in the financial year 2021/22 to UGX 3,647 billion from UGX 3,682 billion in 2020/21.</p>
        
        <p>While we acknowledge that the economy is struggling, Government should prioritize education and solicit resources to finance this sector. With so many learners feared to not return to school, Government should be working around the clock to see to it that learners are assisted.</p>
        
        <p>Recently the Parliament of Uganda passed a motion allowing Government to borrow $90m from the International Development Association World Bank Group to finance the Uganda Secondary School Education Expansion project, USSEEP.</p>
      `
    },
    "parliament-approving-decisions-for-all-the-wrong-reasons": {
      id: "parliament-approving-decisions-wrong-reasons",
      title: "Parliament Approving Decisions for all the Wrong Reasons",
      date: "March 2022",
      category: "Governance",
      image: "/blog/parliament-decisions.jpg",
      content: `
        <p>Parliamentary decision-making processes in Uganda have come under increasing scrutiny as concerns mount over the quality and rationale behind many legislative approvals. This analysis examines the factors contributing to suboptimal decision-making in Uganda's Parliament.</p>
        
        <p>One of the primary concerns is the lack of adequate time for proper deliberation on critical bills and policies. Many important pieces of legislation are rushed through the parliamentary process without sufficient opportunity for thorough analysis and stakeholder consultation.</p>
        
        <p>The absence of comprehensive impact assessments before voting on major policy decisions has become a recurring issue. Members of Parliament often make decisions based on limited information, leading to policies that may not achieve their intended objectives.</p>
        
        <p>Political party loyalty and pressure often override evidence-based decision-making. MPs frequently vote along party lines rather than considering the merits of individual proposals, regardless of their potential impact on citizens.</p>
        
        <p>Limited access to independent research and analysis further compounds the problem. Many MPs lack the resources and expertise to properly evaluate complex policy proposals, relying instead on party positions or superficial understanding.</p>
        
        <p>The role of civil society and expert input in the legislative process has been marginalized, reducing the quality of information available to decision-makers. This isolation from diverse perspectives limits the effectiveness of parliamentary oversight.</p>
        
        <p>To address these challenges, several recommendations emerge:</p>
        <ul class="list-disc pl-6 my-4 space-y-2">
          <li>Implement mandatory impact assessments for all major legislation</li>
          <li>Increase parliamentary research capacity and access to independent analysis</li>
          <li>Establish longer deliberation periods for complex bills</li>
          <li>Strengthen committee oversight and expert consultation processes</li>
          <li>Promote evidence-based decision-making through training and resources</li>
        </ul>
        
        <p>Improving parliamentary decision-making requires a comprehensive approach that addresses both structural and procedural challenges while promoting a culture of evidence-based policy formulation.</p>
      `
    },
    "data-protection-in-the-digital-age-an-analysis-of-ugandas-data-protection-and-privacy-bill-2015": {
      id: "data-protection-digital-age-analysis",
      title: "Data Protection in the Digital Age: An Analysis of Uganda's Data Protection and Privacy Bill 2015",
      date: "April 2022",
      category: "Digital Rights",
      image: "/blog/data-protection.jpg",
      content: `
        <p>As Uganda continues to digitize its economy and government services, the need for comprehensive data protection legislation has become increasingly urgent. This analysis examines the proposed Data Protection and Privacy Bill 2015 and its implications for digital rights in Uganda.</p>
        
        <p>The bill represents a significant step forward in establishing a legal framework for data protection, but several concerns remain regarding its implementation and scope. The legislation aims to regulate the collection, processing, and storage of personal data by both public and private entities.</p>
        
        <p>Key provisions of the bill include:</p>
        <ul class="list-disc pl-6 my-4 space-y-2">
          <li>Establishment of a Data Protection Authority to oversee compliance</li>
          <li>Requirements for data controllers to obtain consent before processing personal data</li>
          <li>Rights for data subjects to access, correct, and delete their personal information</li>
          <li>Penalties for non-compliance with data protection requirements</li>
          <li>Cross-border data transfer restrictions and safeguards</li>
        </ul>
        
        <p>However, several challenges remain in the current draft. The bill's broad exemptions for national security and public interest could potentially undermine individual privacy rights. Additionally, the proposed penalties may not be sufficient to deter violations by large corporations.</p>
        
        <p>The implementation timeline and resource allocation for the Data Protection Authority also raise concerns about the government's capacity to effectively enforce the legislation once enacted.</p>
        
        <p>Recommendations for improving the bill include:</p>
        <ul class="list-disc pl-6 my-4 space-y-2">
          <li>Narrowing national security exemptions to prevent abuse</li>
          <li>Strengthening individual rights and remedies</li>
          <li>Ensuring adequate funding and independence for the regulatory authority</li>
          <li>Providing clear guidance for implementation across different sectors</li>
        </ul>
        
        <p>As Uganda moves forward with digital transformation, robust data protection legislation will be crucial for building public trust and ensuring that technological advancement benefits all citizens while protecting their fundamental rights.</p>
      `
    }
  };

  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested blog post could not be found.</p>
          <Button asChild className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-900 border border-blue-600/30 backdrop-blur-sm font-medium py-2 px-4 rounded-md transition-all duration-200">
            <Link href="/resources/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Education": "bg-primary/10 text-primary border-primary",
      "Governance": "bg-secondary/10 text-secondary border-secondary",
      "Digital Rights": "bg-accent/10 text-accent border-accent",
      "Road Safety": "bg-destructive/10 text-destructive border-destructive",
      "Health": "bg-primary/10 text-primary border-primary",
      "Youth": "bg-secondary/10 text-secondary border-secondary",
      "Budget Analysis": "bg-accent/10 text-accent border-accent",
      "Public Finance": "bg-destructive/10 text-destructive border-destructive"
    };
    return colors[category] || "bg-muted text-muted-foreground border-muted";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
          <img 
          src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Badge className={`${getCategoryColor(post.category)} text-sm`}>
                {post.category}
              </Badge>
              <div className="flex items-center text-white/80 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button asChild className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-900 border border-blue-600/30 backdrop-blur-sm font-medium py-2 px-4 rounded-md transition-all duration-200 mb-8">
              <Link href="/resources/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
          
          <article 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Badge className={`${getCategoryColor(post.category)} text-sm`}>
                  <Tag className="w-3 h-3 mr-1" />
                  {post.category}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Published on {post.date}
                </span>
              </div>
              <Button asChild className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-900 border border-blue-600/30 backdrop-blur-sm font-medium py-2 px-4 rounded-md transition-all duration-200">
                <Link href="/resources/blog">
                  View All Posts
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(blogPosts)
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost, index) => {
                const themeColors = ["border-primary", "border-secondary", "border-accent", "border-destructive"];
                const currentColor = themeColors[index % 4];
                
                return (
                  <div key={relatedPost.id} className="relative h-80 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${relatedPost.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${getCategoryColor(relatedPost.category)} text-xs`}>
                        {relatedPost.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-white/90 mb-3">
                        {relatedPost.date}
                      </p>
                      <Button asChild size="sm" className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm font-medium py-1 px-3 rounded-md transition-all duration-200">
                        <Link href={`/resources/blog/${relatedPost.id}`}>
                          Read More
              </Link>
            </Button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
