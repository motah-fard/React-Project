export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/commentsInfo`;
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};

export const secURL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_EDEMAM_ID}&app_key=${process.env.REACT_APP_EDEMAM_KEY}&nutrition-type=cooking`;
export const secConfig = {
  headers: {
    Authorization : `Bearer ${process.env.REACT_APP_EDEMAM_KEY}`,
  },
};
