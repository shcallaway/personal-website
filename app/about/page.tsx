import { ContentContainer } from "@/components/ui/content-container"
import { PageHeader } from "@/components/ui/page-header"
import { Section } from "@/components/ui/section"
import { UnorderedList } from "@/components/ui/unordered-list"
import { Paragraph } from "@/components/ui/paragraph"
import { ListItem } from "@/components/ui/list-item"

export default function About() {
  return (
    <ContentContainer>
      <PageHeader
        title="About Us"
        description="We are a company dedicated to providing high-quality services and products. Our team consists of experienced professionals committed to excellence in everything we do."
      />

      <Section title="Our History">
        <Paragraph>
          Founded in 2010, our company has grown from a small startup to a leader in the industry. 
          We've consistently pushed the boundaries of innovation and quality in our field.
        </Paragraph>
      </Section>

      <Section title="Our Team">
        <Paragraph>
          Our diverse team brings together experts from various backgrounds, including software development, 
          design, and business strategy. This mix of talents allows us to approach challenges from multiple perspectives.
        </Paragraph>
      </Section>

      <Section title="Our Values">
        <UnorderedList>
          <ListItem><strong>Innovation:</strong> We constantly seek new and better ways to solve problems.</ListItem>
          <ListItem><strong>Integrity:</strong> We maintain the highest ethical standards in all our dealings.</ListItem>
          <ListItem><strong>Collaboration:</strong> We believe in the power of teamwork and partnership.</ListItem>
          <ListItem><strong>Excellence:</strong> We strive for the highest quality in everything we do.</ListItem>
        </UnorderedList>
      </Section>
    </ContentContainer>
  )
}

