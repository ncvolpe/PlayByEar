const VALID_BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
const VALID_WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];
const NOTES = [
  'C4', 'Db4', 'D4', 'Eb4',
  'E4', 'F4', 'Gb4', 'G4',
  'Ab4', 'A4', 'Bb4', 'B4'
];
const NOTE_TO_KEY = {
  C4  : 'z',
  Db4 : 's',
  D4  : 'x',
  Eb4 : 'd',
  E4  : 'c',
  F4  : 'v',
  Gb4 : 'g',
  G4  : 'b',
  Ab4 : 'h',
  A4  : 'n',
  Bb4 : 'j',
  B4  : 'm',
};
const KEY_TO_NOTE = {
  z: 'C4',
  s: 'Db4',
  x: 'D4',
  d: 'Eb4',
  c: 'E4',
  v: 'F4',
  g: 'Gb4',
  b: 'G4',
  h: 'Ab4',
  n: 'A4',
  j: 'Bb4',
  m: 'B4',
};
export {
  NOTES,
  VALID_KEYS,
  NOTE_TO_KEY,
  KEY_TO_NOTE,
};
