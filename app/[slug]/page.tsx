import React from 'react';
import { PAGES } from '../../data/pages';
import * as Sections from '../../components/Sections';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: any) {
  const page = PAGES[params.slug as keyof typeof PAGES];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
  };
}

export default function DynamicPage({ params }: any) {
  const page = PAGES[params.slug as keyof typeof PAGES];

  if (!page || params.slug === 'home') {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {page.sections.map((section: any, index: number) => {
        const Component = (Sections as any)[section.type];
        if (!Component) return null;
        return <Component key={index} {...section.data} />;
      })}
    </div>
  );
}