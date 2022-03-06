import "../styles/ratings.css"

/*
  Rating component
 */

const numStars = 5;

function removeClass(items, className) {
    for (let item of items) {
        item.classList.remove(className);
    }
}

function handleRate(e, updateRating) {
    const selectedElement = e.target.parentElement;
    const container = selectedElement.parentElement;
    if (container) {
        const items = container.querySelectorAll('.rating-item');
        // remove all active classes from current stars.
        removeClass(items, 'active');
        // add active class to the stars before the selected star.
        let curElement = selectedElement
        let rating = 0;
        while (curElement) {
            curElement.classList.add('active');
            curElement = curElement.previousElementSibling;
            rating++;
        }
        // update the state and send it to the backend server
        updateRating(rating)
    }
}

function handleHover(e) {
    const selectedElement = e.target.parentElement;
    const container = selectedElement.parentElement;
    if (container) {
        const items = container.querySelectorAll('.rating-item');
        removeClass(items, 'hover');
        let curElement = selectedElement;
        while (curElement) {
            curElement.classList.add('hover');
            curElement = curElement.previousElementSibling;
        }
    }
}

function Star({filled, updateRating}) {
    // create a star by SVG.
    return (
        <svg className={filled? 'rating-item active': 'rating-item'}
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             stroke="black"
             onClick={(e) => handleRate(e, updateRating)}
             onMouseOver={(e) => handleHover(e)}
        >
            <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828
                1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
        </svg>
    )
}

export default function StarRatings({numFilled, updateRating}){
    let stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(
            <Star filled={i < numFilled}
                         updateRating={updateRating}
                         key={i}/>
        )
    }
    return (
        <div>
            <ul className={'rating'}>
                {stars}
            </ul>

        </div>

        )
}
