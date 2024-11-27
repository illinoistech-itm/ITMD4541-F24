export function BreedSelect({
  options,
  selected,
  handleSetBreed,
}: {
  options: string[];
  selected: string;
  handleSetBreed: (breed: string) => void;
}) {
  return (
    <select
      id="breed-select"
      value={selected}
      onChange={(e) => {
        handleSetBreed(e.target.value);
      }}
    >
      {options.map((option) => {
        return (
          <option value={option} key={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}
