import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ contact }) => {
  return (
    <li className={css.box}>
      <div className={css.user}>
        <p className={css.text}>
          <FaUser /> {contact.name}
        </p>
        <p className={css.text}>
          <FaPhone /> {contact.number}
        </p>
      </div>
      <button className={css.button} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
