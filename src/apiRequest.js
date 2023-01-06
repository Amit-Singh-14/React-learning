const apiRequest = async (url = " ", optionObj = null, errMsg = null) => {
  try {
    // console.log(url);
    console.log(optionObj);
    const response = await fetch(url, optionObj);
    console.log(response);
    if (!response.ok) throw Error("pls reload the app");
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;
