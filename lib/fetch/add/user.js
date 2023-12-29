import server from "@/lib/server";
const addUser = async (userData) => {
  try {
    const res = await fetch(`${server}/api/signup`, {
      method: "POST", // or 'PUT'
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + "",
      },
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      throw new Error("Failed to add qna");
    }
    const result = await res.json();
    console.log("Success:", result);
    return result;
  } catch (error) {
    console.log("Error adding qna: ", error);
  }
};

export default addUser;
