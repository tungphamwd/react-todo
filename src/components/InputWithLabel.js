import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  })
  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        ref={inputRef}
        name="title"
        id="todoTitle"
        value={todoTitle}
        onChange={handleTitleChange}
      />
    </>
  );
};

InputWithLabel.propTypes = {
  todoTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default InputWithLabel;
