/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist', resolve: true },
  },
  alias: {
    "@app": "./src",
    "@app/assets": "./public/assets",
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-typescript",
  ],
  routes: [
    { match: "routes", src: ".*", dest: "/index.html" },
  ],
  optimize: {
    // Enable bundling in production
    bundle: true,
  },
  packageOptions: {
    /* Add package-specific options here */
  },
  devOptions: {
    /* Add development-specific options here */
  },
  buildOptions: {
    /* Add build-specific options here */
  },
};
