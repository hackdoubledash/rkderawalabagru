import Image from "next/image";
import { brand } from "../lib/brand";

export function BrandMark({ size = 38 }: { size?: number }) {
  return <Image className="brand-mark" src={brand.logo} width={size} height={size} alt="" />;
}
