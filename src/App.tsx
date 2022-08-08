import { ChangeEvent, useState } from "react";
import { MouseEvent } from "react";

function App() {
  const [theme, setTheme] = useState<"1" | "2" | "3">("1");
  const [expression, setExpression] = useState<string>("");

  const changeTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setTheme(e.currentTarget.value as "1" | "2" | "3");
    }
  };

  const appendToExpression = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget?.dataset?.value ?? "";
    setExpression((prev) => prev + value);
  };

  return (
    <div className="theme-container" data-theme={theme}>
      <main className="container">
        <header className="header-component">
          <h1 className="h1">calc</h1>
          <fieldset className="fieldset">
            <div className="theme-container">
              <legend className="legend">theme</legend>
              <div className="labels-container">
                <label className="label">
                  <span>1</span>
                  <input
                    type="radio"
                    onChange={changeTheme}
                    className="theme-btn"
                    name="theme"
                    value="1"
                  />
                </label>
                <label className="label">
                  <span>2</span>
                  <input
                    type="radio"
                    onChange={changeTheme}
                    name="theme"
                    className="theme-btn"
                    value="2"
                  />
                </label>
                <label className="label">
                  <span>3</span>
                  <input
                    type="radio"
                    onChange={changeTheme}
                    name="theme"
                    className="theme-btn"
                    value="3"
                  />
                </label>
                <div className="circle-container">
                  <div className="circle" data-current="1"></div>
                </div>
              </div>
            </div>
          </fieldset>
        </header>

        <section className="screen-section">
          <h2 className="sr-only">Calculator Screen</h2>
          <p className="digits">{expression}</p>
        </section>

        <section className="keyboard-section">
          <h2 className="sr-only">Calculator Keyboard</h2>
          <div className="grid-container">
            <button data-value="7" className="btn-base" onClick={appendToExpression}>
              7
            </button>
            <button data-value="8" className="btn-base" onClick={appendToExpression}>
              8
            </button>
            <button data-value="9" className="btn-base" onClick={appendToExpression}>
              9
            </button>
            <button
              data-value="Del"
              className="btn-primary"
              onClick={() => setExpression("")}
            >
              Del
            </button>

            <button data-value="4" className="btn-base" onClick={appendToExpression}>
              4
            </button>
            <button data-value="5" className="btn-base" onClick={appendToExpression}>
              5
            </button>
            <button data-value="6" className="btn-base" onClick={appendToExpression}>
              6
            </button>
            <button data-value=" + " className="btn-base" onClick={appendToExpression}>
              +
            </button>

            <button data-value="1" className="btn-base" onClick={appendToExpression}>
              1
            </button>
            <button data-value="2" className="btn-base" onClick={appendToExpression}>
              2
            </button>
            <button data-value="3" className="btn-base" onClick={appendToExpression}>
              3
            </button>
            <button data-value=" - " className="btn-base" onClick={appendToExpression}>
              -
            </button>

            <button data-value="." className="btn-base" onClick={appendToExpression}>
              .
            </button>
            <button data-value="0" className="btn-base" onClick={appendToExpression}>
              0
            </button>
            <button data-value=" / " className="btn-base" onClick={appendToExpression}>
              /
            </button>
            <button data-value=" * " className="btn-base" onClick={appendToExpression}>
              x
            </button>

            <button
              data-value="RESET"
              className="btn-primary two-columns"
              onClick={() => setExpression("")}
            >
              RESET
            </button>
            <button
              data-value="="
              className="btn-secondary two-columns"
              onClick={() => {
                let value = 0;
                try {
                  value = eval(expression);
                  setExpression(`${value}`);
                } catch {
                  setExpression("Error");
                }
              }}
            >
              =
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
