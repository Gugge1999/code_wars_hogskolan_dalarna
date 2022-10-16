function filter_list(l: (string | number)[]) {
  return l.filter((item) => typeof item === 'number');
}
