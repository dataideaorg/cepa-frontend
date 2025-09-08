import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X } from 'lucide-react';

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilter: (filters: Record<string, string>) => void;
  searchPlaceholder?: string;
  filterOptions?: {
    category?: string[];
    type?: string[];
    status?: string[];
    featured?: boolean;
  };
  className?: string;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  onSearch,
  onFilter,
  searchPlaceholder = "Search...",
  filterOptions = {},
  className = ''
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...activeFilters };
    if (value === '') {
      delete newFilters[key];
    } else {
      newFilters[key] = value;
    }
    setActiveFilters(newFilters);
    onFilter(newFilters);
  };

  const clearFilters = () => {
    setActiveFilters({});
    onFilter({});
  };

  const hasActiveFilters = Object.keys(activeFilters).length > 0;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
            <Input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/20 border border-gray-300 backdrop-blur-sm focus:bg-white/30 focus:border-gray-400 transition-all duration-200"
            />
          </div>
          <Button 
            type="submit" 
            className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-900 border border-blue-600/30 backdrop-blur-sm font-medium py-3 px-6 rounded-md transition-all duration-200"
          >
            Search
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-900 border border-blue-600/30 backdrop-blur-sm font-medium py-3 px-6 rounded-md transition-all duration-200"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
      </form>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {Object.entries(activeFilters).map(([key, value]) => (
            <Badge
              key={key}
              variant="secondary"
              className="bg-primary/20 text-primary border border-primary/30"
            >
              {key}: {value}
              <button
                onClick={() => handleFilterChange(key, '')}
                className="ml-2 hover:text-destructive"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-gray-600 hover:text-gray-900 bg-white/10 hover:bg-white/20 border border-gray-300/30 hover:border-gray-400/50 transition-all duration-200"
          >
            Clear all
          </Button>
        </div>
      )}

      {/* Filter Options */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-white/10 border border-white/20 rounded-lg">
          {/* Category Filter */}
          {filterOptions.category && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={activeFilters.category || ''}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="w-full p-2 bg-white/20 border border-gray-300 backdrop-blur-sm focus:bg-white/30 focus:border-gray-400 transition-all duration-200 rounded-md"
              >
                <option value="">All Categories</option>
                {filterOptions.category.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          )}

          {/* Type Filter */}
          {filterOptions.type && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={activeFilters.type || ''}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="w-full p-2 bg-white/20 border border-gray-300 backdrop-blur-sm focus:bg-white/30 focus:border-gray-400 transition-all duration-200 rounded-md"
              >
                <option value="">All Types</option>
                {filterOptions.type.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          )}

          {/* Status Filter */}
          {filterOptions.status && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={activeFilters.status || ''}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="w-full p-2 bg-white/20 border border-gray-300 backdrop-blur-sm focus:bg-white/30 focus:border-gray-400 transition-all duration-200 rounded-md"
              >
                <option value="">All Status</option>
                {filterOptions.status.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          )}

          {/* Featured Filter */}
          {filterOptions.featured !== undefined && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Featured</label>
              <select
                value={activeFilters.featured || ''}
                onChange={(e) => handleFilterChange('featured', e.target.value)}
                className="w-full p-2 bg-white/20 border border-gray-300 backdrop-blur-sm focus:bg-white/30 focus:border-gray-400 transition-all duration-200 rounded-md"
              >
                <option value="">All Items</option>
                <option value="true">Featured Only</option>
                <option value="false">Non-Featured</option>
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
