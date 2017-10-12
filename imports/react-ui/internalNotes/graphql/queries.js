export const internalNotes = `
  query internalNotes($contentType: String!, $contentTypeId: String) {
    internalNotes(contentType: $contentType, contentTypeId: $contentTypeId) {
      _id
      content
      createdUserId
      createdUser {
        details
      }
    }
  }
`;
