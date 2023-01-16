// eslint-disable-next-line import/prefer-default-export
export const encodeQueryString = (params: { [index: string]: string }) => {
  const query = Object.entries(params)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return query ? `?${query}` : "";
};

export const dateFormatter = (date: string, full: boolean) => {
  const desiredDate = new Date(date);
  const day = desiredDate.getDay();
  const month = desiredDate.getMonth();
  const year = desiredDate.getFullYear();

  if (full) {
    const formatted = `${day}.${month}.${year}`;
    return formatted;
  }
  const formatted = `${year}`;
  return formatted;
};
