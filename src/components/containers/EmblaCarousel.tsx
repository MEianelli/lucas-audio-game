import { JSX, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaViewportRefType } from "embla-carousel-react";
import "./EmblaCarousel.css";

export function EmblaCarousel({
  children,
  emblaRef,
}: {
  readonly children?: JSX.Element | JSX.Element[];
  readonly emblaRef: EmblaViewportRefType;
}) {
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>
    </section>
  );
}

export function EmblaCarouselSlide({
  children,
}: {
  readonly children: JSX.Element | JSX.Element[];
}) {
  return <div className="embla__slide">{children}</div>;
}

export function useEmbla() {
  const [current, setCurrent] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi)
      emblaApi.on("scroll", () => {
        setCurrent(emblaApi.selectedScrollSnap());
      });
  }, [emblaApi]);

  return { current, emblaRef };
}
