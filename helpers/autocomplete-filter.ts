const autocompleteFilter = (
  value: string,
  often: string[],
  dispatch: Function,
  addOften: Function,
  setModalAlert: Function
) => {
  const engNum = /^[a-zA-Z0-9]*$/;
  if (!engNum.test(value)) {
    dispatch(setModalAlert("영어로 입력해주세요"));
  } else {
    if (!often.includes(value)) {
      dispatch(addOften(value));
    }
  }
};

export default autocompleteFilter;
