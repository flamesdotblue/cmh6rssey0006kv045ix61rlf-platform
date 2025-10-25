import React from 'react';
import { Globe, Shield, Zap, Star } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Why ReelLife?</h2>
          <p className="mt-2 text-neutral-300">Designed for speed, simplicity, and the joy of regional entertainment.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <FeatureCard icon={<Globe className="text-pink-400" size={20} />} title="Regional-first" desc="Discover content by language and region with smart, localized curation." />
          <FeatureCard icon={<Zap className="text-orange-300" size={20} />} title="Fast & light" desc="Quick installs, blazing downloads, and smooth playback on all networks." />
          <FeatureCard icon={<Shield className="text-emerald-300" size={20} />} title="Safe & clean" desc="A clean UI with transparent permissions and privacy-forward design." />
          <FeatureCard icon={<Star className="text-yellow-300" size={20} />} title="Top quality" desc="HD streams, stable mirrors, and minimal buffering for a premium feel." />
        </div>

        <div id="languages" className="mt-16">
          <h3 className="text-xl font-semibold">Languages we love</h3>
          <p className="text-neutral-300 text-sm mt-1">Browse by your preferred language and discover trending picks.</p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {['Hindi','Tamil','Telugu','Malayalam','Kannada','Bengali','Marathi','Punjabi','Gujarati','Odia','Assamese','Urdu'].map((l) => (
              <span key={l} className="px-3 py-2 rounded-lg bg-neutral-900/60 border border-neutral-800 text-sm text-neutral-200 text-center hover:bg-neutral-800/60 transition">
                {l}
              </span>
            ))}
          </div>
        </div>

        <div id="faq" className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold">Frequently asked</h3>
            <p className="text-neutral-300 text-sm mt-1">Quick answers about using ReelLife.</p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <Faq q="Is ReelLife free to use?" a="Yes. The app is free to download and use. Some content may include partner promotions." />
            <Faq q="Does it support offline?" a="You can download select videos for offline viewing depending on availability." />
            <Faq q="Which devices are supported?" a="Android phones and tablets with Android 7.0 or newer are recommended." />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl p-5 border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition shadow-sm">
      <div className="h-9 w-9 rounded-lg bg-neutral-800 grid place-items-center mb-4">
        {icon}
      </div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-neutral-300 mt-1">{desc}</p>
    </div>
  );
}

function Faq({ q, a }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
      <p className="font-medium">{q}</p>
      <p className="text-sm text-neutral-300 mt-1">{a}</p>
    </div>
  );
}
