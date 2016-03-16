function updateObj (targetObject, obj) {
  Object.keys(obj).forEach(function (key) {
    if ( undefined === obj[key] || null === obj[key] ) {
      delete targetObject[key]
    }
    else if (
      'object' === typeof obj[key] && !Array.isArray(obj[key])
    ) {
      if (
        !('object' === typeof targetObject[key] && !Array.isArray(targetObject[key]))
      ) {
        targetObject[key] = {}
      }
      update(targetObject[key], obj[key])
    }
    else {
      targetObject[key] = obj[key]
    }
  })
}
