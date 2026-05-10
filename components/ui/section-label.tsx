import { cn } from "@/lib/utils";

interface SectionLabelProps {
  label: string;
  className?: string;
  center?: boolean;
}

export function SectionLabel({ label, className, center }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium tracking-[0.12em] uppercase text-[#F1EFE8] flex items-center gap-2 mb-8",
        center && "justify-center",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] inline-block flex-shrink-0" />
      {label}
    </p>
  );
}
