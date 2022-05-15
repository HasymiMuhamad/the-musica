import { useQuery } from 'react-query'
import { SERVICES } from '../../configs';


export function GetMusicArtist (){
  const { data : artistsData } = useQuery('artistsData', () =>
    fetch(SERVICES.GET_TOP_ARTIST)
    .then(res =>
      res.json()
    )
  )
  return artistsData;
}

export function GetMusicList () {
  const { data : songsData } = useQuery('songsData', () =>
    fetch(SERVICES.GET_TOP_TRACK)
     .then(res =>
       res.json()
    )
  )
  return songsData;
}
