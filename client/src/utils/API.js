export const createFollowUpRequest = (furData) => {
        return fetch("/api/cwu", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(furData),
        });
}