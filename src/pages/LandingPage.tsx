import { css } from "@emotion/react";
import { useState } from "react";
import reactLogo from "./../assets/react.svg";
import viteLogo from "/vite.svg";
import { toast } from "react-toastify";
import Button from '@mui/material/Button';

function LandingPage() {
  const [count, setCount] = useState(0);

  const buttonClicked = () => {
    setCount((count) => count + 1);
    toast("Button clicked successfully");
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={buttonClicked}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <div
          css={css({
            margin: 10,
            padding: 10,
            backgroundColor: "hotpink",
          })}
        >
          This is an example of <code>`css`</code> using an object.
        </div>
        <div
          css={css`
            margin: 10px;
            padding: 10px;
            background-color: cyan;
          `}
        >
          This is an example of <code>`css`</code> using a tagged template
          literal.
        </div>
      </div>
    </>
  );
}

export default LandingPage;
