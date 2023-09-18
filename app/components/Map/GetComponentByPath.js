import SetByUserMarker from "@/app/components/Map/setByUserMarker";
import SetByUserMarkerSignal from "@/app/components/Map/setByUserMarkerSignal";

export const pathsComponents = {
    '/geo-settings': SetByUserMarker,
    '/home/newSignal': SetByUserMarkerSignal
}

const GetComponentByPath = ({path, props}) => {
    const ComponentToRender = pathsComponents[path] || null;
    return <> {ComponentToRender ? <ComponentToRender {...props} /> : <> </>} </>
}

export default GetComponentByPath