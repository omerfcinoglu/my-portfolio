
import React from 'react';
import { ExternalLink, Star, GitFork, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const GitHub = () => {
  const stats = [
    { label: 'Public Repositories', value: '42', icon: Code },
    { label: 'Total Stars', value: '234', icon: Star },
    { label: 'Forks', value: '89', icon: GitFork },
  ];

  const repositories = [
    {
      name: 'react-component-library',
      description: 'A collection of reusable React components with TypeScript support and comprehensive documentation.',
      language: 'TypeScript',
      stars: 87,
      forks: 23,
      url: 'https://github.com/example/react-component-library',
    },
    {
      name: 'node-api-boilerplate',
      description: 'Production-ready Node.js API boilerplate with authentication, validation, and testing setup.',
      language: 'JavaScript',
      stars: 156,
      forks: 45,
      url: 'https://github.com/example/node-api-boilerplate',
    },
    {
      name: 'css-animations-toolkit',
      description: 'A lightweight toolkit for creating smooth CSS animations and transitions.',
      language: 'CSS',
      stars: 92,
      forks: 18,
      url: 'https://github.com/example/css-animations-toolkit',
    },
    {
      name: 'python-data-processor',
      description: 'Efficient data processing utilities for handling large datasets with pandas and numpy.',
      language: 'Python',
      stars: 134,
      forks: 31,
      url: 'https://github.com/example/python-data-processor',
    },
  ];

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      TypeScript: 'bg-blue-500',
      JavaScript: 'bg-yellow-500',
      CSS: 'bg-purple-500',
      Python: 'bg-green-500',
    };
    return colors[language] || 'bg-gray-500';
  };

  return (
    <div className="px-8 py-16 animate-fade-in">
      <div className="max-w-6xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">GitHub Profile</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Explore my open source contributions and development activity on GitHub.
          </p>
          <Button asChild>
            <a 
              href="https://github.com/alexjohnson" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              View Full Profile <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Repositories */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Featured Repositories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repositories.map((repo, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center justify-between">
                    {repo.name}
                    <Button size="sm" variant="ghost" asChild>
                      <a 
                        href={repo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {repo.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)} mr-2`} />
                        {repo.language}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        {repo.stars}
                      </div>
                      <div className="flex items-center">
                        <GitFork className="h-3 w-3 mr-1" />
                        {repo.forks}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHub;
