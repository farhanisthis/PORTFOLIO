import React from "react";
import { notFound } from "next/navigation";
import { CASE_STUDIES, CaseStudy } from "@/lib/portfolioData";
import type { Metadata } from "next";
import WorkCaseStudyView from "@/components/WorkCaseStudyView";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.brand} (${project.categoryTitle}) — Kashish Portfolio`,
    description: project.tagline,
  };
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const project: CaseStudy | undefined = CASE_STUDIES[slug];

  if (!project) {
    notFound();
  }

  // Circular next project logic
  const slugKeys = Object.keys(CASE_STUDIES);
  const currentIndex = slugKeys.indexOf(slug);
  const nextSlug = slugKeys[(currentIndex + 1) % slugKeys.length];
  const nextProject = CASE_STUDIES[nextSlug];

  return (
    <WorkCaseStudyView
      project={project}
      nextSlug={nextSlug}
      nextProject={nextProject}
    />
  );
}
