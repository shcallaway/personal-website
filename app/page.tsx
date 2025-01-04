import { ContentContainer } from "@/components/ui/content-container"
import { PageHeader } from "@/components/ui/page-header"
import { Section } from "@/components/ui/section"
import { UnorderedList } from "@/components/ui/unordered-list"
import { Paragraph } from "@/components/ui/paragraph"
import { ListItem } from "@/components/ui/list-item"

export default function Home() {
  return (
    <ContentContainer>
      <PageHeader
        title="Welcome"
        description="This is the home page of our website. Here you'll find an overview of our services and latest updates. Feel free to explore other sections using the navigation menu above."
      />
      
      <Section title="Our Mission">
        <Paragraph>
          Our mission is to provide innovative solutions that empower businesses and individuals to achieve their goals. 
          We strive for excellence in everything we do.
        </Paragraph>
      </Section>

      <Section title="Featured Services">
        <UnorderedList>
          <ListItem>Web Development</ListItem>
          <ListItem>Mobile App Design</ListItem>
          <ListItem>Cloud Solutions</ListItem>
          <ListItem>Data Analytics</ListItem>
        </UnorderedList>
      </Section>

      <Section title="Latest News">
        <Paragraph>
          Stay tuned for our upcoming product launch! We're excited to introduce a game-changing solution that will 
          revolutionize the industry.
        </Paragraph>
      </Section>
    </ContentContainer>
  )
}

