const profile = {
  // Властивості об'єкта
  username: 'Jacob',
  playTime: 300,

  // Метод для зміни імені (використовуємо this)
  changeUsername(newName) {
    this.username = newName;
  },

  // Метод для оновлення часу (використовуємо this)
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  // Метод для отримання рядка-звіту (використовуємо this)
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

// --- Код для перевірки (обов'язково залиште для ментора) ---

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
