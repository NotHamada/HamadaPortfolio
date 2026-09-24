type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
      <div>
        <p className="mb-4 font-mono text-sm text-muted">
          <span className="text-dotnet">{index}</span>
          <span className="mx-2 text-line">/</span>
          <span className="text-js">{eyebrow}</span>
        </p>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-fg md:text-5xl">
          {title}
        </h2>
      </div>
      <p className="text-base leading-7 text-muted md:text-lg md:leading-8">
        {description}
      </p>
    </div>
  );
}
