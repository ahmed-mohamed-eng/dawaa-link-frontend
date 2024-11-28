import INameValue from "./name-value.interface";
import IOnSelectValue from "./user-actions/onSelect.interface";

export default interface IBasicProperties<V>
  extends INameValue<V>,
    IOnSelectValue<V> {}
