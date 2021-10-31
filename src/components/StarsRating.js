const starsRating = (statement) => {
    return (
        <div style={{ display:"flex" }}>
            {
                Array.from({ length: 5 }, (_, i) => i + 1).map((val, index) =>
                    <div key={index}>
                        {val <= statement ?
                            <div key={index} style={{ color: "#FF8412" }}>
                                &#9733;
                            </div>
                            :
                            <div key={index} style={{ color: "#C9C9C9" }}>
                                &#9733;
                            </div>
                        }
                    </div>
                )
            }
        </div>
    );
};

export default starsRating;