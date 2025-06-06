
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Globe, Cpu, Search, Gamepad } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const skills = [
    { icon: Code, name: 'Frontend Development', desc: 'React, TypeScript, Tailwind CSS' },
    { icon: Database, name: 'Backend Development', desc: 'Node.js, Python, SQL' },
    { icon: Gamepad, name: 'Game Development', desc: 'Unity, Cocos Creator, Canvas API, p5.js, PIXI, Playcanvas' },
    { icon: Search, name: 'Web Scraping', desc: 'Selenium, BeautifulSoup' },
    { icon: Cpu, name: 'Entry-level AI', desc: 'TensorFlow, PyTorch' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="px-8 py-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Beating depression with code; crafting bugs and fixing them.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Now in the final stretch of my university studies, I tackle project challenges with an analytical mindset and a passion for crafting creative solutions. Rather than embracing the “developer” label, I choose to identify as a “computer engineer,” a title that better reflects my technical expertise and engineering approach.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link to="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/omerfcinoglu" target='blank'>GitHub Profile</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-border mx-8" />

      {/* Skills Section */}
      <section className="px-8 py-16">
        <div className="max-w-7xl">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <skill.icon className="h-8 w-8 text-primary mb-4" />
                  <h2 className="font-semibold text-foreground mb-2">{skill.name}</h2>
                  <p className="text-sm text-muted-foreground">{skill.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-border mx-8" />

      {/* Contact Section */}
      <section className="px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8">
            I'm always interested in new opportunities and interesting projects.
            Feel free to reach out if you'd like to collaborate.
          </p>
          <div className="space-y-4">
            <div>
              <span className="text-sm font-medium text-foreground">Email</span>
              <p className="text-muted-foreground">omerfcinoglu@gmail.com</p>
            </div>
            <div>
              <span className="text-sm font-medium text-foreground">Location</span>
              <p className="text-muted-foreground">Ankara, Turkiye</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-border mx-8" />

      {/* Footer Section */}
      <section className="px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <p className="text-muted-foreground text-neutral-600 text-center italic">
            "7/24 veririz emek
          </p>
          <p className="text-neutral-600 text-center italic">
            Ne kadar yakışır alnıma ter,
          </p>
          <p className="text-neutral-600 mb-8 text-center italic">
            ellerim kir, gözlerim sel"
          </p>
        </div>
      </section>

    </div>
  );
};

export default Index;
