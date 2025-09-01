import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}: ImageModalProps) {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // When user clicks inside the dialog canvas, decide if it was on the visible image
  const handleCanvasClick = (e: any) => {
    if (!canvasRef.current || !natural) {
      onClose(); // no data, treat as outside
      return;
    }
    const rect = canvasRef.current.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    const cw = rect.width;
    const ch = rect.height;
    const imgAR = natural.w / natural.h;
    const canvasAR = cw / ch;

    // Compute the drawn image rect for object-contain
    let drawnW: number;
    let drawnH: number;
    let offsetX: number;
    let offsetY: number;
    if (canvasAR > imgAR) {
      // canvas wider than image: image height = canvas height
      drawnH = ch;
      drawnW = ch * imgAR;
      offsetX = (cw - drawnW) / 2;
      offsetY = 0;
    } else {
      // canvas taller than image: image width = canvas width
      drawnW = cw;
      drawnH = cw / imgAR;
      offsetX = 0;
      offsetY = (ch - drawnH) / 2;
    }

    const insideImage =
      cx >= offsetX &&
      cx <= offsetX + drawnW &&
      cy >= offsetY &&
      cy <= offsetY + drawnH;

    if (!insideImage) {
      onClose(); // clicked letterbox/padding/background → close
    }
    // else: clicked the visible image → keep open
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          role="dialog"
          onClick={onClose}
          aria-modal="true"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            key="dialog"
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="relative flex h-full w-full items-center justify-center rounded-2xl bg-black/20"
          >
            <div
              tabIndex={0}
              role="button"
              ref={canvasRef}
              onClick={handleCanvasClick}
              className="relative h-[90%] w-[90%] rounded-2xl"
              onKeyDown={(e) =>
                e.key === "Enter" && handleCanvasClick(e as any)
              }
            >
              <Image
                fill
                priority
                src={imageSrc}
                alt={imageAlt}
                className="rounded-2xl object-contain"
                onLoadingComplete={(img) =>
                  setNatural({ w: img.naturalWidth, h: img.naturalHeight })
                }
              />
            </div>

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close image"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-black/80 focus:outline-none"
            >
              <svg
                id="window-close"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-primary-light"
              >
                <path d="m22,2v-1H2v1h-1v20h1v1h20v-1h1V2h-1Zm-1,19H3V3h18v18Z" />
                <polygon points="15 13 16 13 16 14 17 14 17 15 18 15 18 16 17 16 17 17 16 17 16 18 15 18 15 17 14 17 14 16 13 16 13 15 11 15 11 16 10 16 10 17 9 17 9 18 8 18 8 17 7 17 7 16 6 16 6 15 7 15 7 14 8 14 8 13 9 13 9 11 8 11 8 10 7 10 7 9 6 9 6 8 7 8 7 7 8 7 8 6 9 6 9 7 10 7 10 8 11 8 11 9 13 9 13 8 14 8 14 7 15 7 15 6 16 6 16 7 17 7 17 8 18 8 18 9 17 9 17 10 16 10 16 11 15 11 15 13" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
