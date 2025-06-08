// src/components/ProjectDetail.tsx
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Project, projectsData } from '@/data/projectData';

const ProjectDetail: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const id = Number(projectId);

    if (isNaN(id) || id < 0 || id >= projectsData.length) {
        return <Navigate to="/projects" replace />;
    }

    const project: Project = projectsData[id];

    const renderPreview = (url: string) => {
        const lower = url.toLowerCase();
        if (lower.endsWith('.mp4') || lower.endsWith('.webm') || lower.endsWith('.ogg')) {
            return (
                <video
                    src={url}
                    loop
                    autoPlay
                    className="w-full h-auto max-h-[500px] object-contain bg-black rounded-md"
                />
            );
        }
        if (
            lower.endsWith('.gif') ||
            lower.endsWith('.jpg') ||
            lower.endsWith('.png') ||
            lower.endsWith('.jpeg')
        ) {
            return (
                <img
                    src={url}
                    alt={`${project.title} preview`}
                    className="w-full h-auto max-h-[500px] object-contain rounded-md"
                />
            );
        }
        return (
            <div className="relative w-full h-[0] pb-[56.25%]">
                <iframe
                    src={url}
                    className="absolute top-0 left-0 w-full h-full rounded-md"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    title={`${project.title} Preview`}
                />
            </div>
        );
    };

    return (
        <div className="px-8 py-16 animate-fade-in">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Proje Başlığı */}
                <h1 className="text-3xl font-bold text-foreground mb-1">{project.title}</h1>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                        </Badge>
                    ))}
                </div>
                <Button asChild>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                    >
                        View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                </Button>
                {/* Preview Kısmı */}
                <section className="w-full rounded-lg overflow-hidden shadow-md">
                    {renderPreview(project.previewUrl)}
                </section>

                {/* Geliştirme Notları ve Ek Notlar */}
                <section className="space-y-6">
                    <div className=" p-4 rounded-md">
                        {project.devNotes.split('\n').map((line, idx) =>
                            line.trim() ? (
                                <p key={idx + 1} className="text-sm text-foreground leading-relaxed">
                                    {line}
                                </p>
                            ) : (
                                <div key={idx + 1} className="h-2" />
                            )
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProjectDetail;
