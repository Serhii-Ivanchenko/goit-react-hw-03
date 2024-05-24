import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ data, onContactDelete }) {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <p>
          <FaUser />
          {data.name}
        </p>
        <p>
          <FaPhoneAlt />
          {data.number}
        </p>
      </div>
      <button className={css.btn}
        onClick={() => {
          onContactDelete(data.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
