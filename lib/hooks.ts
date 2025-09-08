import { useState, useEffect, useMemo } from 'react';
import { blogApi, newsApi, publicationsApi, eventsApi, homepageApi, ApiResponse, BlogPost, NewsArticle, Publication, Event, HomepageLatest } from './api';

export interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

// Generic hook for API calls
function useApi<T>(apiCall: () => Promise<T>, dependencies: any[] = []): UseApiState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return { data, loading, error, refetch: fetchData };
}

// Blog Posts Hooks
export function useBlogPosts(params?: {
  page?: number;
  page_size?: number;
  category?: string;
  featured?: boolean;
  search?: string;
  ordering?: string;
}) {
  const memoizedParams = useMemo(() => params, [
    params?.page,
    params?.page_size,
    params?.category,
    params?.featured,
    params?.search,
    params?.ordering
  ]);
  
  return useApi(() => blogApi.getAll(memoizedParams), [memoizedParams]);
}

export function useFeaturedBlogPosts() {
  return useApi(() => blogApi.getFeatured());
}

export function useBlogPostBySlug(slug: string) {
  return useApi(() => blogApi.getBySlug(slug), [slug]);
}

// News Articles Hooks
export function useNewsArticles(params?: {
  page?: number;
  page_size?: number;
  category?: string;
  featured?: boolean;
  search?: string;
  ordering?: string;
}) {
  const memoizedParams = useMemo(() => params, [
    params?.page,
    params?.page_size,
    params?.category,
    params?.featured,
    params?.search,
    params?.ordering
  ]);
  
  return useApi(() => newsApi.getAll(memoizedParams), [memoizedParams]);
}

export function useFeaturedNewsArticles() {
  return useApi(() => newsApi.getFeatured());
}

export function useNewsArticleBySlug(slug: string) {
  return useApi(() => newsApi.getBySlug(slug), [slug]);
}

// Publications Hooks
export function usePublications(params?: {
  page?: number;
  page_size?: number;
  type?: string;
  category?: string;
  featured?: boolean;
  search?: string;
  ordering?: string;
}) {
  const memoizedParams = useMemo(() => params, [
    params?.page,
    params?.page_size,
    params?.type,
    params?.category,
    params?.featured,
    params?.search,
    params?.ordering
  ]);
  
  return useApi(() => publicationsApi.getAll(memoizedParams), [memoizedParams]);
}

export function useFeaturedPublications() {
  return useApi(() => publicationsApi.getFeatured());
}

// Events Hooks
export function useEvents(params?: {
  page?: number;
  page_size?: number;
  category?: string;
  status?: string;
  featured?: boolean;
  search?: string;
  ordering?: string;
}) {
  const memoizedParams = useMemo(() => params, [
    params?.page,
    params?.page_size,
    params?.category,
    params?.status,
    params?.featured,
    params?.search,
    params?.ordering
  ]);
  
  return useApi(() => eventsApi.getAll(memoizedParams), [memoizedParams]);
}

export function useFeaturedEvents() {
  return useApi(() => eventsApi.getFeatured());
}

export function useUpcomingEvents() {
  return useApi(() => eventsApi.getUpcoming());
}

export function usePastEvents() {
  return useApi(() => eventsApi.getPast());
}

export function useEventBySlug(slug: string) {
  return useApi(() => eventsApi.getBySlug(slug), [slug]);
}

// Homepage Hook
export function useHomepageLatest() {
  return useApi(() => homepageApi.getLatest());
}
