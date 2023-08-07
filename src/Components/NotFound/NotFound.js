import { Link } from "react-router-dom";
import "./NotFound.css"
import { memo } from "react";
const NonFound = () => {
    return (
        <main className="main404">

            <div className="container404">
                <div className="content1">

                    <h1>404</h1>
                    <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="pic404" />
                </div>

                <div className="content2">
                    <h3 className="h2">
                        Look like you're lost
                    </h3>

                    <p>the page you are looking for not avaible!</p>
                    <Link to="/" className="link_404">Go to Home</Link>
                </div>
            </div>

        </main>
    );
}

export default memo(NonFound);