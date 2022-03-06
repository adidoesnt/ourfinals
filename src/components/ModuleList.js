import { ScrollView, Text } from "react-native";
import ModuleCard from "./cards/ModuleCard";

export default function ModuleList(props) {
  const modules = props.modules.slice(0, 20);
  return (
    <ScrollView>
      {modules &&
        modules.map((entry) => {
          let moduleId = entry.id;
          let title = entry.title;
          let code = entry.moduleCode;
          let description = entry.description;
          let mcs = entry.moduleCredit;
          return (
            <ModuleCard
              key={moduleId}
              moduleId={moduleId}
              title={title}
              code={code}
              description={description}
              mcs={mcs}
            />
          );
        })}
      {/* {Object.entries(modules).forEach((entry) => {
        let moduleId = entry[1].id;
        let title = entry[1].title;
        let code = entry[1].moduleCode;
        let description = entry[1].description;
        let mcs = entry[1].moduleCredit;

        console.log("called card generator");
        return (
          <Text>{moduleId}</Text>
          //   <ModuleCard
          //     moduleId={moduleId}
          //     title={title}
          //     code={code}
          //     description={description}
          //     mcs={mcs}
          //   />
        );
      })} */}
    </ScrollView>
  );
}
