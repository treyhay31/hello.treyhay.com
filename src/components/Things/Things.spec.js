import { render } from "@testing-library/svelte";
import Things from "./Things.svelte";

describe("Things component", () => {
  const expecteds = [
    {
      name: "Powershell",
      url: "google",
      id: "1",
      svg: "...",
    },
  ];
  const [expected] = expecteds;
  const expectedHtml = `<body>
  <div class="things">
    <div class="thing thing-${expected.id}">
    <a href=${expected.url}>
      <h3>
        ${expected.name}
      </h3>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d=${expected.svg}/>
      </svg>
    </a>
  </div>
  </div>
</body>`;

  test("should render component correctly", () => {
    const { container } = render(Things, {
      props: expecteds,
    });

    expect(container).toContainHTML(expectedHtml);
  });
});
