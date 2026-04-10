require("datejs");

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  // loop through each array and merge users
  for (let i = 0; i < args.length; i++) {
    combinedObject.users = [
      ...combinedObject.users,
      ...args[i]
    ];
  }

  // add merge date using datejs format M/d/yyyy
  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};