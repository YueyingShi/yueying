

interface BannerProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    onCtaClick?: () => void;
}

export const Banner = ({ title, subtitle, ctaText, onCtaClick }: BannerProps) => {
    return (
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-white px-6 py-24 text-center dark:bg-zinc-950">
            {/* Background Decorative Glow (Tailwind v4 style) */}
            <div className="absolute top-0 -z-10 h-full w-full opacity-20 dark:opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0%,transparent_50%)]" />
            </div>

            <div className="max-w-4xl space-y-6">
                <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-7xl dark:text-white">
                    {title}
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-zinc-600 sm:text-xl dark:text-zinc-400">
                    {subtitle}
                </p>

                {ctaText && (
                    <div className="pt-4">
                        <button
                            onClick={onCtaClick}
                            className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                        >
                            {ctaText}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};