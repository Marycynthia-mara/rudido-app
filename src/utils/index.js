export const isEmpty = (data) => {
    return (
      !data || data.length === 0 || typeof data == "undefined" || data == null
    );
  };