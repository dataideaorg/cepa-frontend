// API configuration and utility functions
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export interface ApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  featured: boolean;
  content?: string;
  created_at: string;
  updated_at: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  featured: boolean;
  content?: string;
  created_at: string;
  updated_at: string;
}

export interface Publication {
  id: string;
  title: string;
  type: string;
  date: string;
  description: string;
  category: string;
  url?: string;
  pdf?: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  featured: boolean;
  status: 'upcoming' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface HomepageLatest {
  featured_blog_posts: BlogPost[];
  featured_news_articles: NewsArticle[];
  featured_publications: Publication[];
  featured_events: Event[];
}

// API utility function
async function apiRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
}

// Blog Posts API
export const blogApi = {
  getAll: (params?: {
    page?: number;
    page_size?: number;
    category?: string;
    featured?: boolean;
    search?: string;
    ordering?: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, value.toString());
        }
      });
    }
    const queryString = searchParams.toString();
    return apiRequest<ApiResponse<BlogPost>>(`/blog/${queryString ? `?${queryString}` : ''}`);
  },

  getFeatured: () => apiRequest<BlogPost[]>('/blog/featured/'),
  
  getBySlug: (slug: string) => apiRequest<BlogPost>(`/blog/by_slug/${slug}/`),
  
  getById: (id: string) => apiRequest<BlogPost>(`/blog/${id}/`),
};

// News Articles API
export const newsApi = {
  getAll: (params?: {
    page?: number;
    page_size?: number;
    category?: string;
    featured?: boolean;
    search?: string;
    ordering?: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, value.toString());
        }
      });
    }
    const queryString = searchParams.toString();
    return apiRequest<ApiResponse<NewsArticle>>(`/news/${queryString ? `?${queryString}` : ''}`);
  },

  getFeatured: () => apiRequest<NewsArticle[]>('/news/featured/'),
  
  getBySlug: (slug: string) => apiRequest<NewsArticle>(`/news/by_slug/${slug}/`),
  
  getById: (id: string) => apiRequest<NewsArticle>(`/news/${id}/`),
};

// Publications API
export const publicationsApi = {
  getAll: (params?: {
    page?: number;
    page_size?: number;
    type?: string;
    category?: string;
    featured?: boolean;
    search?: string;
    ordering?: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, value.toString());
        }
      });
    }
    const queryString = searchParams.toString();
    return apiRequest<ApiResponse<Publication>>(`/publications/${queryString ? `?${queryString}` : ''}`);
  },

  getFeatured: () => apiRequest<Publication[]>('/publications/featured/'),
  
  getById: (id: string) => apiRequest<Publication>(`/publications/${id}/`),
};

// Events API
export const eventsApi = {
  getAll: (params?: {
    page?: number;
    page_size?: number;
    category?: string;
    status?: string;
    featured?: boolean;
    search?: string;
    ordering?: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, value.toString());
        }
      });
    }
    const queryString = searchParams.toString();
    return apiRequest<ApiResponse<Event>>(`/events/${queryString ? `?${queryString}` : ''}`);
  },

  getFeatured: () => apiRequest<Event[]>('/events/featured/'),
  
  getUpcoming: () => apiRequest<Event[]>('/events/upcoming/'),
  
  getPast: () => apiRequest<Event[]>('/events/past/'),
  
  getBySlug: (slug: string) => apiRequest<Event>(`/events/by_slug/${slug}/`),
  
  getById: (id: string) => apiRequest<Event>(`/events/${id}/`),
};

// Homepage API
export const homepageApi = {
  getLatest: () => apiRequest<HomepageLatest>('/homepage/latest/'),
};
