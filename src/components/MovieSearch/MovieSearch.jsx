const MovieSearch = ({ submit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.query.value;
    submit(inputValue);
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movie"> </label>
        <input id="movie" type="text" name="name" />
        <button type="submit">Find movie</button>
      </form>
    </div>
  );
};

export default MovieSearch;
