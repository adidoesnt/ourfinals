import AssignmentCard from '../components/cards/AssignmentCard';
import { ScrollView } from 'react-native';

export default function AssignmentList(props) {
    {
      const assignments = props.assignments;
      return (
      <ScrollView>
        {assignments &&
          assignments.map((entry) => {
            return (
              <AssignmentCard key={entry.id} assignmentData={entry}/>
            );
          })}
        </ScrollView>
      );
    }
  }