import Student from "./Student";
function Reuse() {
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
        <Student name={item.name} email={item.email} contact={item.contact} />
      ))}
    </>
  );
}

export default Reuse;
