import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "there",
    things: [
      {
        id: 1,
        name: "SWIG",
        url: "#",
        svg:
          "M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z",
        displayThings: [
          {
            name: "cool thing 1",
            url: "http://codingheroes.io/resources/",
          },
          {
            name: "cool thing 2",
            url: "http://corntab.com/",
          },
          {
            name: "cool thing 3",
            url:
              "https://mycolor.space/gradient3?ori=to+right+bottom&hex=%23D16BA5&hex2=%2386A8E7&hex3=%235FFBF1&submit=submit",
          },
        ],
      },
      {
        id: 2,
        name: "Powershell",
        url: "#",
        svg: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",
        displayThings: [
          {
            name: "PSModuleBuilder",
            url:
              "https://www.powershellgallery.com/packages/PSModuleBuilder/0.2.4",
          },
          {
            name: "Prettier Plugin",
            url: "https://github.com/treyhay31/prettier-plugin-posh",
          },
        ],
      },
      {
        id: 3,
        name: "Family",
        url: "#",
        svg:
          "M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM5 18c.2-.63 2.57-1.68 4.96-1.94l2.04-2c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-2-2H5zm15.6-5.5l-5.13 5.17-2.07-2.08L12 17l3.47 3.5L22 13.91z",
        displayThings: [
          {
            name: "Babies",
            url: "#",
          },
          {
            name: "Dates",
            url: "#",
          },
          {
            name: "Gatherings",
            url: "#",
          },
        ],
      },
      {
        id: 4,
        name: "Portfolio",
        url: "#",
        svg:
          "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-5-5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 4h8v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1z",
        displayThings: [
          {
            name: "hello",
            url: "https://hello.treyhay.com",
          },
          {
            name: "blogz...",
            url: "https://blogz.treyhay.com",
          },
          {
            name: "Bible Chaps",
            url: "https://bible-chaps.treyhay.com",
          },
        ],
      },
      {
        id: 5,
        name: "SWAG",
        url: "#",
        svg:
          "M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z",
        displayThings: [
          {
            name: "cool thing 1",
            url: "https://thebibleproject.com/explore/",
          },
          {
            name: "cool thing 2",
            url: "https://www.awwwards.com/",
          },
          {
            name: "cool thing 3",
            url: "http://sleepyti.me/",
          },
        ],
      },
    ],
  },
});

export default app;
