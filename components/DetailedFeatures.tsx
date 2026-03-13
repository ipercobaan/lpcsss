
import React from 'react';

const DetailedFeatures: React.FC = () => {
  const categories = [
    {
      title: "📂 MEDIA & BASICS",
      items: ["Media Vault - Auto Metadata", "Asset Stok - Jutaan Video/SFX", "Smart Cut - Precision Detection", "History - Infinite Undo", "Markers - YouTube Chapters"]
    },
    {
      title: "🎨 VISUAL & EFFECTS",
      items: ["Color Grading - 1 Click LUTs", "Visual Effects - Cinematic Overlay", "Overlay & Watermark", "Subtitle Engine - Karaoke Style", "Motion Engine - Object Tracking", "Smart Tools - Magic Eraser/AI Upscaler"]
    },
    {
      title: "🤖 AI AUTOMATION",
      items: ["Studio Gaming - Auto Highlight", "Auto Clipper - Viral Content Ready", "Paste Editor - Faceless Video", "Studio Viral - Viral Score Check", "Trend Hunter - Real-time Music/Tags", "Mass Engine - Bulk Rendering", "Content Cleaner - Anti-Duplication"]
    },
    {
      title: "🎙️ AUDIO STUDIO",
      items: ["AI Voice - Natural Text-to-Speech", "Voice Cloning - Gandakan Suara", "Suno Music - Royalty Free AI", "Auto Dubbing - Lip-sync (Beta)", "Studio Audio - Noise Removal/EQ"]
    },
    {
      title: "✍️ IDEASI & ASSET GENERATOR",
      items: ["VEO Generator - Prompt to Video", "Prompt Engine - Auto Refinement", "Faceless Studio - Auto Layout", "Studio Avatar - AI Presenter", "8K Generator - HQ Thumbnails", "UGC Builder - Hook to CTA", "ASMR Studio - 8D Audio"]
    },
    {
      title: "📤 DISTRIBUSI & EXPORT",
      items: ["YouTube Publisher - Auto SEO", "Fake Live Facebook - Auto Replay", "Batch Processor - Mass Rendering", "Export Preset - Multi-Platform"]
    }
  ];

  return (
    <section className="py-16 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-xl font-black uppercase tracking-widest text-white/40 mb-2">Semua Fitur</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {categories.map((cat, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-sm font-bold text-blue-400 tracking-tight">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;
