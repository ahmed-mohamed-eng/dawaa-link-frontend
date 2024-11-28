export default interface IOnClickComponent<V = undefined> {
    onClickComponent?: (value?: V) => void;
}