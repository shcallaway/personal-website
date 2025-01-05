import Link from "next/link";
import { Header3 } from "@/components/ui/header-3";
import { Paragraph } from "@/components/ui/paragraph";
import Image from "next/image";
import { CardContainer } from "@/components/ui/card-container";

interface LinkedItemProps {
  title: string;
  link: {
    name: string;
    url: string;
  };
  icon?: string;
  subtitle?: string;
  description: string;
}

function LinkedItemSingle({
  title,
  link,
  icon,
  subtitle,
  description,
}: LinkedItemProps) {
  return (
    <CardContainer>
      <div className="space-y-4">
        {icon && (
          <Image
            src={`/images/${icon}`}
            alt={`${link.name} logo`}
            width={32}
            height={32}
            className="object-contain"
          />
        )}

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Link
              href={link.url}
              className="text-sm text-muted-foreground hover:underline"
            >
              {link.name}
            </Link>
          </div>

          <Header3 className="hover:text-primary transition-colors duration-300">
            {title}
            {subtitle && (
              <span className="text-sm text-muted-foreground ml-2">
                {subtitle}
              </span>
            )}
          </Header3>

          <Paragraph className="text-muted-foreground">{description}</Paragraph>
        </div>
      </div>
    </CardContainer>
  );
}

export function LinkedItemList({ items }: { items: LinkedItemProps[] }) {
  return (
    <div className="space-y-6 mb-8">
      {items.map((item, i) => (
        <LinkedItemSingle key={i} {...item} />
      ))}
    </div>
  );
}
