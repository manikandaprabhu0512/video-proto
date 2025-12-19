import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const USER_PROTO_PATH = path.resolve(
  __dirname,
  "./proto_services/user.proto"
);
export const VIDEO_PROTO_PATH = path.resolve(
  __dirname,
  "./proto_services/video.proto"
);

export {
  userPackage,
  user_protoclient,
} from "./proto_controllers/user.proto.js";
export {
  videoPackage,
  video_protoclient,
} from "./proto_controllers/video.proto.js";
