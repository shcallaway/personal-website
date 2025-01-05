import { ContentContainer } from "@/components/ui/content-container";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { CardList } from "@/components/card-list";
import { Paragraph } from "@/components/ui/paragraph";
import { OrderedList } from "@/components/ui/ordered-list";
import { ListItem } from "@/components/ui/list-item";
import fs from "fs";
import path from "path";
import { UnorderedList } from "@/components/ui/unordered-list";
import { LinkedItemList } from "@/components/ui/linked-item-list";

interface Project {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
  externalUrl?: string;
  isExternal?: boolean;
}

export default function Work() {
  const projectsDirectory = path.join(process.cwd(), "app/work/projects");
  const filenames = fs.readdirSync(projectsDirectory);

  const projects: Project[] = filenames.reduce((allProjects, filename) => {
    const filePath = path.join(projectsDirectory, filename);
    try {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const parsedContent = JSON.parse(fileContents);

      if (
        !parsedContent.title ||
        !parsedContent.description ||
        !parsedContent.date ||
        !parsedContent.slug ||
        !parsedContent.tags
      ) {
        throw new Error("Missing required fields in project JSON");
      }

      const { title, description, date, slug, tags, externalUrl, isExternal } =
        parsedContent;
      allProjects.push({
        title,
        description,
        date,
        slug,
        tags,
        externalUrl,
        isExternal,
      });
    } catch (error) {
      console.error(`Error processing ${filename}:`, error);
    }
    return allProjects;
  }, [] as Project[]);

  projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const careerItems = [
    {
      title: "Engineering Lead",
      link: { name: "11x", url: "https://www.11x.ai" },
      subtitle: "2024 - Present",
      description:
        "Leading the development of Alice, the AI SDR, and managing the engineering team following the acquisition of my startup, Opkit.",
      icon: "crunchbase.png",
    },
    {
      title: "Co-founder/CEO",
      link: { name: "Opkit", url: "https://www.opkit.co" },
      subtitle: "2021 - 2024",
      description:
        "Built AI and FinTech software solutions for healthcare providers, raised funding, and scaled a remote team of ~10.",
      icon: "crunchbase.png",
    },
    {
      title: "Batch Member",
      link: { name: "Y Combinator", url: "https://www.ycombinator.com" },
      subtitle: "2021",
      description:
        "Participated in YC's prestigious accelerator program, refining Opkit's vision and scaling its business operations.",
      icon: "crunchbase.png",
    },
    {
      title: "Software Engineer",
      link: { name: "Brex", url: "https://www.brex.com" },
      subtitle: "2019 - 2021",
      description:
        "Established the Observability and Bill Pay teams, leading technical rollouts for Brex Premium and real-time fraud prevention.",
      icon: "crunchbase.png",
    },
    {
      title: "Software Engineer",
      link: { name: "Crunchbase", url: "https://www.crunchbase.com" },
      subtitle: "2017 - 2019",
      description:
        "Transitioned to infrastructure engineering, improved developer experience with CI/CD pipelines, and migrated systems to Kubernetes.",
      icon: "crunchbase.png",
    },
    {
      title: "Software Developer",
      link: {
        name: "CapTech Ventures",
        url: "https://www.captechconsulting.com",
      },
      subtitle: "2016",
      description:
        "Worked on a Fortune 500 healthcare client project, igniting my drive to pursue impactful tech roles.",
      icon: "crunchbase.png",
    },
    {
      title: "Software Developer Intern",
      link: { name: "CapTech", url: "https://www.captechconsulting.com" },
      subtitle: "2015",
      description:
        "Gained foundational experience in software development as part of a competitive internship program.",
      icon: "crunchbase.png",
    },
    {
      title: "Student",
      link: { name: "Davidson College", url: "https://www.davidson.edu" },
      subtitle: "2012 - 2016",
      description:
        "Earned a Bachelor of Arts in History, developing critical thinking, research, and communication skills.",
      icon: "crunchbase.png",
    },
    {
      title: "Student",
      link: { name: "Dev Bootcamp", url: "https://devbootcamp.com" },
      subtitle: "2014",
      description:
        "Completed an intensive web development program, gaining hands-on experience in modern software engineering practices.",
      icon: "crunchbase.png",
    },
  ];

  return (
    <ContentContainer>
      <PageHeader
        title="My Work"
        description="I've been coding professionally for over 10 years and have been fortunate to work at multiple top venture-backed startups."
      />

      <Section title="Career">
        <LinkedItemList items={careerItems} />
      </Section>
    </ContentContainer>
  );
}
