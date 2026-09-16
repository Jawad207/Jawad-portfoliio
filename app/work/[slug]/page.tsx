import { notFound } from "next/navigation";
import ProjectPage, { projects } from "../../components/ProjectPage";

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();
  return <ProjectPage project={project} slug={slug} />;
}
