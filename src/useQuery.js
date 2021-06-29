import { useState, useEffect } from "react";
import axios from 'axios';

function useQuery(query) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [data, setData] = useState();
    
    
    useEffect(() => {

        async function getData() {
            try {
                setLoading(true);
                const response = await axios({
                    method: 'post',
                    url: 'https://rickandmortyapi.com/graphql',
                    data: {
                        query: query,
                    },
                });
                setData(response.data.data.episodes);
            }
            catch(err) {
                if (axios.isCancel(err)) console.log("request canceled");
                setError(err);
            }
            finally {
                setLoading(false);
            }
        }
        
        getData();

    }, [query]);

    return [loading, error, data];

}

export default useQuery;