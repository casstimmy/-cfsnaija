import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { promises as fs } from "node:fs";
import path from "node:path";
import { ArrowLeft, Camera, Grid3X3, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual showcase of Naija Steel projects, finishes, and on-site delivery quality.",
};

type GalleryItem = {
  name: string;
  src: string;
  ext: string;
};

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const RATIO_CYCLE = ["aspect-[4/3]", "aspect-[3/4]", "aspect-square", "aspect-[16/10]"];

async function getGalleryImages(): Promise<GalleryItem[]> {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  try {
    const entries = await fs.readdir(galleryDir, { withFileTypes: true });

    return entries
      .filter((entry) => entry.isFile())
      .map((entry) => {
        const ext = path.extname(entry.name).toLowerCase();
        return { entry, ext };
      })
      .filter(({ ext }) => IMAGE_EXTENSIONS.has(ext))
      .map(({ entry, ext }) => ({
        name: entry.name,
        ext: ext.replace(".", "").toUpperCase(),
        src: `/gallery/${encodeURIComponent(entry.name)}`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

export default async function GalleryPage() {
  const images = await getGalleryImages();
  const featured = images.slice(0, 5);

  const formatCounts = images.reduce<Record<string, number>>((acc, image) => {
    acc[image.ext] = (acc[image.ext] ?? 0) + 1;
    return acc;
  }, {});

  const formatChips = Object.entries(formatCounts).sort(([a], [b]) => a.localeCompare(b));

  return (
    <>
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" />
              Visual Portfolio
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight animate-fade-in-up">
              Gallery of Precision,
              <span className="text-gold"> Craft, and Delivery</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl animate-fade-in-up delay-100">
              A curated showcase of structural steel, interior framing, finishing, and project execution quality from our active and completed works.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 animate-fade-in-up delay-200">
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white">
                <Camera className="h-4 w-4 text-gold" />
                {images.length} Images
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white">
                <Grid3X3 className="h-4 w-4 text-gold" />
                High-Resolution Visuals
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      </section>

      <section className="py-14 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-steel-light">
              Formats
            </span>
            {formatChips.map(([ext, count]) => (
              <span
                key={ext}
                className="inline-flex items-center rounded-full border border-navy/10 bg-navy/5 px-3 py-1 text-xs font-semibold text-navy"
              >
                {ext} - {count}
              </span>
            ))}
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">Featured</p>
                <h2 className="text-3xl font-extrabold text-navy">Signature Frames</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {featured.map((image, index) => {
                const isLead = index === 0;
                return (
                  <article
                    key={image.name}
                    className={`${isLead ? "md:col-span-7 md:row-span-2" : "md:col-span-5"} relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm group`}
                  >
                    <div className={`${isLead ? "aspect-[16/10] md:aspect-[16/12]" : "aspect-[16/10]"} relative`}>
                      <Image
                        src={image.src}
                        alt={`Featured gallery image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 40vw"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-navy/10 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <p className="text-sm font-semibold text-white truncate">{image.name}</p>
                        <span className="rounded-full bg-black/35 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white">
                          {image.ext}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Complete Collection</p>
            <h2 className="text-3xl font-extrabold text-navy">All Gallery Images</h2>
          </div>

          {images.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center">
              <p className="text-lg font-semibold text-navy">No gallery images found.</p>
              <p className="mt-2 text-sm text-steel">Add files to `public/gallery` and this page will update automatically.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {images.map((image, index) => (
                <article
                  key={image.name}
                  className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-300"
                >
                  <div className={`relative ${RATIO_CYCLE[index % RATIO_CYCLE.length]}`}>
                    <Image
                      src={image.src}
                      alt={`Project gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent opacity-90" />
                  </div>
                  <div className="flex items-center justify-between gap-4 px-4 py-3">
                    <p className="text-xs text-steel truncate" title={image.name}>
                      {image.name}
                    </p>
                    <span className="rounded-full bg-gold/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-gold shrink-0">
                      {image.ext}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">Want This Level of Execution on Your Project?</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            From concept to completion, our team delivers steel solutions with measurable quality and clean finishing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-bold text-navy hover:bg-gold-light transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
