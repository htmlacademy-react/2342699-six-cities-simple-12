import ReviewItem from "../reviewItem/ReviewItem";

type ReviewListProps = {
    reviews: number[];
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
    return (<>
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
        <ul className="reviews__list">
            {reviews.map((i)=> {
                    return <ReviewItem/>;
            })}
        </ul>
    </>)
}

export default ReviewList;