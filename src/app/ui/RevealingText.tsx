import { cn } from "@/lib/utils";
import { MotionValue, motion, useTransform } from "framer-motion";
import React from "react";

interface RevealingTextContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  scrollYProgress: MotionValue<number>;
  widthStart?: number;
  widthEnd?: number;
  children: JSX.Element[];
}

export function RevealingTextContainer({
  className,
  scrollYProgress,
  widthStart = 0.20,
  widthEnd = 0.60,
  children,
  ...props
}: RevealingTextContainerProps) {
  const widthDiff =
    (1 - widthEnd) / (children.length === 1 ? 1 : children.length - 1);

  return (
    <div {...props} className={cn("flex flex-col  text-white text", className)}>
      {children.map((child, index) => {
        return React.cloneElement(child, {
          scrollYProgress,
          widthStart,
          widthEnd,
          widthDiff,
          index,
        });
      })}
    </div>
  );
}

interface RevealingTextItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  scrollYProgress?: MotionValue<number>;
  widthStart?: number;
  widthEnd?: number;
  widthDiff?: number;
  index: number;
}

export function RevealingTextItem({
  className,
  scrollYProgress,
  widthStart,
  widthEnd,
  widthDiff,
  index,
  children,
  ...props
}: RevealingTextItemProps) {
  const width = useTransform(
    scrollYProgress!,
    [widthStart!, widthEnd! + widthDiff! * index],
    ["90%", "0%"]
  );

  return (
    <div {...props} className="relative">
      <p className="text-white text-[2.5rem] leading-normal font-bold">{children}</p>
      <motion.div
        style={{ width }}
        className={cn(
          "mask absolute top-0 right-0 bg-black opacity-60 h-[calc(100%+1rem)] w-full",
          className
        )}
      ></motion.div>
    </div>
  );
}
