import defaultConfig from "@openeventkit/event-site/src/cms/config";

const CMS_BACKEND_REPO = process.env.GATSBY_CMS_BACKEND_REPO || "fntechgit/fnevent-tier1-default-theme";

const config = { ...defaultConfig };
config.backend.repo = CMS_BACKEND_REPO;

export default config;