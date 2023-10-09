import{ useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useJewelry = () => {
  const [user] = useAuthState(auth);
    const [jewelries, setJewelries] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/jewerly")
        .then((res) => res.json())
        .then((data) => setJewelries(data));
    }, [user]);

    return [jewelries, setJewelries]
};

export default useJewelry;