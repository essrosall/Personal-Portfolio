import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const artworks = [
  {
    title: "Food Advertisement Campaign",
    description: "Vibrant promotional poster for restaurant menu launch",
    image: "/projects/gallery/artwork-1.png",
  },
  {
    title: "Minimalist Poster Design",
    description: "Clean, modern aesthetic poster with typography focus",
    image: "/projects/gallery/artwork-2.png",
  },
  {
    title: "Festival Pubmat",
    description: "Eye-catching event promotion material for summer festival",
    image: "/projects/gallery/artwork-3.png",
  },
  {
    title: "Product Launch Poster",
    description: "Dynamic design showcasing new tech product release",
    image: "/projects/gallery/artwork-4.png",
  },
  {
    title: "Beverage Advertising",
    description: "Colorful and refreshing advertisement design",
    image: "/projects/gallery/artwork-5.png",
  },
  {
    title: "Concert Promotion",
    description: "Bold typography and visual hierarchy for music event",
    image: "/projects/gallery/artwork-6.png",
  },
  {
    title: "Brand Identity Poster",
    description: "Cohesive visual system representing brand values",
    image: "/projects/gallery/artwork-7.png",
  },
  {
    title: "Social Media Campaign",
    description: "Creative series for multi-platform promotion",
    image: "/projects/gallery/artwork-8.png",
  },
];

export const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeViewer = () => {
    setSelectedArtwork(null);
    setSelectedIndex(null);
  };

  const nextArtwork = () => {
    if (selectedIndex === null) return;
    const nextIndex = (selectedIndex + 1) % artworks.length;
    setSelectedIndex(nextIndex);
    setSelectedArtwork(artworks[nextIndex]);
  };

  const prevArtwork = () => {
    if (selectedIndex === null) return;
    const prevIndex = (selectedIndex - 1 + artworks.length) % artworks.length;
    setSelectedIndex(prevIndex);
    setSelectedArtwork(artworks[prevIndex]);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (!selectedArtwork) return;

      if (event.key === "Escape") {
        closeViewer();
        return;
      }

      if (event.key === "ArrowRight") {
        nextArtwork();
      }

      if (event.key === "ArrowLeft") {
        prevArtwork();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedArtwork, selectedIndex]);

  return (
    <section id="gallery" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-[-4rem] w-96 h-96 bg-[var(--color-primary)]/7 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-2rem] w-80 h-80 bg-[var(--color-primary)]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in">
            Creative Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
            Random artworks &
            <span className="font-serif italic font-normal text-white">
              {" "}graphic designs.
            </span>
          </h2>
          <p className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
            A collection of posters, advertisements, and promotional materials. Each design tells a story and captures the essence of the brand or event it represents.
          </p>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {artworks.map((artwork, idx) => (
            <article
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in break-inside-avoid hover:shadow-[0_20px_60px_rgba(32,194,168,0.15)] transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${(idx % 3) * 100}ms` }}
              onClick={() => {
                setSelectedArtwork(artwork);
                setSelectedIndex(idx);
              }}
            >
              <div className="relative overflow-hidden aspect-auto">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

                <div className="absolute inset-0 flex flex-col items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-right">
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {artwork.title}
                    </h3>
                    <p className="text-xs text-[var(--color-muted-foreground)]">
                      Click to view
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors mb-1">
                  {artwork.title}
                </h3>
                <p className="text-xs text-[var(--color-muted-foreground)]">
                  {artwork.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Fullscreen Viewer */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-24 md:pt-28 px-4 pb-6"
          onClick={closeViewer}
        >
          <button
            type="button"
            onClick={closeViewer}
            className="absolute top-5 right-5 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all"
            aria-label="Close artwork viewer"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              prevArtwork();
            }}
            className="absolute left-5 top-1/2 -translate-y-1/2 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all"
            aria-label="Previous artwork"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextArtwork();
            }}
            className="absolute right-5 top-1/2 -translate-y-1/2 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all"
            aria-label="Next artwork"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-4xl max-h-[88vh] flex flex-col items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedArtwork.image}
              alt={selectedArtwork.title}
              className="max-w-full max-h-[74vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                {selectedArtwork.title}
              </h3>
              <p className="text-[var(--color-muted-foreground)]">
                {selectedArtwork.description}
              </p>
              <p className="text-xs text-white/70 mt-2">
                {selectedIndex !== null ? selectedIndex + 1 : 1} / {artworks.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
