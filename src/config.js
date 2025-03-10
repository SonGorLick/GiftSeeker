const env = require("./environment");
const path = require("path");

const appName = "GiftSeeker";

const installationStorage = path.resolve(env.homedir, appName);
const portableStorage = path.resolve(env.execPath, "data");

const storageDataPath = env.isPortable ? portableStorage : installationStorage;

module.exports = {
  appName,
  websiteUrl: "https://giftseeker.ru/",
  storageDataPath,
  defaultSettings: {
    language: "en_US",
    user_agent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/83.0.4103.88 Mobile/15E148 Safari/604.1",
  },
};
