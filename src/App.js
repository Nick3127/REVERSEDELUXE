import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScrollTop = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);

    return () => window.removeEventListener("scroll", handleScrollTop);
  }, []);

  const renderContent = () => (
    <>
      <div className="Parallax__content__heading">
        <a href='https://www.instagram.com/reversls/?utm_medium=copy_link' className="Parallax__content__heading__text">REVERSE</a>
        <h2 className="Parallax__content__heading__caption">
          Nitinur in vetitum semper, cupimusque negate...
          {/* — Мы всегда стремимся к запретному и желаем недозволенного (Овидий, «Любовные элегии») */}
        </h2>
      </div>
      <div className="Parallax__content__cta">
        <p>
          <h2>Check my profile!</h2>
         <h2> <a href='https://www.instagram.com/vrfew/?hl=ru'>RTWOER</a> </h2>
        </p>
      </div>
    </>
  );

  return (
    <selection className="Parallax">
      <div
        className="Parallax__background"
        style={{ transform: `translateY(${offsetY * 0.7}px` }}
      />
      <div
        className="Parallax__background-triangles"
        style={{ transform: `translateY(${offsetY * 0.3}px` }}
      />
      <div
        className="Parallax__background-triangles2"
        style={{ transform: `translateY(${offsetY * 0.5}px` }}
      />
      <div className="Parallax__content">{renderContent()}</div>
    </selection>
  );
}

export default App;
