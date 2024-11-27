import { useEffect, useState } from "react";
import { BreedSelect } from "./BreedSelect";

export function Controls({
  handleSetBreed,
  handleSetImage,
  selected,
}: {
  handleSetBreed: (breed: string) => void;
  handleSetImage: (image: string) => void;
  selected: string;
}) {
  const [selectOptions, setSelectOptions] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        const breedArray = Object.keys(data.message);
        //console.log(breedArray);
        setSelectOptions(breedArray);
        handleSetBreed(breedArray[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let isCurrent = true;

    //console.log(selected);
    fetch(`https://dog.ceo/api/breed/${selected}/images/random`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (isCurrent) {
          handleSetImage(data.message);
        }
      })
      .catch((err) => console.log(err));

    return () => {
      isCurrent = false;
    };
  }, [selected]);

  return (
    <div id="controls">
      <BreedSelect
        options={selectOptions}
        selected={selected}
        handleSetBreed={handleSetBreed}
      />
      <button
        id="btn"
        onClick={() => {
          fetch(`https://dog.ceo/api/breed/${selected}/images/random`)
            .then((res) => res.json())
            .then((data) => {
              //console.log(data);
              handleSetImage(data.message);
            })
            .catch((err) => console.log(err));
        }}
      >
        Fetch Image
      </button>
    </div>
  );
}
