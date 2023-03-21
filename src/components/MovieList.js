import Movie from "./Movie";

function MovieList(props){
    

    return(
        <>
        {props.fetchData.map((item)=>{
            return(
                <Movie title={item.title} overview={item.overview} poster_path={item.poster_path} release_date={item.release_date} id={item.id}/>
            )

        })}
        
        
        </>
    );
}

export default MovieList;