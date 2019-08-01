import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { exportAllDeclaration } from "@babel/types";

it("contains 3 NavLinks via shallow", () => {
  // компонент рендерится без дочерних элементов,
  // поэтому проверяем исключительно наличие JSX элементов NavLink
  const numLinks = shallow(<Header />).find("NavLink").length;

  expect(numLinks).toEqual(3);
});

it("contains 3 anchors via mount", () => {
  // Memory router т.к. компонент должен быть ребенком react-dom-router
  // дочерние элементы рендерятся и NavLink становится тегом 'a'
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;

  expect(numAnchors).toEqual(3);
});
