// eslint-disable-next-line import/prefer-default-export
export const encodeQueryString = (params: { [index: string]: string }) => {
  const query = Object.entries(params)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return query ? `?${query}` : "";
};
