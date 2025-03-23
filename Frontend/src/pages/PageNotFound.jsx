import { Link } from 'react-router-dom'
import '../App.css'

function PageNotFound() {
    
    return (
        <div className="PageNotFound">
            <h2 className="head2"><i className="fa-solid fa-face-sad-tear"></i>  Page Not Found ~ Error 404</h2>
            <p className="about404">What were you looking for?
                Maybe going back <Link to="/">home</Link> will help you find it.</p>
        </div>
    )
    
}
export default PageNotFound