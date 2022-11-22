import './styles/index.scss';
import config from "./config";

export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    if (typeof global === 'undefined') {
        window.fetch(config.base + "config/global.json")
            .then((res) => res.json()
                .then((data) => {
                    window.baseUrl = data['BASE_URL']
                }))
    }
}

