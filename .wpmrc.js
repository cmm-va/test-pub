module.exports = {
  allowBranch: ["master", "release-auto-*"],
  bumpFiles: [
    "package.json",
    "package-lock.json",
    "packages/test-pub/package.json",
  ],
  skip: {
    confirm: true,
  },
  tagPrefix: "",
  hooks: {
    prepublish: "npm run build",
    postpublish: "npm run pub-only",
  },
};
