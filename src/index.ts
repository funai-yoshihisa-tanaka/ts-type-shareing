type Type1 = {
  id: number;
  text: string;
}

type Type2 = {
  text: string;
}

const data1: Type1 = {
  id: 1,
  text: 'Text',
}

const data2 = data1 as Type2;

console.log(data2); // 「{ id: 1, text: 'Text' }」が出力される