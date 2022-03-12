import { ScrollView, Text } from "react-native";
import ModuleCard from "./cards/ModuleCard";

export default function ModuleList(props) {
  {
    const modules = props.modules.slice(0, 5);
    return (
    <ScrollView>
      {modules &&
        modules.map((entry) => {
          let moduleId = entry.id;
          let title = entry.title;
          let code = entry.moduleCode;
          return (
            <ModuleCard
              key={moduleId}
              moduleId={moduleId}
              title={title}
              code={code}
            />
          );
        })}
      </ScrollView>
    );
  }
}
