function compareObjects(key, order="asc") {
  return function(a, b) {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = a[key];
    const varB = b[key];
    let comparison = 0;

    if(typeof varA === 'string' || typeof varB === 'string') { // strings
      comparison = varA.localeCompare(varB);
    } else { // numbers
      if(varA > varB) {
        comparison = 1;
      } else if(varA < varB) {
        comparison = -1;
      }
    }

    return (
      (order === 'desc') ? (comparison * -1) : comparison
    )
  }
}

export default compareObjects;
