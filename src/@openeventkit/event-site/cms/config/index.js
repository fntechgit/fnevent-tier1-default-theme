import defaultConfig from "@openeventkit/event-site/src/cms/config";

import { getEnvVariable, CMS_BACKEND_REPO } from "@openeventkit/event-site/src/utils/envVariables";

const config = { ...defaultConfig };
config.backend.repo = getEnvVariable(CMS_BACKEND_REPO);

export default config;