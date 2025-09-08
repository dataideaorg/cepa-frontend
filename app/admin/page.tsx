"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  FileText, 
  Newspaper, 
  Calendar, 
  BookOpen,
  Settings
} from 'lucide-react';
import FileUpload from '@/app/components/FileUpload';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in real implementation, this would come from API
  const stats = {
    blogPosts: 10,
    newsArticles: 10,
    publications: 6,
    events: 8,
    totalViews: 15420,
    featuredItems: 11
  };

  const recentItems = [
    { id: 1, type: 'blog', title: 'Education: Are we doing a good job with our children?', date: '2025-09-08', status: 'published' },
    { id: 2, type: 'news', title: 'Ministry of Health Seeks UGX450Bn for Emergency Medical Services', date: '2025-09-07', status: 'published' },
    { id: 3, type: 'publication', title: 'Policy Brief: Advancing Democratic Governance', date: '2025-09-06', status: 'published' },
    { id: 4, type: 'event', title: 'Uganda Road Safety Conference 2025', date: '2025-09-05', status: 'upcoming' },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <FileText className="w-4 h-4" />;
      case 'news': return <Newspaper className="w-4 h-4" />;
      case 'publication': return <BookOpen className="w-4 h-4" />;
      case 'event': return <Calendar className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800 border-green-200';
      case 'draft': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'upcoming': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-muted/50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
              <p className="text-muted-foreground mt-1">Manage CEPA content and resources</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-white/20 text-foreground border border-white/30 hover:bg-white/30">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
                <Plus className="w-4 h-4 mr-2" />
                New Content
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/20 border border-white/30">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white/30">Overview</TabsTrigger>
            <TabsTrigger value="blog" className="data-[state=active]:bg-white/30">Blog Posts</TabsTrigger>
            <TabsTrigger value="news" className="data-[state=active]:bg-white/30">News</TabsTrigger>
            <TabsTrigger value="publications" className="data-[state=active]:bg-white/30">Publications</TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-white/30">Events</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/20 border border-white/30 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">Blog Posts</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stats.blogPosts}</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-white/20 border border-white/30 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">News Articles</CardTitle>
                  <Newspaper className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stats.newsArticles}</div>
                  <p className="text-xs text-muted-foreground">+1 from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-white/20 border border-white/30 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">Publications</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stats.publications}</div>
                  <p className="text-xs text-muted-foreground">+3 from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-white/20 border border-white/30 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">Events</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stats.events}</div>
                  <p className="text-xs text-muted-foreground">+1 from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Items */}
            <Card className="bg-white/20 border border-white/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Content</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Latest additions and updates to the website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-white/10 border border-white/20 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {getTypeIcon(item.type)}
                        <div>
                          <p className="font-medium text-foreground">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blog Posts Tab */}
          <TabsContent value="blog" className="space-y-6">
            <Card className="bg-white/20 border border-white/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-foreground">Blog Posts Management</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Create, edit, and manage blog posts and analysis articles
                    </CardDescription>
                  </div>
                  <Button className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
                    <Plus className="w-4 h-4 mr-2" />
                    New Blog Post
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Blog Posts Management</h3>
                  <p className="text-muted-foreground mb-4">
                    Full CRUD operations for blog posts will be implemented here
                  </p>
                  <Button variant="outline" className="bg-white/20 text-foreground border border-white/30 hover:bg-white/30">
                    View All Blog Posts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* News Tab */}
          <TabsContent value="news" className="space-y-6">
            <Card className="bg-white/20 border border-white/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-foreground">News Articles Management</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Create, edit, and manage news articles and updates
                    </CardDescription>
                  </div>
                  <Button className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
                    <Plus className="w-4 h-4 mr-2" />
                    New News Article
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Newspaper className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">News Articles Management</h3>
                  <p className="text-muted-foreground mb-4">
                    Full CRUD operations for news articles will be implemented here
                  </p>
                  <Button variant="outline" className="bg-white/20 text-foreground border border-white/30 hover:bg-white/30">
                    View All News Articles
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Publications Tab */}
          <TabsContent value="publications" className="space-y-6">
            <Card className="bg-white/20 border border-white/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-foreground">Publications Management</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Create, edit, and manage research publications and policy briefs
                    </CardDescription>
                  </div>
                  <Button className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
                    <Plus className="w-4 h-4 mr-2" />
                    New Publication
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* File Upload Demo */}
                  <div className="border border-white/20 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Upload Publication PDF</h4>
                    <FileUpload
                      onFileSelect={(file) => console.log('Selected file:', file)}
                      accept=".pdf"
                      maxSize={20}
                      label="Publication PDF"
                      description="Upload PDF files up to 20MB"
                    />
                  </div>
                  
                  <div className="text-center py-8">
                    <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Publications Management</h3>
                    <p className="text-muted-foreground mb-4">
                      Full CRUD operations for publications will be implemented here
                    </p>
                    <Button variant="outline" className="bg-white/20 text-foreground border border-white/30 hover:bg-white/30">
                      View All Publications
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <Card className="bg-white/20 border border-white/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-foreground">Events Management</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Create, edit, and manage events, conferences, and workshops
                    </CardDescription>
                  </div>
                  <Button className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
                    <Plus className="w-4 h-4 mr-2" />
                    New Event
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Image Upload Demo */}
                  <div className="border border-white/20 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Upload Event Image</h4>
                    <FileUpload
                      onFileSelect={(file) => console.log('Selected image:', file)}
                      accept="image/*"
                      maxSize={5}
                      label="Event Image"
                      description="Upload images up to 5MB"
                    />
                  </div>
                  
                  <div className="text-center py-8">
                    <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Events Management</h3>
                    <p className="text-muted-foreground mb-4">
                      Full CRUD operations for events will be implemented here
                    </p>
                    <Button variant="outline" className="bg-white/20 text-foreground border border-white/30 hover:bg-white/30">
                      View All Events
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
