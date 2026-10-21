import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  [
    "group relative inline-flex items-center justify-center gap-3",
    "text-[0.82rem] tracking-[0.28em] uppercase font-display font-medium",
    "transition-colors duration-500 ease-out-quart",
    "focus-visible:outline-kin",
  ],
  {
    variants: {
      variant: {
        /** 朱の面 */
        primary: "bg-shu text-kinari hover:bg-shu-2",
        /** 細い金の線 */
        outline:
          "border border-kin/60 text-kinari hover:border-kin hover:bg-kin/10",
        /** 下線だけ */
        ghost: "text-kinari hover:text-kin",
      },
      size: {
        md: "h-12 px-7",
        lg: "h-14 px-9",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = VariantProps<typeof button> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function Button({ href, variant, size, className, children, external }: ButtonProps) {
  const cls = cn(button({ variant, size }), className);
  if (external || href.startsWith("tel:") || href.startsWith("http")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
