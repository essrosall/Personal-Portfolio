export const Button = ({className = "", size = "md", children}) =>{
    const baseClasses =
    "relative overflow-hidden rounded-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary)/90%] shadow-lg shadow-[var(--color-primary)/50%]";
    const sizeClasses = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg"
    };
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
    return (
    <button className={classes}>
        <span className="relative flex items-center justify-center gap-2">
            {children}
        </span>
    </button>
);
};

