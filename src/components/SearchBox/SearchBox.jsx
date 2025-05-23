import css from "./SearchBox.module.css";

const SearchBox = ({ inputValue, handleChange }) => {
  return (
    <div className={css.box}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        className={css.form}
        type="text"
        id="search"
        value={inputValue}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
    </div>
  );
};
export default SearchBox;
