function HeaderNotebook() {
  const today = new Date().toDateString();
  return (
    <div>
      <h4>Good Morning</h4>
      <p>{today}</p>
    </div>
  );
}

export default HeaderNotebook;
