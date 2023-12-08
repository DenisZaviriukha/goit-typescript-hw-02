/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends keyof AllType>(top: Pick<AllType, T>, bottom: Pick<AllType, T>): Pick<AllType, T> {
  const result: any = {}; 

  if ('name' in top && 'color' in top) {
    result.name = top.name;
    result.color = top.color;
  }

  if ('position' in bottom && 'weight' in bottom) {
    result.position = bottom.position;
    result.weight = bottom.weight;
  }

  return result as Pick<AllType, T>;
}
export {};