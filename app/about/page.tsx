import { ContentContainer } from "@/components/ui/content-container";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { UnorderedList } from "@/components/ui/unordered-list";
import { Paragraph } from "@/components/ui/paragraph";
import { ListItem } from "@/components/ui/list-item";

export default function About() {
  return (
    <ContentContainer>
      <PageHeader
        title="About Me"
        description="My story starts in Raleigh, NC where I grew up playing video games and exploring technology through music."
      />

      <Section title="Early Years">
        <Paragraph>
          I grew up in Raleigh, North Carolina, where my dad's work as an
          orthopedic surgeon first exposed me to the healthcare world. Like many
          kids of my generation, I spent countless hours playing online games
          like World of Warcraft and Runescape, which sparked my early interest
          in technology.
        </Paragraph>
      </Section>

      <Section title="A Passion for Music">
        <Paragraph>
          Music was my other great passion growing up. As a guitarist, I had the
          incredible opportunity to attend the Interlochen School of the Arts
          for two summers. This love for music eventually led me to explore
          digital music production and audio engineering, perfectly combining my
          growing interest in technology with my creative side.
        </Paragraph>
      </Section>

      <Section title="Education">
        <Paragraph>
          My high school years were spent at the Groton School in Massachusetts.
          As a boarding student, I was fortunate to learn from exceptional
          professors and form friendships with peers from around the globe.
          These experiences, particularly in history and Latin, shaped my
          worldview and appreciation for diverse perspectives.
        </Paragraph>
      </Section>

      <Section title="College Years">
        <Paragraph>
          At Davidson College in North Carolina, I started as a History major,
          unsure of where my path would lead. Everything changed when I took my
          first computer science class - it opened up a world of possibilities
          that would define my future career.
        </Paragraph>
      </Section>

      <Section title="Discovering Tech">
        <Paragraph>
          Programming quickly captured my interest - the logical problem-solving
          aspects resonated deeply with me. This newfound passion led me to Dev
          Bootcamp during a summer break, where I immersed myself in modern web
          development. The intensive program, filled with hands-on projects and
          collaborative work, confirmed that software engineering was my future.
        </Paragraph>
      </Section>

      <Section title="Starting My Career">
        <Paragraph>
          My professional journey began at CapTech Ventures, where I worked with
          Fortune 500 clients. Seeking to be closer to innovation, I made the
          move to San Francisco and joined Crunchbase. There, I transitioned
          into infrastructure engineering, focusing on deployment systems and
          developer productivity.
        </Paragraph>
      </Section>

      <Section title="Recent Ventures">
        <Paragraph>
          At Brex, I joined as the second infrastructure engineer, helping scale
          the company through its rapid growth phase. Later, I co-founded Opkit,
          developing AI solutions for healthcare insurance verification.
          Following Opkit's acquisition in 2024, I've taken on the role of
          engineering lead at 11x, where we're developing Alice, an AI-powered
          Sales Development Representative.
        </Paragraph>
      </Section>
    </ContentContainer>
  );
}
