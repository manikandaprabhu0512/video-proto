import grpc from "@grpc/grpc-js";
import protoloader from "@grpc/proto-loader";
import { VIDEO_PROTO_PATH } from "@videotube/proto";

const packagedef = protoloader.loadSync(VIDEO_PROTO_PATH, {
  longs: Number,
  enums: String,
  defaults: true,
  oneofs: true,
});
const grpcObject = grpc.loadPackageDefinition(packagedef);

export const videoPackage = grpcObject.video;

export const video_protoclient = new videoPackage.VideoService(
  "0.0.0.0:50051",
  grpc.credentials.createInsecure()
);
