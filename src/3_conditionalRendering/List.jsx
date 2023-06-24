import { people0 } from '../data';
import  avatar  from '../../public/vite.svg'
export const List = () => {
    const def = "Not available";
    return (
        <div>
            {
                people0.map((person) => {
                    const { id, name, nickName, images } = person;
                    // const img = images && images[0].small.url;
                    const img = images?.[0]?.small?.url || avatar;
                    return (
                        <div key={id}>
                            <h2>Name : {name || def}</h2>
                            <h2>Nickname : {nickName || def}</h2>
                            <img src={img} alt={name} style={{width: '50px'}} />
                        </div>
                    )
                })
            }
        </div>
    )
}