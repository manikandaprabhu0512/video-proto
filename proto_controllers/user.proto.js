import grpc from "@grpc/grpc-js";
import protoloader from "@grpc/proto-loader";
import { USER_PROTO_PATH } from "@videotube/proto";

const packagedef = protoloader.loadSync(USER_PROTO_PATH, {
  keepCase: true,
  longs: Number,
  enums: String,
  defaults: true,
  oneofs: true,
});
const grpcObject = grpc.loadPackageDefinition(packagedef);

const userPackage = grpcObject.user;

export const user_protoclient = new userPackage.UserService(
  "0.0.0.0:50052",
  grpc.credentials.createInsecure()
);
