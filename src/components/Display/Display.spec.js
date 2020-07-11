import { render } from "@testing-library/svelte";
import Display from "./Display.svelte";

describe("Display component", () => {
  const expected = [
    {
      name: "cool thing 1",
      url: "https://go-hereeee.com",
    },
    {
      name: "cool thing 2",
      url: "https://go-hereeee.com",
    },
    {
      name: "cool thing 3",
      url: "https://go-hereeee.com",
    },
  ];

  const expectedHtml = `<body>
  <ul>
    ${expected.map(
      (e) => `<li><a href="${e.url}">${e.name}</a></li>
    `
    )}
  </ul>
</body>`;

  test("should render component correctly", () => {
    const { container } = render(Display, {
      props: expected,
    });

    expect(container).toContainHTML(expectedHtml);
  });
});
