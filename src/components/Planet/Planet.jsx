const Planet = (props) => {
    const data = props.item;
    return (
        <>
            <button className="relative block bg-black group rounded-xl " onClick={e => {
              console.log("SHUT THE FUCK UP")
            }}
            >
                <img
                    className="rounded-xl absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
                    src={data.planet_imgs[0]}
                    alt={data.planet_name}
                />
                <div className="relative p-8">
                    <p className="text-2xl font-bold text-white">{data.planet_name}</p>

                    <div className="mt-64">
                    <div
                        className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
                    >
                        <p className="text-sm text-white">
                        {data.planet_info}
                        </p>
                    </div>
                    </div>
                </div>
            </button>
        </>
    );
}

export default Planet;