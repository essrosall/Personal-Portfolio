import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const artworks = [
  {
    title: "Blackpink Poster",
    description: "Fan-art poster composition with vibrant stage energy.",
    image: "/artworks/Blackpink-Poster.png",
  },
  {
    title: "Bowl Gogi",
    description: "Food promo artwork with bold layout and appetizing visuals.",
    image: "/artworks/BOWL-GOGI.png",
  },
  {
    title: "Bruno Mars Poster",
    description: "Concert-style poster focused on performance mood and contrast.",
    image: "/artworks/Bruno-Mars-Poster.png",
  },
  {
    title: "Dwight Ramos Poster",
    description: "Sports-themed visual featuring dynamic balance and rhythm.",
    image: "/artworks/Dwight-Ramos-Poster.png",
  },
  {
    title: "EYes",
    description: "Experimental typography and layered composition study.",
    image: "/artworks/EYes.png",
  },
  {
    title: "Father's Day Art",
    description: "Warm celebratory design with personal and emotional tone.",
    image: "/artworks/FATHER'S-DAY-ART.png",
  },
  {
    title: "Food Advertisement",
    description: "Commercial design focused on product hero placement.",
    image: "/artworks/Food Advertisement.png",
  },
  {
    title: "Animal Infographics",
    description: "Editorial-style back page composition for print layout.",
    image: "/artworks/Group 4 STS Backpage.png",
  },
  {
    title: "JOKERs",
    description: "Character-focused digital artwork with dramatic treatment.",
    image: "/artworks/JOKERs.png",
  },
  {
    title: "Jordan Clarkson Poster",
    description: "Athlete spotlight poster with strong visual hierarchy.",
    image: "/artworks/Jordan-Clarkson-Poster.png",
  },
  {
    title: "Yoo Jimin Poster",
    description: "Portrait-based layout with bold color and framing.",
    image: "/artworks/Yoo-Jimin-Poster.png",
  },
];

const tileStyles = [
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[5/6]",
  "aspect-[16/10]",
  "aspect-[10/13]",
];

const shuffleArray = (items) => {
  const array = [...items];

  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export const Gallery = () => {
  const [displayedArtworks, setDisplayedArtworks] = useState(() =>
    shuffleArray(artworks).map((artwork, idx) => ({
      ...artwork,
      tileStyle: tileStyles[idx % tileStyles.length],
    }))
  );
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedArtwork =
    selectedIndex === null ? null : displayedArtworks[selectedIndex];

  const openViewer = (index) => {
    setSelectedIndex(index);
  };

  const closeViewer = () => {
    setSelectedIndex(null);
  };

  const randomizeGallery = () => {
    setDisplayedArtworks((prev) =>
      shuffleArray(prev).map((artwork, idx) => ({
        ...artwork,
        tileStyle: tileStyles[idx % tileStyles.length],
      }))
    );
    setSelectedIndex(null);
  };

  const nextArtwork = () => {
    if (selectedIndex === null) return;
    const nextIndex = (selectedIndex + 1) % displayedArtworks.length;
    setSelectedIndex(nextIndex);
  };

  const prevArtwork = () => {
    if (selectedIndex === null) return;
    const prevIndex =
      (selectedIndex - 1 + displayedArtworks.length) % displayedArtworks.length;
    setSelectedIndex(prevIndex);
  };

  useEffect(() => {
    randomizeGallery();
  }, []);

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
  }, [selectedArtwork, selectedIndex, displayedArtworks.length]);

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
          <div className="mt-6 animate-fade-in animation-delay-300">
            <button
              type="button"
              onClick={randomizeGallery}
              className="px-4 py-2 rounded-full glass hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all text-sm"
            >
              Shuffle artworks
            </button>
          </div>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {displayedArtworks.map((artwork, idx) => (
            <article
              key={`${artwork.image}-${idx}`}
              className="group glass rounded-2xl overflow-hidden animate-fade-in break-inside-avoid hover:shadow-[0_20px_60px_rgba(32,194,168,0.15)] transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${(idx % 3) * 100}ms` }}
              onClick={() => openViewer(idx)}
            >
              <div className={`relative overflow-hidden ${artwork.tileStyle}`}>
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

                <span className="absolute top-4 right-4 text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full glass_strong text-white">
                  Click to view
                </span>

                <div className="absolute inset-0 flex flex-col items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-right">
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {artwork.title}
                    </h3>
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
                {selectedIndex !== null ? selectedIndex + 1 : 1} / {displayedArtworks.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
