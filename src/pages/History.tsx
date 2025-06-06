
import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const History = () => {
  const experiences = [
    {
      title: 'Freelance Web Scraping Developer',
      company: 'Upwork',
      location: 'Remote',
      period: '2021 (3–4 months)',
      description: 'Collaborated with clients on Upwork to perform web scraping tasks for various data extraction projects over a 3–4 month period.',
      technologies: ['BeautifulSoup', 'Python'],
    },
    {
      title: 'JavaScript Game Developer',
      company: 'Tiplay',
      location: 'Denizli',
      period: 'Jan 2022 - Dec 2023',
      description: 'Started as a Game Development apprentice and progressed to Junior Developer after three months; delivered five game projects using PlayCanvas, Cocos Creator, and the Canvas API, which strengthened my engineering aspirations.',
      technologies: ['JavaScript', 'PlayCanvas', 'Cocos Creator', 'Canvas API'],
    },
    {
      title: 'Intern',
      company: 'Exodus',
      location: 'Ankara',
      period: 'Dec 2024',
      description: 'Solidified AI fundamentals through project-based work during my university education; learned to integrate and customize machine learning models to meet specific requirements.',
      technologies: ['TensorFlow', 'PyTorch', 'Python'],
    },
    {
      title: 'JavaScript Game Developer',
      company: 'Sooplay',
      location: 'Elazig, Remote',
      period: 'Dec 2024',
      description: 'Developed advergames and interactive video experiences using Cocos Creator and the Canvas API.',
      technologies: ['JavaScript', 'Cocos Creator', 'Canvas API'],
    },
    {
      title: 'Software Engineer',
      company: 'Valiant Studio',
      location: 'Honduras, Remote',
      period: 'Nov 2024 - Present',
      description: 'Started as a Cocos game developer, then transitioned to frontend development with React; built a custom web editor to empower the studio team to create single-page landing websites without writing code, improving internal workflows and content production.',
      technologies: ['Cocos Creator', 'React', 'JavaScript'],
    },
  ];

  const education = [
    {
      degree: 'Computer Engineering',
      school: 'Kirikkale University',
      period: '2019 - Present',
      description: 'During the pandemic, I opted out of online classes and threw myself into software projects to secure job opportunities. I’m now completing the courses required for my engineering diploma.',
    },
    {
      degree: 'Mathematics',
      school: 'Ankara University',
      period: '2018 - Dropped Out',
    },
  ];

  return (
    <div className="px-8 py-16 animate-fade-in">
      <div className="max-w-4xl">
        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Work Experience</h2>
          <div className="space-y-6">
            {experiences.reverse().map((exp, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">{exp.title}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-col gap-2 text-muted-foreground">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Separator */}
        <div className="w-full h-px bg-border mb-12" />

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">{edu.degree}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-col gap-2 text-muted-foreground">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        {edu.school}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.period}
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;
