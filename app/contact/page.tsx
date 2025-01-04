import { ContentContainer } from "@/components/ui/content-container"
import { PageHeader } from "@/components/ui/page-header"
import { Section } from "@/components/ui/section"
import { UnorderedList } from "@/components/ui/unordered-list"
import { Paragraph } from "@/components/ui/paragraph"
import { ListItem } from "@/components/ui/list-item"

export default function Contact() {
  return (
    <ContentContainer>
      <PageHeader
        title="Contact Us"
        description="Get in touch with us for any inquiries, support, or collaboration opportunities. We're always happy to hear from our clients and partners."
      />

      <Section title="Contact Information">
        <UnorderedList>
          <ListItem><strong>Email:</strong> info@example.com</ListItem>
          <ListItem><strong>Phone:</strong> +1 (123) 456-7890</ListItem>
          <ListItem><strong>Address:</strong> 123 Tech Street, Innovation City, TC 12345</ListItem>
        </UnorderedList>
      </Section>

      <Section title="Send Us a Message">
        <Paragraph>
          Use the form below to send us a message, and we'll get back to you as soon as possible.
        </Paragraph>
        {/* Add contact form here */}
      </Section>

      <Section title="Business Hours">
        <UnorderedList>
          <ListItem>Monday - Friday: 9:00 AM - 6:00 PM</ListItem>
          <ListItem>Saturday: 10:00 AM - 2:00 PM</ListItem>
          <ListItem>Sunday: Closed</ListItem>
        </UnorderedList>
      </Section>
    </ContentContainer>
  )
}

