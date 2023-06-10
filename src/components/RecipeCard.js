import CustomImage from '../components/CustomImage';

export default function RecipeCard({title, img, authorImg}){
    return (
        <div className="recipe-card">
            <CustomImage src={img} pt="65%"/>
            <div className="recipe-card-info">
                <img className='author-image' src={authorImg} alt="" />
                <p className='recipe-title'>{title}</p>
                <p className="recipe-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sunt!
                </p>
                <a className='view-btn' href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}