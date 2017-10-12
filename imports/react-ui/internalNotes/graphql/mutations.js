export const internalNotesAdd = `
  mutation internalNotesAdd(
    $contentType: String!,
    $contentTypeId: String,
    $content: String
  ) {
      internalNotesAdd(
        contentType: $contentType,
        contentTypeId: $contentTypeId,
        content: $content
      ) {
        _id
        content
        createdDate
      }
  }
`;

export const internalNotesRemove = `
  mutation internalNotesRemove($_id: String!) {
    internalNotesRemove(_id: $_id) {
      _id
    }
  }
`;
