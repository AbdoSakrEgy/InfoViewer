export default function GetMonthName(date) {
  const monthNumber = date.getMonth();
  const monthNames = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  return monthNames[monthNumber];
}
// console.log(getMonthName(new Date("2023-09-23")));
