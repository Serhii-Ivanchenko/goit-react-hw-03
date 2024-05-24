import Contact from '../Contact/Contact';
export default function ContactList({ contacts, onContactDelete }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} onContactDelete={onContactDelete} />
        </li>
      ))}
    </ul>
  );
}
