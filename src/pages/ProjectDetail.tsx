
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects, type Project } from '@/data/projects';
import { motion } from 'framer-motion';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const foundProject = projects.find(p => p.slug === slug);
    
    if (foundProject) {
      setProject(foundProject);
      
      // Find related projects in the same category
      const related = projects
        .filter(p => p.category === foundProject.category && p.id !== foundProject.id)
        .slice(0, 3);
      
      setRelatedProjects(related);
    } else {
      // Redirect to portfolio if project not found
      navigate('/portfolio', { replace: true });
    }
  }, [slug, navigate]);
  
  if (!project) {
    return null; // Will redirect via useEffect
  }
  
  return (
    <PageTransition>
      <Helmet>
        <title>{project.title} | Alex.dev</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Portfolio
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {project.date}
                </div>
                <div className="flex items-center">
                  <Tag size={16} className="mr-1" />
                  {project.category === 'web3' ? 'Web3 & Blockchain' : 
                   project.category === 'automation' ? 'Automation & Scraping' : 
                   'Performance Engineering'}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 rounded-xl overflow-hidden border border-border/40 shadow-sm"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full aspect-video object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-4 mb-8"
            >
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-sm font-medium transition-all"
                >
                  <Github size={16} className="mr-2" />
                  View Code
                </a>
              )}
              
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium transition-all"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Live
                </a>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              <div className="space-y-4 text-muted-foreground">
                {project.description.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
            
            {relatedProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-16"
              >
                <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedProjects.map(relatedProject => (
                    <Link
                      key={relatedProject.id}
                      to={`/project/${relatedProject.slug}`}
                      className="bg-card rounded-lg overflow-hidden border border-border/40 shadow-sm hover:shadow transition-shadow group"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={relatedProject.imageUrl} 
                          alt={relatedProject.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-1">{relatedProject.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{relatedProject.shortDescription}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </PageTransition>
  );
}
