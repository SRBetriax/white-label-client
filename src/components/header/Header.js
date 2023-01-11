import React, { useState, useRef, useCallback, useEffect } from "react";
import menu from "../../assets/img/btn-menu.png";
import { useIntersection } from "react-use";


const Header = () => {
  const [menuVisible, setmenuVisible] = useState(false);
  const [fade, setfade] = useState("");
  const sectionRef = useRef();

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const fadeOut = useCallback(() => {
    setfade("scrolled");
  }, []);
  const fadeIn = useCallback(() => {
    setfade("");
  }, []);
  useEffect(() => {
    intersection &&
    intersection.intersectionRatio < 0.1 &&
    window.innerWidth > 1000
      ? fadeOut()
      : fadeIn();
  });

  return (
    <>
      <header className={"container-fluid navigation " + fade}>
        <nav className="row justify-content-between">
          <div className="col-lg-3 col-6">
            <a href="https://www.betriax.com/">
              <svg
                width="254"
                height="60"
                viewBox="0 0 254 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M44.7933 25.2336C61.2346 20.7477 79.7779 20.5607 79.7779 20.5607C79.7779 20.5607 73.3321 18.5514 61.4215 17.6168C48.8569 16.6355 41.1033 17.3832 41.1033 17.3832L32.3222 0L22.9805 19.5794C22.9805 19.5794 11.8172 20.9813 0 25.7009L16.6282 38.1776C16.6282 38.1776 27.9316 29.8131 44.7933 25.2336Z"
                  fill="#1243E3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.747 41.3551C10.4627 49.6262 4.90438 59.9533 4.90438 59.9533C4.71754 60.4673 18.263 49.1589 33.5366 49.1589C47.2221 49.1589 59.74 59.2056 59.74 59.2056L46.0077 30.6075C46.0077 30.6075 35.0313 33.1308 22.747 41.3551Z"
                  fill="#1243E3"
                />
                <path
                  d="M116.397 48.8318H100.983V13.6916H115.79C119.62 13.6916 122.516 14.5794 124.478 16.4019C126.44 18.2243 127.42 20.514 127.42 23.3645C127.42 25.1869 127 26.7757 126.113 28.0841C125.225 29.4393 124.057 30.4206 122.563 31.1215C124.198 31.729 125.505 32.757 126.486 34.1122C127.467 35.4673 127.934 37.0561 127.934 38.9252C127.934 42.0094 126.953 44.486 124.992 46.215C122.983 47.9439 120.134 48.8318 116.397 48.8318ZM115.743 20.1869H107.99V27.8037H115.743C117.145 27.8037 118.266 27.4766 119.013 26.8224C119.807 26.1682 120.181 25.2336 120.181 23.972C120.181 22.8505 119.807 21.9159 119.06 21.215C118.312 20.514 117.191 20.1869 115.743 20.1869ZM116.21 34.3458H107.99V42.3832H116.21C119.153 42.3832 120.648 41.028 120.648 38.3645C120.648 37.1495 120.274 36.1682 119.527 35.4206C118.826 34.7196 117.705 34.3458 116.21 34.3458Z"
                  fill="#1243E3"
                />
                <path
                  d="M155.959 37.8972H137.229C137.463 39.6729 138.117 41.028 139.191 41.9626C140.265 42.8972 141.713 43.3645 143.488 43.3645C144.609 43.3645 145.637 43.1308 146.524 42.6636C147.412 42.1963 148.065 41.4953 148.486 40.5607H155.539C154.791 43.2243 153.297 45.3271 151.101 46.9626C148.906 48.5981 146.291 49.3925 143.348 49.3925C139.518 49.3925 136.435 48.1308 134.006 45.5607C131.577 43.0374 130.363 39.7664 130.363 35.7477C130.363 31.8692 131.577 28.6449 134.006 26.0748C136.435 23.5047 139.565 22.1963 143.301 22.1963C147.085 22.1963 150.167 23.4579 152.549 26.028C154.932 28.5981 156.099 31.8224 156.099 35.7009L155.959 37.8972ZM143.161 27.9439C141.573 27.9439 140.265 28.3645 139.284 29.2523C138.257 30.1402 137.603 31.3084 137.323 32.8505H149.046C148.766 31.3551 148.159 30.1869 147.131 29.2991C146.104 28.4112 144.796 27.9439 143.161 27.9439Z"
                  fill="#1243E3"
                />
                <path
                  d="M171.513 42.6168V48.6916C170.719 48.8785 169.645 48.972 168.197 48.972C162.919 48.972 160.256 46.3084 160.256 41.0281V28.4112H156.753V22.8972H160.256V16.4486H167.263V22.8972H171.56V28.458H167.263V40.3271C167.263 42.0094 168.15 42.8505 169.878 42.8505L171.513 42.6168Z"
                  fill="#1243E3"
                />
                <path
                  d="M189.075 22.7103V29.2991C188.562 29.2056 188.141 29.1589 187.674 29.1589C185.619 29.1589 184.031 29.7196 183.003 30.7944C181.976 31.8692 181.462 33.5981 181.462 35.9346V48.8785H174.456V22.8972H180.901V26.2617C182.396 23.8318 184.825 22.6635 188.188 22.6635L189.075 22.7103Z"
                  fill="#1243E3"
                />
                <path
                  d="M198.464 22.8972H191.458V48.8318H198.464V22.8972Z"
                  fill="#1243E3"
                />
                <path
                  d="M194.961 19.5327C196.222 19.5327 197.249 19.1589 197.997 18.3645C198.791 17.5701 199.164 16.5888 199.164 15.3271C199.164 14.1122 198.791 13.0841 197.997 12.2897C197.203 11.4953 196.175 11.0748 194.961 11.0748C193.7 11.0748 192.672 11.4953 191.925 12.2897C191.131 13.0841 190.757 14.1122 190.757 15.3271C190.757 16.5421 191.131 17.5701 191.925 18.3645C192.719 19.1122 193.7 19.5327 194.961 19.5327Z"
                  fill="#1243E3"
                />
                <path
                  d="M211.215 49.4393C208.319 49.4393 206.077 48.6916 204.536 47.243C202.948 45.7944 202.154 43.8785 202.154 41.4486C202.154 39.1589 202.948 37.3832 204.583 36.0281C206.217 34.6729 208.74 33.7383 212.149 33.2243L219.062 32.1495V31.9159C219.062 29.3925 217.521 28.0841 214.438 28.0841C211.542 28.0841 209.954 29.1589 209.674 31.2617H202.761C202.995 28.7383 204.022 26.5888 205.937 24.8598C207.805 23.1309 210.655 22.2897 214.391 22.2897C218.128 22.2897 220.977 23.1309 222.846 24.8131C224.761 26.4953 225.695 28.8785 225.695 31.9626V44.2056C225.695 46.1682 225.928 47.7103 226.442 48.8785H219.669C219.623 48.8785 219.623 48.7851 219.576 48.5514C219.529 48.3178 219.483 47.9439 219.436 47.4767C219.389 47.0094 219.342 46.4953 219.342 46.0281C217.801 48.271 215.092 49.4393 211.215 49.4393ZM219.062 37.1963L212.85 38.2243C210.234 38.6916 208.88 39.7196 208.88 41.2617C208.88 43.0841 210.188 43.972 212.757 43.972C214.765 43.972 216.306 43.458 217.381 42.3832C218.455 41.3084 219.015 39.9533 219.015 38.2243V37.1963H219.062Z"
                  fill="#1243E3"
                />
                <path
                  d="M253.72 22.8972L244.378 35.6542L254 48.8318H245.592L240.174 41.4019L234.756 48.8318H226.349L235.971 35.6542L226.629 22.8972H235.036L240.174 29.9066L245.312 22.8972H253.72Z"
                  fill="#1243E3"
                />
              </svg>
            </a>
          </div>
          {window.innerWidth < 1000 && (
            <div className="col-6 btn-menu">
              <img
                onClick={() => setmenuVisible(!menuVisible)}
                src={menu}
                alt=""
              />
            </div>
          )}
          <ul
            className={
              "col-lg-8 col-6 d-flex justify-content-between mobile" +
              (menuVisible ? " active" : "")
            }
          >
            <li className="header-link-box ">
              <a href="#producto">Producto</a>
            </li>
            <li className="header-link-box ">
              <a href="#porque-betriax">¿Por qué Betriax?</a>
            </li>
            <li className="header-link-box ">
              <a href="#preguntas-frecuentes">Preguntas frecuentes</a>
            </li>
            <li className="header-link-box cta personas">
              <a href="https://app.betriax.com/register">Personas</a>
            </li>
            <li className="header-link-box cta">
              <a href="https://app.betriax.com/register">Empresas</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="spacing" ref={sectionRef}></div>
    </>
  );
}

export default Header;