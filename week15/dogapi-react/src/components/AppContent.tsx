import { useState } from "react";
import "./AppContent.css";
import { Image } from "./Image";
import { Controls } from "./Controls";

export function AppContent() {
  const [image, setImage] = useState<string>(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
  );
  const [breed, setBreed] = useState<string>("");

  return (
    <div id="content-wrapper">
      <h1>Dog API Random Image Generator</h1>
      <Controls
        handleSetImage={setImage}
        handleSetBreed={setBreed}
        selected={breed}
      />
      <Image src={image} alt={breed} />
    </div>
  );
}
