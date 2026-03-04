import Image from "next/image";
import Link from "@/components/ui/Link";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/saxophones/${product.id}`} className="group block">
      <div className="w-full aspect-[4/5] bg-charcoal relative overflow-hidden mb-6">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-2">
        {product.series}
      </p>
      <h3 className="font-serif text-2xl text-white mb-2">{product.name}</h3>
      <p className="font-serif text-sm italic text-muted mb-4 line-clamp-2">
        {product.tagline}
      </p>
      <span className="font-sans text-xs tracking-[0.15em] uppercase text-gold group-hover:text-gold-light transition-colors">
        View Details →
      </span>
    </Link>
  );
}
