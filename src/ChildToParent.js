function ChildToParent(props) {
  const data = "SSSS";
  return (
    <>
      <h1>Child to Parent</h1>
      <button onClick={() => props.alert(data)}>Click</button>
    </>
  );
}

export default ChildToParent;
