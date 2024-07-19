import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const m1 = Map(page1);
  const m2 = Map(page2);

  return m1.mergeDeep(m2);
}
