'use client';

import { useCallback, useRef, useState } from 'react';
import { Camera, Upload, X } from 'lucide-react';

interface PhotoUploadProps {
  photo: string | null;
  onPhotoChange: (photo: string | null) => void;
}

export function PhotoUpload({ photo, onPhotoChange }: PhotoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const processFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith('image/')) return;
      if (file.size > 12 * 1024 * 1024) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const maxDim = 1024;
          let w = img.width;
          let h = img.height;
          if (w > maxDim || h > maxDim) {
            const ratio = Math.min(maxDim / w, maxDim / h);
            w = Math.round(w * ratio);
            h = Math.round(h * ratio);
          }
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, w, h);
            onPhotoChange(canvas.toDataURL('image/jpeg', 0.85));
          }
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    },
    [onPhotoChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) processFile(file);
    },
    [processFile]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) processFile(file);
    },
    [processFile]
  );

  if (photo) {
    return (
      <div className="relative overflow-hidden rounded-xl border border-white/15">
        <div className="aspect-[16/10] w-full overflow-hidden bg-[#0a1822]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} alt="Your vessel" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-3">
          <span className="text-xs font-semibold text-white/80">Your vessel photo</span>
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="rounded-lg bg-white/15 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white/25"
            >
              <Camera className="mr-1 inline h-3 w-3" /> Change
            </button>
            <button
              type="button"
              onClick={() => onPhotoChange(null)}
              className="rounded-lg bg-red-500/20 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-red-300 backdrop-blur-sm transition-colors hover:bg-red-500/30"
            >
              <X className="mr-1 inline h-3 w-3" /> Remove
            </button>
          </div>
        </div>
        <input ref={inputRef} type="file" accept="image/*" onChange={handleChange} className="hidden" />
      </div>
    );
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition-all ${
        dragging ? 'border-ocean bg-ocean/10' : 'border-white/15 hover:border-ocean/40 hover:bg-white/5'
      }`}
    >
      <Upload className="h-8 w-8 text-ocean/60" />
      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/50">
        Upload a photo of your vessel
      </p>
      <p className="mt-1 text-[10px] text-white/30">
        Drag & drop or click to browse (JPG, PNG up to 12MB)
      </p>
      <p className="mt-2 text-[10px] text-ocean/50">
        Your photo will be mapped onto the 3D model
      </p>
      <input ref={inputRef} type="file" accept="image/*" onChange={handleChange} className="hidden" />
    </div>
  );
}
