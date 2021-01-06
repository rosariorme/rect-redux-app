export const type = 'deleteById';

const deleteById = (itemId) => ({
    type,
    payload: +itemId,
});

export default deleteById;
