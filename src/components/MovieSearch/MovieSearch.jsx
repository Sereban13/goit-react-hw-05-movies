const MovieSearch = ({ onChange }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.name.value;
    onChange(inputValue);
    event.target.reset();
    console.log(inputValue);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movie"> </label>
        <input
          id="movie"
          type="text"
          name="name"
          title="Enter movie name"
          required
          placeholder="Search movie"
        />
        <button type="submit">Find movie</button>
      </form>
    </div>
  );
};

export default MovieSearch;
