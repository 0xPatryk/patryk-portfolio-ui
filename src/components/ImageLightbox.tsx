import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageLightboxProps {
  images: { url: string; caption: string; fit?: string }[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageLightbox({ images, initialIndex, isOpen, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  useEffect(() => {
    // Update index when initialIndex prop changes
    setCurrentIndex(initialIndex);
  }, [initialIndex]);
  
  useEffect(() => {
    // Handle keyboard navigation
    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          navigateToPrevious();
          break;
        case 'ArrowRight':
          navigateToNext();
          break;
        case 'Escape':
          onClose();
          break;
      }
    }
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);
  
  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  const navigateToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const navigateToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  if (!isOpen) return null;
  
  const currentImage = images[currentIndex];
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          
          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateToPrevious();
                }}
                className="absolute left-4 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateToNext();
                }}
                className="absolute right-4 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          
          {/* Image container */}
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[90vh] max-w-[90vw] mx-auto flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={currentImage.url} 
              alt={currentImage.caption || ''}
              className={`max-h-[85vh] max-w-full mx-auto ${currentImage.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
            />
            
            {currentImage.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white text-center">
                <p>{currentImage.caption}</p>
                <p className="text-sm text-gray-300 mt-1">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 