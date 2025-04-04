import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.box}>
      <div className={css.user}>
        <p className={css.text}>
          <FaUser /> {contact.name}
        </p>
        <p className={css.text}>
          <FaPhone /> {contact.number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
