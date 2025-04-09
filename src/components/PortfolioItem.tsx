
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { type Project } from '@/data/projects';
import { motion } from 'framer-motion';
import InteractiveElement from './InteractiveElement';

interface PortfolioItemProps {
  project: Project;
}

export default function PortfolioItem({ project }: PortfolioItemProps) {
  return (
    <InteractiveElement className="h-full bg-card overflow-hidden rounded-xl border border-border/40 shadow-sm group">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <motion.div
          className="absolute top-2 right-2 flex gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={16} />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </motion.div>
      </div>

      <div className="p-6">
        <div className="flex gap-2 mb-3">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <h3 className="text-xl font-medium mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.shortDescription}</p>

        <Link
          to={`/project/${project.slug}`}
          className="inline-flex items-center text-sm font-medium text-brand-blue hover:text-brand-blue/80 transition-colors"
        >
          View Details
          <ArrowUpRight size={16} className="ml-1 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </InteractiveElement>
  );
}
