import React, { useEffect, useState } from 'react';
import { getAvailableCardProducts } from '../services/ProductService';

const TestCards = () => {
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);

    const fetchData = async () => {
        await getAvailableCardProducts()
            .then(res => {
                setProducts(res)
                setReload(true)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData().catch(err => console.log(err))
    }, [reload]);

    return (
        <>
            {
                console.log(products) // map => cards
            }
        </>
    )
};

export default TestCards;