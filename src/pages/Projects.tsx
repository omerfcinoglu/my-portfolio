import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { projectsData } from '@/data/projectData';

const categories = [
  { key: 'web', name: 'Web Development' },
  { key: 'game', name: 'Game Development' },
  { key: 'ai', name: 'AI Development' },
];

const groupedProjects = categories.map(cat => ({
  ...cat,
  projects: projectsData.filter(p => p.category === cat.key),
}));

const Projects = () => {
  return (
    <div className="px-8 py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of projects I've worked on, showcasing different technologies
            and approaches to solving various problems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groupedProjects.map((cat, idx) => (
            <Card key={cat.key} className="border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-foreground">{cat.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground mb-4">
                  {cat.projects.length} projects
                </div>
                <Link to={`/projects/category/${cat.key}`} className="flex items-center text-primary font-medium">
                  See Details <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;