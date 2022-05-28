import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <div class="relative">
            <img
                class="w-full"
                src="https://colorlib.com/cdn-cgi/image/width=1920,height=933,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/sites/2/404-error-template-3.png"
                alt=""
            />
            <Link to="/cars-list" class="w-36 absolute bottom-0 left-0 right-0 mx-auto">
                <button class="bg-green-300 -mt-32 rounded-lg px-4 py-2 ">
                    Return to home
                </button>
            </Link>
        </div>
    );
};
