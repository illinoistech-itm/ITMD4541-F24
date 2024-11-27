export function Image({ src, alt }: { src: string; alt: string }) {
  return (
    <div id="image-wrapper">
      <img id="dog-img" src={src} alt={alt} />
    </div>
  );
}
