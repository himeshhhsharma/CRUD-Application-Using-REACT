const apiRequest = async (url = "", optionsObj = null, errMssg = null) => {
  try {
    const response=await fetch(url,optionsObj);
    if(!response.ok) throw Error('Please Reload the App');
  } catch (err) {
    errMssg=err.message;
  } finally {
    return errMssg;
  }
};

export default apiRequest;
