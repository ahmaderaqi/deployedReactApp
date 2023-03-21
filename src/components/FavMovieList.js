import FavMovieCard from "./FavMovieCard";

function FavMovieList(props){
    return(
        <>
        {props.favArr.map((item)=>{
            return(
                <FavMovieCard title={item.title} overview={item.overview} poster_path={item.poster_path} release_date={item.release_date} id={item.id} addFavoriteHandel={props.addFavoriteHandel}/>
            )

        })}
        
        
        </>
    );
}

export default FavMovieList;