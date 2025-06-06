// src/components/Projects.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projectsData } from '@/data/projectData';

const Projects = () => {
  return (
    <div className="px-8 py-16 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Başlık ve Açıklama */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of projects I've worked on, showcasing different technologies
            and approaches to solving various problems.
          </p>
        </div>

        {/* Proje Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Teknolojiler */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {/* Butonlar */}
                <div className="flex gap-3">
                  {/* See Details butonu → /projects/:index rotasına gidecek */}
                  <Button size="sm" asChild>
                    <Link to={`/projects/${index}`} className="flex items-center">
                      See Details <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {/* GitHub butonu */}
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      GitHub <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
