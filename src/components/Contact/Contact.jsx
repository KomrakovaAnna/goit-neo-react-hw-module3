import css from "./Contact.module.css";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <span className={css.contactIcon}>📞</span>
        <div className={css.contactDetails}>
          <span className={css.contactName}>{contact.name}</span>
          <span className={css.contactNumber}>{contact.number}</span>
        </div>
      </div>
      <button
        onClick={() => deleteContact(contact.id)}
        className={css.deleteBtn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
