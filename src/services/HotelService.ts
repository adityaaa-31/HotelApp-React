import axios from "axios";

export async function getHotels() {
  const hotels = await axios.get("http://localhost:8080/hotels");

  if (!hotels.status) {
    throw Error("Failed");
  }

  return hotels.data;
}
