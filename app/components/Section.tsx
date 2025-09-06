import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'blue';
  padding?: 'sm' | 'md' | 'lg';
}

const Section = ({ 
  children, 
  className = '', 
  background = 'white', 
  padding = 'lg' 
}: SectionProps) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-600'
  };
  
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16'
  };
  
  return (
    <section className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
