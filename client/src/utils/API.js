export const createFollowUpRequest = async (furData) => {
  const res = await fetch("/api/cwu", {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(furData),
  });

  const contentType = res.headers.get("content-type");

  if (!res.ok) {
    const errText = await res.text(); // try to capture the response body, even if HTML
    throw new Error(`Request failed: ${res.status} - ${errText}`);
  }

  if (contentType && contentType.includes("application/json")) {
    return await res.json();
  } else {
    return { message: "Success (non-JSON response)" };
  }
};
