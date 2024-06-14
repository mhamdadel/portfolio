import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchRandomJoke } from '../redux/actions/jokesActions';

const Joke = () => {
  const dispatch = useDispatch();
  const joke = useSelector((state) => state.jokes.joke);

  useEffect(() => {
    // dispatch(fetchRandomJoke());

    const intervalId = setInterval(() => {
      dispatch(fetchRandomJoke());
    }, 25000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  useEffect(() => {
    if (joke) {
      toast.info(joke.setup, {
        position: 'top-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
        onClose: () => {
          toast.success(joke.punchline, {
            position: 'top-left',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            transition: Bounce,
          });
        },
      });
    }
  }, [joke]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Joke;
