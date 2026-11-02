import Image from "next/image";

export function BrandMark({ className = "", size = 48 }: { className?: string; size?: number }) {
  return <Image className={`brand-mark ${className}`} src="/media/instagram-logo.jpg" width={size} height={size} alt="" />;
}
