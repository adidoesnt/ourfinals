import { ScrollView } from "react-native";
import ModuleCard from "./cards/ModuleCard"

export default function ModuleList(props) {
    return (
        <ScrollView>
            {(Object.entries(props.modules)).forEach(entry => {
                let moduleId = entry[1].id;
                let title = entry[1].title;
                let code = entry[1].moduleCode;
                let description = entry[1].description;
                let mcs = entry[1].moduleCredit;
                <ModuleCard moduleId={moduleId} title={title} code={code} description={description} mcs={mcs}/>
                console.log('called card generator');
            })}
        </ScrollView>
    );
}