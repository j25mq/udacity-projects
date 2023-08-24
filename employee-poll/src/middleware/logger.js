const logger = (store) => (next) => (action) => {
    // console.group(action.type);
    const returnValue = next(action);
    // console.log("The current action", action);
    // console.log("The new state", store.getState());
    // console.groupEnd();
    return returnValue;
};

export default logger;