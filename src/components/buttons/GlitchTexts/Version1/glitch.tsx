import { useState } from "react";
import "./button.css";
import classNames from "classnames";

export function Glitch({ title }: { title: string }) {
  const [animate, setAnimate] = useState(false);

  function handleClick() {
    setAnimate((old) => !old);
  }

  return (
    <p className="container" onClick={handleClick}>
      <p className={classNames({ texto: true, "glitch-cima": animate })}>{title}</p>
      <p className={classNames({ texto: true, "glitch-meio": animate, opaque: !animate })}>{title}</p>
      <p className={classNames({ texto: true, "glitch-baixo": animate, opaque: !animate })}>{title}</p>
      <p className={classNames({ texto: true, brilho: animate, opaque: !animate })}>{title}</p>
    </p>
  );
}
