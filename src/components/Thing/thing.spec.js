import { render } from "@testing-library/svelte";
import Thing from "./Thing.svelte";

describe("Thing component", () => {
  const expected = "Powershell";
  test("should render component correctly", () => {
    const { container } = render(Thing, {
      props: {
        name: expected
      }
    });

    expect(container).toContainHTML(
      `<body><div><div class="thing"><h3>${expected}</h3></div></div></body>`
    );
  });
});
