//storage for action creators

export const snackUpdate = (operator, id) => {
    return {
        type: "UPDATE_SNACK_QUANTITY",
        payload: { operator, id }
    };
}