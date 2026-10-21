import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type Props = {
  en: string;
  /** 文節ごとに分けると、改行が文節の間でのみ起きる */
  ja: string | readonly string[];
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ en, ja, lead, align = "left", className }: Props) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span className="font-display text-[0.8rem] uppercase tracking-[0.42em] text-kin">
        {en}
      </span>
      <h2 className="text-[1.9rem] font-medium leading-[1.45] tracking-wide-jp sm:text-[2.4rem] md:text-[2.8rem]">
        {typeof ja === "string"
          ? ja
          : ja.map((phrase) => (
              <span key={phrase} className="inline-block">
                {phrase}
              </span>
            ))}
      </h2>
      {lead && (
        <p className="mt-2 max-w-[38rem] text-[0.95rem] leading-[2.1] text-kinari-2 md:text-base">
          {lead}
        </p>
      )}
    </Reveal>
  );
}
