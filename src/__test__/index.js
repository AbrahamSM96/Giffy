import React from "react";
import { fireEvent, render, waitForElement } from "@testing-library/react";
import App from "../App";

test("home work as expected", () => {
  const { container } = render(<App />);

  const gifLink = await waitForElement(() => container.querySelector('.Gif-link'))

  expect(gifLink).toBeVisible()
});

test('search form could be used', async () => {
   render(<App/>)
   const input = await screen.findByRole('textbox')
   fireEvent.change(input, {target: {value: 'Matrix'}})

   const button = await screen.findByRole('button');
   fireEvent.click(button);

   const title = await screen.findByText('Matrix');
   expect(title).toBeVisible()
})