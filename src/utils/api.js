const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://inventorybackend.vercel.app";

export const IMG_BB_BASE_URL = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMG_APIKEY
}`;

export default BASE_URL;
