export const AnimatedBorderButton = ({ className = "", children, ...props }) => {
  return (
    <button
      {...props}
      className={`relative bg-transparent border border-[var(--color-muted-foreground)]/50 
        text-[var(--color-foreground)] hover:border-[var(--color-primary)]/50 transition-all 
        duration-1000 focus:outline-none focus-visible:ring-1 
        focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-1 
        disabled:opacity-50 disabled:cursor-not-allowed group 
        inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md overflow-visible 
        animated-border ${className}`}
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 7,1 H 193 A 6,6 0 0 1 199,7 V 53 A 6,6 0 0 1 193,59 H 7 A 6,6 0 0 1 1,53 V 7 A 6,6 0 0 1 7,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative z-10 flex h-full items-center justify-center gap-2 leading-none">

        {children}

      </span>
    </button>
  );
};