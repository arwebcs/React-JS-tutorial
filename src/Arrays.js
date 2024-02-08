function Arrays() {
  const student = [
    {
      name: "X",
      email: "x@gmail.com",
      contact: 11111,
    },
    {
      name: "Y",
      email: "y@gmail.com",
      contact: 222222,
    },
    {
      name: "Z",
      email: "z@gmail.com",
      contact: 33333,
    },
  ];

  return (
    <>
      {student.map((item, i) => (
        <h1 key={i}>
          {i}. {item.name} -{item.email} - {item.contact}
        </h1>
      ))}
    </>
  );
}

export default Arrays;
