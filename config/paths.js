/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/no-dynamic-require */
const path = require('path');
const fs = require('fs');
const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveApp('package.json')).homepage,
  process.env.PUBLIC_URL,
);

const buildPath = process.env.BUILD_PATH || 'build';

const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
  'css',
  'global.css',
  'scss',
  'global.scss',
];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`)));

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

// config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp(buildPath),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveModule(resolveApp, 'src/index'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  appJsConfig: resolveApp('jsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveModule(resolveApp, 'src/setupTests'),
  proxySetup: resolveApp('src/setupProxy.js'),
  appNodeModules: resolveApp('node_modules'),
  swSrc: resolveModule(resolveApp, 'src/service-worker'),
  publicUrlOrPath,
  appSub: resolveApp('sub'),
  appCom: resolveApp('src/common'),
  comComp: resolveApp('src/common/component'),
  comScss: resolveApp('src/common/scss'),
  comStore: resolveApp('src/common/store'),
  comStyled: resolveApp('src/common/styled'),
  appCon: resolveApp('src/container'),
  conComp: resolveApp('src/container/component'),
  conScss: resolveApp('src/container/scss'),
  conStore: resolveApp('src/container/store'),
  conStyled: resolveApp('src/container/styled'),
  conLib: resolveApp('src/container/lib'),
  conRoute: resolveApp('src/container/route'),
  conService: resolveApp('src/container/service'),
  appCore: resolveApp('src/core'),
  coreDB: resolveApp('src/core/db'),
  coreI18n: resolveApp('src/core/i18n'),
  coreTheme: resolveApp('src/core/theme'),
  coreTool: resolveApp('src/core/tool'),
  coreUtil: resolveApp('src/core/util'),
  appDocs: resolveApp('src/docs'),
  appStatic: resolveApp('src/static'),
  staticImage: resolveApp('src/static/image'),
  staticIcon: resolveApp('src/static/icon'),
};

module.exports.moduleFileExtensions = moduleFileExtensions;
