const reducer = (posts = [] , action) => {
  switch (action.type) {
    case 'FETcH_ALL':
      return action.payload;
    case 'CREATE':
      return posts;
    default:
      return posts;
  }
}

export default reducer;