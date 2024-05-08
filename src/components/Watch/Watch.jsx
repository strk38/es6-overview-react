const Watch = ({ watch }) => {
    const { name, price } = watch;

    return (
        <div>
            <h2>Watches: {name}</h2>
            <h3>Price: {price}</h3>
        </div>
    );
};

export default Watch;