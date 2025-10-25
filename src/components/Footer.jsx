import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400" />
          <span className="font-semibold">ReelLife</span>
        </div>
        <p className="text-sm text-neutral-400">© {new Date().getFullYear()} ReelLife. All rights reserved.</p>
        <div className="text-sm text-neutral-400">
          <a href="#" className="hover:text-neutral-200">Privacy</a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:text-neutral-200">Terms</a>
        </div>
      </div>
    </footer>
  );
}
