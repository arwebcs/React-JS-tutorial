import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Protected(props) {
  const { Component } = props;
  const nav = useNavigate();
  useEffect(() => {
    let login = "PP";
    if (login !== "PP") {
      nav("/");
    }
  });
  return (
    <>
      <Component />
    </>
  );
}

export default Protected;
