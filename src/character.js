/* eslint-disable no-unused-vars */
/**
 * Функция-конструктор нового персонажа
 *
 * @param {String} name - min - 2 символа, max - 10
 * @param {String} type - один из типов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie
 *
 * @throws Если передаются некорректные значения, функция конструктор выбрасывает ошибку
 */
function Character(name, type) {
  this.name = name;
  this.type = type;
}
