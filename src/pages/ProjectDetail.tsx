import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects, type Project } from '@/data/projects';
import { motion } from 'framer-motion';
import ImageLightbox from '@/components/ImageLightbox';

// Helper function to format text with markdown-like syntax
const formatDescription = (text: string) => {
  if (!text) return [];

  // Split into paragraphs (double newlines)
  return text.split('\n\n').map(paragraph => {
    // Check if paragraph is a list
    if (paragraph.trim().split('\n').every(line => line.trim().startsWith('- '))) {
      // It's a list, render as a list
      const listItems = paragraph.trim().split('\n').map(item => item.trim().substring(2));
      return { type: 'list', content: listItems };
    }

    // Regular paragraph
    return { type: 'paragraph', content: paragraph.trim() };
  });
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
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

  // Format the description
  const formattedDescription = formatDescription(project.description);

  return (
    <PageTransition>
      <Helmet>
        <title>{project.title} | 0xPatryk.dev</title>
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
              className="flex flex-wrap gap-4 mb-8"
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

              {project.telegramUrl && (
                <a
                  href={project.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 text-sm font-medium transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M21.5 4.5L2.5 12.5L11.5 14.5L14.5 21.5L21.5 4.5Z"></path>
                  </svg>
                  Telegram Bot
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 text-sm font-medium transition-all"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Demo
                </a>
              )}

              {project.additionalLinks && project.additionalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-sm font-medium transition-all"
                >
                  <ExternalLink size={16} className="mr-2" />
                  {link.label}
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              <div className="space-y-6 text-muted-foreground">
                {formattedDescription.map((block, index) => {
                  if (block.type === 'list') {
                    return (
                      <ul key={index} className="list-disc pl-6 space-y-2">
                        {(block.content as string[]).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    );
                  } else {
                    return (
                      <p key={index} className="whitespace-pre-line">
                        {block.content}
                      </p>
                    );
                  }
                })}
              </div>
            </motion.div>

            {project.videos && project.videos.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-16 mb-16"
              >
                <h2 className="text-2xl font-bold mb-8">Project Demos</h2>
                <div className="space-y-12">
                  {project.videos.map((video, index) => (
                    <motion.div
                      key={index}
                      className="rounded-xl overflow-hidden border border-border/40 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="aspect-[16/9] overflow-hidden">
                        <video
                          src={video.url}
                          controls
                          className="w-full h-full object-cover"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      {video.caption && (
                        <div className="p-5 bg-card">
                          <p className="text-base">{video.caption}</p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {project.screenshots && project.screenshots.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-16 mb-16"
              >
                <h2 className="text-2xl font-bold mb-8">Project Screenshots</h2>
                <div className="space-y-12">
                  {project.screenshots.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      className="rounded-xl overflow-hidden border border-border/40 shadow-lg cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      onClick={() => {
                        setLightboxIndex(index);
                        setLightboxOpen(true);
                      }}
                    >
                      <div className={`${screenshot.fit === 'contain' ? 'aspect-auto min-h-[300px]' : 'aspect-[16/9]'} overflow-hidden flex items-center justify-center bg-card/50`}>
                        <img
                          src={screenshot.url}
                          alt={screenshot.caption}
                          className={`w-full h-full ${screenshot.fit || 'object-cover'} hover:scale-105 transition-transform duration-500`}
                        />
                      </div>
                      {screenshot.caption && (
                        <div className="p-5 bg-card">
                          <p className="text-base">{screenshot.caption}</p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Lightbox component */}
            {project.screenshots && project.screenshots.length > 0 && (
              <ImageLightbox
                images={project.screenshots}
                initialIndex={lightboxIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
              />
            )}

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
