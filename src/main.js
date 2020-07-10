import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "there",
    things: [
      { id: 1, name: "Swig", url: "https://google.com" },
      { id: 2, name: "Powershell", url: "https://google.com" },
      { id: 3, name: "Family", url: "https://google.com" },
      { id: 4, name: "Portfolio", url: "https://google.com" },
      { id: 5, name: "Swag", url: "https://google.com" },
    ],
  },
});

export default app;
