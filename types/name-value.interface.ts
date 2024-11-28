import IName from "./name.interface";
import IValue from "./value.interface";

export default interface INameValue<T> extends IName<T>, IValue<T> {}
