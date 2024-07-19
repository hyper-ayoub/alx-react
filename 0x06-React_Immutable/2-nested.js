import { fromJS } from 'immutable';

export default fucntion accessImmutableObject(object, array) {
    const mappedObj = fromJS(object);

    return mappedObj.getIn(array, undefined);
}
