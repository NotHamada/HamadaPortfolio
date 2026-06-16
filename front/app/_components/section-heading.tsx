type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#A78BFA]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-[#FAFAFA] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[#A3A3A3] md:text-lg">
        {description}
      </p>
    </div>
  );
}
