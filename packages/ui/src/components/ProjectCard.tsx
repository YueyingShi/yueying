// packages/ui/src/components/ProjectCard.tsx
export const ProjectCard = ({ title, description, tags }: any) => (
    <div className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag: string) => (
                <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium dark:bg-zinc-800">
                    {tag}
                </span>
            ))}
        </div>
    </div>
);