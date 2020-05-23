import React from "react";
import "./index.css";
import { render } from "react-dom";
import { Main } from "./components/main";
import { Store } from "./store";

const app = (
    <Store>
      <Main />
    </Store>
  ),
  here = document.querySelector("#here");

render(app, here);
