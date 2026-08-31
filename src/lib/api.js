// API base URL configuration
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5055";

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
  { status = "all", search = "" } = {}
) => {
  const params = new URLSearchParams();
  if (status && status !== "all") params.append("status", status);
  if (search) params.append("search", search);

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
