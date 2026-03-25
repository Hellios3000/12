import React from 'react';
import { PAGES } from '../data/pages';
import * as Sections from '../components/Sections';

export default function Home() {
  const page = PAGES.home;

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