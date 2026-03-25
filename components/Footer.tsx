import React from 'react';
import Link from 'next/link';
import { SITE_DATA } from '../data/pages';
import { Scale, Facebook, Send, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-700 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Scale className="w-8 h-8 text-gold-500" />
              <span className="font-bold text-xl uppercase tracking-tight">
                КЮГ<span className="text-gold-500">.КИЇВ</span>
              </span>
            </Link>
            <p className="text-brand-100 text-sm leading-relaxed mb-6">
              Ваш надійний партнер у вирішенні будь-яких правових питань. Професійність, конфіденційність та результат - наші головні цінності.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"><Send size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"><MessageSquare size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-gold-500 uppercase text-sm tracking-widest">Послуги</h4>
            <ul className="space-y-4 text-brand-100 text-sm">
              <li><Link href="/vyskovyi-advokat" className="hover:text-white">Військовий адвокат</Link></li>
              <li><Link href="/advokat-nerukhomist" className="hover:text-white">Юрист з нерухомості</Link></li>
              <li><Link href="/biznes-suprovid" className="hover:text-white">Бізнес-супровід</Link></li>
              <li><Link href="/#services" className="hover:text-white">Сімейне право</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gold-500 uppercase text-sm tracking-widest">Навігація</h4>
            <ul className="space-y-4 text-brand-100 text-sm">
              <li><Link href="/about" className="hover:text-white">Про нас</Link></li>
              <li><Link href="/#pricing" className="hover:text-white">Ціни</Link></li>
              <li><Link href="/contacts" className="hover:text-white">Контакти</Link></li>
              <li><Link href="/" className="hover:text-white">Головна</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gold-500 uppercase text-sm tracking-widest">Контакти</h4>
            <div className="space-y-4 text-brand-100 text-sm">
              <p>{SITE_DATA.address}</p>
              <p className="font-bold text-white">{SITE_DATA.phone}</p>
              <p>{SITE_DATA.email}</p>
              <p>Пн-Пт: 09:00 - 18:00</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-xs text-brand-200">
          <p>© 2024 {SITE_DATA.companyName}. Всі права захищені.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Політика конфіденційності</Link>
            <Link href="#" className="hover:text-white">Договір оферти</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}