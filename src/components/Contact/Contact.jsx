import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Contact({ data }) {

  return (
    <div>
      <FaUser />
      <p>{data.name}</p>
      <FaPhoneAlt />
      <p>{data.number}</p>
      <button>Delete</button>
    </div>
  );
}
