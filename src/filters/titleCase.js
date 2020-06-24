const titleCase = value => {
  value = value.toString();
  return value
    .split(" ")
    .map(
      element =>
        element
          .toUpperCase()
          .charAt(0)
          .toUpperCase() + element.slice(1)
    )
    .join(" ");
};

export default titleCase;
