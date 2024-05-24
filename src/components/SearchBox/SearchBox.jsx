import { useId } from 'react';

export default function SearchBox({ value, onSearch }) {
  const filterFieldId = useId();

  return (
    <div>
      <label htmlFor={filterFieldId}>Find contacts by name</label>
      <input
        type="text"
        id={filterFieldId}
        value={value}
        onChange={event => onSearch(event.target.value)}
      />
    </div>
  );
}
