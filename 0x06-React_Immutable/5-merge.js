import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const l1 = List(page1);
  const l2 = List(page2);

  return l1.concat(l2);
}

export function mergeElements(page1, page2) {
  const m1 = Map(page1);
  const m2 = Map(page2);

  return m1.merge(m2);
}
