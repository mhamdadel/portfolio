import { useEffect, useState } from "react";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import adkar from "../data/adkar.json";

const Adkar = () => {
  const [prophetsAdkar, setProphetsAdkar] = useState(
    adkar.prophets[Math.floor(Math.random() * adkar.prophets.length)]
  );
  const [quranAdkar, setQuranAdkar] = useState(
    adkar.quran[Math.floor(Math.random() * adkar.quran.length)]
  );

  useEffect(() => {
    const random = [prophetsAdkar, quranAdkar][Math.floor(Math.random() * 2)]
    const intervalId = setInterval(() => {
      toast.info(random.content, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        rtl: true,
        theme: "colored",
        transition: Bounce,
      });
      setProphetsAdkar(adkar.prophets[Math.floor(Math.random() * adkar.prophets.length)]);
      setQuranAdkar(adkar.quran[Math.floor(Math.random() * adkar.quran.length)]);
    }, 70000);

    return () => clearInterval(intervalId);
  }, [prophetsAdkar, quranAdkar]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Adkar;
