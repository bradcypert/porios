import _ from 'lodash';
import Immutable from 'immutable';

export function selectState() {
  return (state) => {
    return _.reduce(arguments, (obj, key) => {
      let value = state.get(key);
      if(Immutable.Iterable.isIterable(value)) {
        value = value.toJS();
      }
      obj[key] = value;
      return obj;
    }, {});
  };
}
