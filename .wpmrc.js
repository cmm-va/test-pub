module.exports = {
  allowBranch: ["master", "release-auto-*"],
  bumpFiles: [
    "package.json",
    "package-lock.json",
    "project/test-lib/package.json",
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
