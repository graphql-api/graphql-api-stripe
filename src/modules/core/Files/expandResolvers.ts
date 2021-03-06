const expand = {
  File: ["data.file"],
  FileList: []
};

const withExpand = typename => next => async (root, args, context, info) =>
  next(root, { ...args, expand: expand[typename] }, context, info);

export const expandResolvers = {
  "Query.retrieveFile": [withExpand("File")],
  "Query.listFiles": [withExpand("FileList")]
};
