import { useLocation, useNavigate, useParams } from "react-router-dom";

export function formatDate(timestamp) {
    const d = new Date(timestamp);
    const time = d.toLocaleTimeString("en-US");
    return time.substring(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function getCurrentTimestamp () {
    return Date.now()
}

export const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return ComponentWithRouterProp;
};