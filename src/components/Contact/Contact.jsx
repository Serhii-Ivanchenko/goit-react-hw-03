import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Contact({ data, onContactDelete }) {
  return (
    <div>
      <FaUser />
      <p>{data.name}</p>
      <FaPhoneAlt />
      <p>{data.number}</p>
      <button
        onClick={() => {
          onContactDelete(data.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
