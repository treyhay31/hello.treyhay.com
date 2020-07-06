import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "there",
    things: ["Powershell", "Family", "Portfolio"],
  },
});

export default app;
