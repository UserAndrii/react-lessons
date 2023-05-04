const ToDoFiter = ({ value, onChange }) => {
  return (
    <label style={{ margin: '10px 0' }}>
      Пошук справи за назвою:
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={{ marginLeft: 10 }}
      />
    </label>
  );
};

export default ToDoFiter;
