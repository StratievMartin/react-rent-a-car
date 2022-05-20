import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <div>
            <img
                src="https://3kllhk1ibq34qk6sp3bhtox1-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png"
                alt=""
            />
            <Link to="/">
                <button class="bg-green-300 rounded-lg px-4 py-2 mt-5">
                    Return to home
                </button>
            </Link>
        </div>
    );
};
