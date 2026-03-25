'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { SITE_DATA } from '../data/pages';
import { Phone, Menu, X, Scale } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Послуги', href: '/#services' },
    { name: 'Військовий юрист', href: '/vyskovyi-advokat' },
    { name: 'Ціни', href: '/#pricing' },
    { name: 'Про нас', href: '/about' },
    { name: 'Контакти', href: '/contacts' },
  ];

  return (
    <nav className="glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Scale className="w-8 h-8 text-gold-500" />
            <span className="font-bold text-xl text-brand-500 uppercase tracking-tight">
              КЮГ<span className="text-gold-500">.КИЇВ</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-gold-500 transition-colors uppercase tracking-wide">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${SITE_DATA.phone}`} className="flex items-center gap-2 font-bold text-brand-500">
              <Phone className="w-4 h-4" />
              {SITE_DATA.phone}
            </a>
            <button className="bg-gold-500 text-white px-5 py-2 rounded text-sm font-bold hover:bg-gold-600 transition-all">
              ПЕРЕДЗВОНИТИ
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden fixed inset-0 bg-white z-40 transition-transform", isOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="flex flex-col p-8 gap-6 pt-24">
          {links.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-bold">
              {link.name}
            </Link>
          ))}
          <hr />
          <a href={`tel:${SITE_DATA.phone}`} className="text-xl font-bold text-brand-500">
            {SITE_DATA.phone}
          </a>
        </div>
      </div>
    </nav>
  );
}