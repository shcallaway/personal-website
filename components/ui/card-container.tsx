import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardContainerProps {
  children: React.ReactNode;
  href?: string;
  isExternal?: boolean;
  className?: string;
}

export function CardContainer({
  children,
  href,
  isExternal,
  className,
}: CardContainerProps) {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => (
    <Card
      className={cn(
        href && "cursor-pointer hover:shadow-md transition-shadow duration-300",
        className
      )}
    >
      <CardHeader>{children}</CardHeader>
    </Card>
  );

  if (!href) {
    return <CardWrapper>{children}</CardWrapper>;
  }

  const LinkWrapper = isExternal ? "a" : Link;
  const linkProps = isExternal
    ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : { href };

  return (
    <LinkWrapper
      {...linkProps}
      className="block transition-all duration-300 ease-in-out hover:scale-[1.01]"
    >
      <CardWrapper>{children}</CardWrapper>
    </LinkWrapper>
  );
}
