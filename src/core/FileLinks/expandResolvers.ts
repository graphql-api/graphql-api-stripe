import { withExpand } from "../../resolvers";

const expand = {
  FileLink: ["file"],
  FileLinkList: ["data.file"]
};

export const expandResolvers = {
  "Query.retrieveFileLink": [withExpand(expand["FileLink"])],
  "Query.listFileLinks": [withExpand(expand["FileLinkList"])],
  "Mutation.createFileLink": [withExpand(expand["FileLink"])],
  "Mutation.updateFileLink": [withExpand(expand["FileLink"])]
};
