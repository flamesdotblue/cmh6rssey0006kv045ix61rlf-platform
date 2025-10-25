import React from 'react';
import { motion } from 'framer-motion';
import { Download, Film } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,92,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,149,0,0.08),transparent_40%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Stream Regional Stories. One App, Many Languages.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 text-lg text-neutral-300"
          >
            ReelLife brings movies, shows, and music videos across India’s vibrant regions — ad-lite, fast, and beautifully curated.
          </motion.p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              id="download"
              href="#"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 text-white font-medium shadow-lg shadow-pink-500/25 hover:brightness-110 transition"
            >
              <Download size={18} />
              Download APK
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800/60 transition text-neutral-200"
            >
              <Film size={18} />
              Explore Features
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-neutral-400">
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Fast downloads</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> HD playback</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-pink-400" /> Multi-language</span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur p-3 md:p-4 shadow-2xl">
            <div className="aspect-[9/16] w-full rounded-xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 grid place-items-center">
              <div className="w-full h-full p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-md bg-white text-black grid place-items-center"><Film size={16} /></div>
                    <p className="text-sm text-neutral-300">Now Playing</p>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">Top Picks in Your Language</h3>
                  <p className="text-neutral-300 text-sm mt-1">Curated collections from Tamil, Telugu, Malayalam, Kannada, Bengali, Marathi, Hindi and more.</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {['Tamil','Telugu','Malayalam','Kannada','Bengali','Marathi'].map((lang, i) => (
                    <div key={lang} className="rounded-lg h-20 bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-xs font-medium">
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block">
            <div className="rounded-xl bg-gradient-to-r from-pink-500/20 to-orange-400/20 p-3 border border-neutral-800">
              <p className="text-xs text-neutral-200">Lightweight APK • ~25MB</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
