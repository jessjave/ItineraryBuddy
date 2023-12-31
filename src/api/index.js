import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlaceData = async (sw, ne) => {
  console.log('sw:', sw)
  console.log('ne:', ne)

  try {
    const response = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
      },
      headers: {
        'X-RapidAPI-Key': 'API-Key',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    })

    const { data } = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}
