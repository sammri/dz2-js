let day = prompt('Скільки днів у вашому місяці?');
day = Number(day);

if (isNaN(day) && day < 31) {
  console.log("Введіть правильне число днів.");
} else {
  console.log(`Годин у вашому місяці = ${day * 24}, а хвилин = ${(day * 24) * 60}`);
}
