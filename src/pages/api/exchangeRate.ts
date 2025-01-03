import axios from "axios";

const api_key = "ef64261aa6d3a80ac80033db";
const base_url = "https://api.exchangerate-api.com/v4/latest/USD";

export const convertToNaira = async (amount: number) => {
  try {
    const response = await axios.get(`${base_url}?access_key=${api_key}`);
    const data = response.data;
    const nairaRate = data.rates.NGN;
    const convertedAmount = amount * nairaRate;
    return convertedAmount;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const amountInNaira = await convertToNaira(100);
console.log(amountInNaira);

export default convertToNaira;