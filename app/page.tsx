import { ContentContainer } from "@/components/ui/content-container";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { UnorderedList } from "@/components/ui/unordered-list";
import { Paragraph } from "@/components/ui/paragraph";
import { ListItem } from "@/components/ui/list-item";

export default function Home() {
  return (
    <ContentContainer>
      <PageHeader
        title="Hi, I'm Sherwood"
        description="I'm a software engineer and startup founder based in San Francisco."
      />

      <Section title="What You Can Find Here">
        <UnorderedList>
          <ListItem>Learn more about me</ListItem>
          <ListItem>Understand my career and work</ListItem>
          <ListItem>Read my ideas</ListItem>
          <ListItem>Get in touch</ListItem>
        </UnorderedList>
      </Section>
    </ContentContainer>
  );
}
