type Foo = {
 a: number;
 b?: string;
 c: boolean;
}

type Simplify<T> = {
  [P in keyof T]: T[P]
}

type SetOptional<T, K extends keyof T> =
  Simplify<
    Partial<Pick<T, K>> &
    Pick<T, Exclude<keyof T, K>>
  >
type SetRequired<T, K extends keyof T> = Simplify<Pick<T, Exclude<keyof T, K>> & Required<Pick<T, K>>>

// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>;

// 测试用例
type SomeRequired = SetRequired<Foo, 'b' | 'c'>;