export function get<TS extends (string | number)[]>(...p: TS): (o: Record<string | number, unknown>) => unknown;
