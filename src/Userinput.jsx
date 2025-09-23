function Userinput({ setUser, user }) {
  return (
    <div>
      <h1>Add User:</h1>
      <input
        type="text"
        onChange={(event) => setUser(event.target.value)}
        placeholder="Enter your username"
      />
      <hr />
    </div>
  );
}

export default Userinput;

