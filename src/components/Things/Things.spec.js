import { render } from "@testing-library/svelte";
import Things from "./Things.svelte";

describe("Things component", () => {
  const expecteds = [
    {
      name: "Powershell",
      url: "google",
      id: "1",
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
      </a>
    </div>
  </div>
</body>`;

  test("should render component correctly", () => {
    const { container } = render(Thing, {
      props: expected,
    });

    expect(container).toContainHTML(expectedHtml);
  });
});
