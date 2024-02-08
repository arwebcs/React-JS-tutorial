import "./style.css";
import style from "./custom.module.css";
function Style() {
  return (
    <>
      <h1 className="primary">Style type 1</h1>
      <h1 style={{ color: "red", backgroundColor: "black" }}>Style type 2</h1>
      <h1 className={style.success}>Style type 3</h1>
    </>
  );
}

export default Style;
