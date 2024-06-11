const fs = require("node:fs");

async function createAwsExports() {
  const buildProfile = process.env.EAS_BUILD_PROFILE;
  const workingDir = process.env.EAS_BUILD_WORKINGDIR;

  try {
    let handleDecodedSecret = null;

    switch (buildProfile) {
      case "development":
        const expoDevSecret = process.env.AWS_EXPORTS_DEV;
        handleDecodedSecret = Buffer.from(expoDevSecret, "base64").toString();
        break;
      case "production":
        const expoPrdSecret = process.env.AWS_EXPORTS_PRD;
        handleDecodedSecret = Buffer.from(expoPrdSecret, "base64").toString();
        break;
      default:
        throw new Error("Unknown build profile: ", buildProfile);
    }

    if (!handleDecodedSecret) {
      throw new Error(
        '"handleDecodedSecret" is NULL. This should never happen'
      );
    }

    fs.writeFileSync(`${workingDir}/src/aws-exports.js`, handleDecodedSecret);
  } catch (error) {
    throw new Error('Error while creating "aws-exports.js": ', error);
  }
}

createAwsExports();
