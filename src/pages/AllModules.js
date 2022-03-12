import { useEffect, useState } from "react";
import { View, ScrollView, Text} from 'react-native';
import { Card } from 'react-native-elements';
import ModuleList from "../components/ModuleList";

export default function AllModules() {
    const [modules, setModules] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch('https://api.nusmods.com/v2/2021-2022/moduleInfo.json')
      .then(repsonse => {
        return repsonse.json();
      }).then(data => {
        const temp = [];
        for(const key in data) {
          const module = {
            id: key,
            ...data[key]
          };
          temp.push(module)
        }
        setModules(temp);
        setLoading(false);
      });
    }, [])

    return (
        <View style={{flex: 1}}>{!loading ? (
          <ScrollView>
              <Text>All Modules</Text>
              <ModuleList modules={modules}/>
          </ScrollView>
      ) : <ScrollView>
            <Card>
            <Card.Title>Loading...</Card.Title>
            </Card>
          </ScrollView>}
      </View>
    );
}