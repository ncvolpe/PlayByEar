const VALID_BLACK_KEYS = ['s', 'd', 'g', 'h', 'j', 'w', 'e', 't', 'y', 'u', 'r', 'i', '0', '-', '='];
const VALID_WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'a', 'q', '2', '3', '4', '5', '6', '7', '8', '9', 'o', 'p', '[', ']', '\\'];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];

const NOTES = [
  'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3',
  'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4',
  'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'B5',
  'C6'
];

const NOTE_TO_KEY = {
  C3: 'z',
  Db3: 's',
  D3: 'x',
  Eb3: 'd',
  E3: 'c',
  F3: 'v',
  Gb3: 'g',
  G3: 'b',
  Ab3: 'h',
  A3: 'n',
  Bb3: 'j',
  B3: 'm',
  C4: 'a',
  Db4: 'q',
  D4: '2',
  Eb4: 'w',
  E4: '3',
  F4: 'e',
  Gb4: '4',
  G4: 'r',
  Ab4: '5',
  A4: 't',
  Bb4: '6',
  B4: 'y',
  C5: '7',
  Db5: 'u',
  D5: '8',
  Eb5: 'i',
  E5: '9',
  F5: 'o',
  Gb5: '0',
  G5: 'p',
  Ab5: '-',
  A5: '[',
  Bb5: '=',
  B5: ']',
  C6: '\\'
};

const KEY_TO_NOTE = {
  z: 'C3',
  s: 'Db3',
  x: 'D3',
  d: 'Eb3',
  c: 'E3',
  v: 'F3',
  g: 'Gb3',
  b: 'G3',
  h: 'Ab3',
  n: 'A3',
  j: 'Bb3',
  m: 'B3',
  a: 'C4',
  q: 'Db4',
  2: 'D4',
  w: 'Eb4',
  3: 'E4',
  e: 'F4',
  4: 'Gb4',
  r: 'G4',
  5: 'Ab4',
  t: 'A4',
  6: 'Bb4',
  y: 'B4',
  7: 'C5',
  u: 'Db5',
  8: 'D5',
  i: 'Eb5',
  9: 'E5',
  o: 'F5',
  0: 'Gb5',
  p: 'G5',
  '-': 'Ab5',
  '[': 'A5',
  '=': 'Bb5',
  ']': 'B5',
  '\\': 'C6'
};

export {
  NOTES,
  VALID_KEYS,
  NOTE_TO_KEY,
  KEY_TO_NOTE
};
