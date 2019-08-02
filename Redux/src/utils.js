export function coursesSortFn(a, b, params) {
  return a[params.header] > b[params.header]
    ? params.direction
    : params.direction * -1;
}
