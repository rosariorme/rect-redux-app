export const type = 'getDetailsById';

const getDetailsById = (itemId) => ({
    type,
    payload: +itemId,
});

export default getDetailsById;
