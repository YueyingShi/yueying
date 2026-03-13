

interface SectionHeaderProps {
    title: string;
    description?: string;
    align?: "left" | "center";
}

export const SectionHeader = ({ title, description, align = "left" }: SectionHeaderProps) => {
    const alignmentClasses = align === "center" ? "text-center items-center" : "text-left items-start";

    return (
        <div className={`mb-12 flex flex-col space-y-3 ${alignmentClasses}`}>
            <div className="flex items-center space-x-2">
                {/* Simple accent line */}
                <span className="h-px w-8 bg-blue-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    Section
                </span>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl dark:text-white">
                {title}
            </h2>

            {description && (
                <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
                    {description}
                </p>
            )}
        </div>
    );
};