import { render } from "@testing-library/svelte";
import Thing from "./Thing.svelte";

describe("Thing component", () => {
  const expected = {
    name: "Powershell",
    url: "google",
    id: "1",
  };
  test("should render component correctly", () => {
    const { container } = render(Thing, {
      props: expected,
    });

    expect(container).toContainHTML(
      `<body><div><a href="${expected.url}"><div class="thing thing-${expected.id}"><h3>${expected.name}</h3></div></a></div></body>`
    );
  });
});
