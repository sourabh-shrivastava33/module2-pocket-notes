export function formatDateAndTime(createdAt, type) {
  let option;
  if (type === "date") {
    option = { year: "numeric", month: "long", day: "numeric" };
  } else if (type === "time") {
    option = { hour: "numeric", minute: "numeric" };
  }
  return new Intl.DateTimeFormat("en-GB", option).format(new Date(createdAt));
}
