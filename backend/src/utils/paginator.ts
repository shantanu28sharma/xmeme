export const paginator = (page: number, pageSize: number) => {
    const offset = page * pageSize;
    const limit = pageSize;
    return {
      offset,
      limit,
    };
  };
  