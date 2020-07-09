import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "there",
    things: [
      { name: "Swig", url: "https://google.com" },
      { name: "Powershell", url: "https://google.com" },
      { name: "Family", url: "https://google.com" },
      { name: "Portfolio", url: "https://google.com" },
      { name: "Swag", url: "https://google.com" },
    ],
  },
});

export default app;
