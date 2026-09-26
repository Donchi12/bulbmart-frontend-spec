export type QueryState<T> =
  | { status: "idle" }
  | { status: "loading"; previous?: T }
  | { status: "success"; data: T }
  | { status: "error"; message: string; previous?: T };

export function keepPreviousData<T>(state: QueryState<T>) {
  return state.status === "loading" ? state.previous : undefined;
}
