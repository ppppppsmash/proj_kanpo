import { cn } from "@/lib/utils";

/**
 * 仮ロゴ（文字組み）。正式なロゴデータが届いたら差し替える。
 * ゴルフボールのロゴに倣い、朱印を添える。
 */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("inline-flex items-baseline gap-2", className)}>
      {!compact && (
        <span className="font-display text-[0.6rem] tracking-[0.4em] text-kin uppercase">
          Yakiniku
        </span>
      )}
      <span className="text-[1.35rem] font-semibold tracking-[0.2em] leading-none">
        焼肉KAMPO
      </span>
      <span
        aria-hidden
        className="mb-[2px] inline-block size-[7px] bg-shu"
        title="朱印"
      />
    </span>
  );
}
