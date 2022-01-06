const FREE_QUOTES_API_END_POINT = 'https://free-quotes-api.herokuapp.com/';

export const requestQuotes = async () => {
  try {
    const res = await fetch(`${FREE_QUOTES_API_END_POINT}`);
    if (res.ok) {
      return await res.json();
    }
    throw new Error('API 호출 오류');
  } catch (e) {
    console.log(e.message);
  }
};
