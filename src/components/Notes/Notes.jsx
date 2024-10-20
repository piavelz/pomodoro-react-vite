import "./Notes.css";

const Notes = () => {
  return (
    <>
      <textarea
        className="notes_textarea"
        name="notes"
        id="notes"
        placeholder="Notas..."
      ></textarea>
    </>
  );
};

export default Notes;
