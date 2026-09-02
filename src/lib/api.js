// API base URL configuration
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://genzes.in";

// Helper to construct full image/file URLs
export const getImageUrl = (imagePath) => {
  if (!imagePath) return null;
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  return `${API_BASE_URL}${cleanPath}`;
};

// Safe JSON fetcher helper to prevent "Unexpected token < in JSON"
const safeFetchJson = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const contentType = response.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      const text = await response.text();
      if (text.includes("<!DOCTYPE") || text.includes("<html")) {
        throw new Error(
          "Backend server is offline or returned HTML. Please make sure the server is running on port 5005 (run 'npm start' in server folder)."
        );
      }
      throw new Error(text || `Server error with status code ${response.status}`);
    }

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || `Request failed with status ${response.status}`);
    }

    return data;
  } catch (error) {
    if (
      error.message.includes("Failed to fetch") ||
      error.message.includes("NetworkError") ||
      error.name === "TypeError"
    ) {
      throw new Error(
        "Cannot connect to backend server. Please make sure the server is running on port 5005."
      );
    }
    throw error;
  }
};

// =========================================
// SUPPORT API (PUBLIC)
// =========================================

export const submitSupportTicket = async (formData) => {
  return await safeFetchJson(`${API_BASE_URL}/api/support`, {
    method: "POST",
    body: formData, // multipart/form-data
  });
};

// =========================================
// ADMIN API (AUTHENTICATED)
// =========================================

export const adminLogin = async (email, password) => {
  return await safeFetchJson(`${API_BASE_URL}/api/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

export const getAdminProfile = async (token) => {
  return await safeFetchJson(`${API_BASE_URL}/api/admin/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAdminStats = async (token) => {
  return await safeFetchJson(`${API_BASE_URL}/api/admin/stats`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getSupportTickets = async (
  token,
  { status = "all", search = "", page = 1, limit = 20 } = {}
) => {
  const params = new URLSearchParams();
  if (status && status !== "all") params.append("status", status);
  if (search) params.append("search", search);
  if (page) params.append("page", page);
  if (limit) params.append("limit", limit);

  const url = `${API_BASE_URL}/api/admin/supports?${params.toString()}`;

  return await safeFetchJson(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateTicketStatus = async (token, ticketId, status) => {
  return await safeFetchJson(
    `${API_BASE_URL}/api/admin/supports/${ticketId}/status`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    }
  );
};

export const deleteTicket = async (token, ticketId) => {
  return await safeFetchJson(
    `${API_BASE_URL}/api/admin/supports/${ticketId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// =========================================
// HERO VIDEO API
// =========================================

export const getActiveVideos = async () => {
  return await safeFetchJson(`${API_BASE_URL}/api/videos/active`);
};

export const getAllVideos = async (token) => {
  return await safeFetchJson(`${API_BASE_URL}/api/videos/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const uploadHeroVideo = async (token, formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/videos/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData, // multipart/form-data
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to upload video");
    }

    return data;
  } catch (error) {
    console.error("uploadHeroVideo error:", error);
    throw error;
  }
};

export const toggleVideoStatus = async (token, videoId) => {
  return await safeFetchJson(`${API_BASE_URL}/api/videos/${videoId}/toggle`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteHeroVideo = async (token, videoId) => {
  return await safeFetchJson(`${API_BASE_URL}/api/videos/${videoId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
