import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
