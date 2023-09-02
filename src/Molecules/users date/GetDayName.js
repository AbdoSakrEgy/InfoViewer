export default function GetDayName(date) {
  const dayNumber = date.getDay();
  const dayNames = [
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];
  return dayNames[dayNumber];
}
// console.log(getDayName(new Date('2023-08-23')));
