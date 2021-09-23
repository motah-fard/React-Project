export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/commentsInfo`;
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};

export const secURL = `https://api.calorieninjas.com/v1/nutrition?query=`;
export const secConfig = {
  headers: {
    'X-Api-Key' : `${process.env.REACT_APP_NUTRITION_KEY}`,
  },
};
