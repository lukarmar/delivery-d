export type Optional<T> = T | undefined;

export type Nullable<T> = T | null;

export type NullableOptional<T> = Optional<Nullable<T>>;
