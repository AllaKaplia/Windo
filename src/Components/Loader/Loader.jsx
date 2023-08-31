import { Circles } from  'react-loader-spinner';

const Loader = () => {
    return(
        <Circles
        height="50"
        width="50"
        color="#DF5306"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    )
}

export default Loader;