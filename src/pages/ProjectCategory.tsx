import { useParams, Link } from "react-router-dom";
import { projectsData } from "@/data/projectData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categories = {
    web: "Web Development",
    game: "Game Development",
    ai: "AI Development",
};

const ProjectCategory = () => {
    const { categoryKey } = useParams<{ categoryKey: string }>();
    // Filtrelenen projelerin index'ini bulmak için
    const filteredProjects = projectsData
        .map((project, idx) => ({ ...project, idx }))
        .filter(p => p.category === categoryKey);

    return (
        <div className="px-8 py-16 animate-fade-in">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">
                    {categories[categoryKey as keyof typeof categories] || "Projects"}
                </h1>
                <div className="grid grid-cols-1 gap-8">
                    {filteredProjects.map(project => (
                        <Link
                            key={project.title}
                            to={`/projects/${project.idx}`}
                            className="block hover:scale-[1.02] transition-transform"
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-2">{project.description}</p>
                                    <div className="text-xs text-muted-foreground mb-2">
                                        {project.tech.join(", ")}
                                    </div>
                                    <span className="text-primary underline">See Details</span>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCategory;