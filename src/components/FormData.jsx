import { useState } from 'react';
import formData from '../_assets/spi.json';

function FormData() {
    const [data, setData] = useState({});

    const handleInputChange = (questionId, value) => {
        setData(prevData => ({
            ...prevData,
            [questionId]: value
        }))
    }

    return ( 
        <form>
            <h1>{formData.name}</h1>
        </form>
     );
}

export default FormData;