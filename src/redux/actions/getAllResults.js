export const type = 'getAllResults';

const getAllResults = (text) => ({
    type,
    payload: text,
});

export default getAllResults;
